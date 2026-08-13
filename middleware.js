// Vercel Edge Middleware
// Chạy trên edge network TRƯỚC khi response về client
// → Inject OG meta tags động theo URL (slug → tên có dấu)

const SITE_URL = 'https://sennahoangphuc.vercel.app';

// Hardcode guest list để tránh edge runtime không bundle được ESM imports
const guestList = [
  { name: 'Quốc Huỳnh', slug: 'QuocHuynh' },
  { name: 'Ánh Xuân', slug: 'AnhXuan' },
  { name: 'Thanh Trúc', slug: 'ThanhTruc' },
  { name: 'Chị Quế Lâm', slug: 'ChiQueLam' },
  { name: 'Chị Tường Vy', slug: 'TuongVy' },
  { name: 'Chị Ngọc Yên', slug: 'NgocYen' },
  { name: 'Hương Giang', slug: 'HuongGiang' },
];

export const config = {
  matcher: [
    '/((?!_next/|api/|favicon|.*\\..*).*)',
  ],
};

// Helper: tìm tên theo slug
function resolveGuest(slug) {
  if (!slug) return null;
  const decoded = decodeURIComponent(slug);
  const found = guestList.find(
    (g) => g.slug.toLowerCase() === decoded.toLowerCase()
  );
  if (found) return found;
  // Fallback: hiển thị tên đẹp hơn slug thô
  return { slug: decoded, name: toTitleCase(decoded) };
}

// Helper: chuyển "ChiQueLam" → "Chi Que Lam"
function toTitleCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim();
}

// Helper: escape string cho meta tags
function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Match /thiepmoi/<slug>
  const match = pathname.match(/^\/thiepmoi\/(.+?)\/?$/);

  // Nếu không phải trang thiệp → trả bình thường
  if (!match) {
    return fetch(request);
  }

  const slug = match[1];
  const guest = resolveGuest(slug);
  if (!guest) return fetch(request);

  const title = `Thân mời ${guest.name} — Lễ Tốt Nghiệp 2026`;
  const description = `${guest.name} ơi! Mình trân trọng mời bạn đến chung vui trong ngày lễ tốt nghiệp của Nguyễn Hoàng Phúc — 15:00 ngày 28/08/2026 tại Nhà Hát Hòa Bình TP.HCM.`;
  const guestPageUrl = `${SITE_URL}/thiepmoi/${encodeURIComponent(guest.slug)}`;
  const ogImageUrl = `${SITE_URL}/api/og?slug=${encodeURIComponent(guest.slug)}`;

  // Lấy response gốc (index.html) — đọc đúng UTF-8
  const response = await fetch(request);
  const buffer = await response.arrayBuffer();
  let html = new TextDecoder('utf-8').decode(buffer);

  // Xóa tất cả meta tags cũ (og:*, twitter:*, description, title)
  html = html.replace(
    /<title>[\s\S]*?<\/title>/g,
    ''
  );
  html = html.replace(
    /<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/g,
    ''
  );
  html = html.replace(
    /<meta\s+property="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/g,
    ''
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/g,
    ''
  );
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/g,
    ''
  );

  // Inject meta mới ngay trước </head>
  const metaInjections = `
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeAttr(guestPageUrl)}" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:image" content="${escapeAttr(ogImageUrl)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:site_name" content="Lễ Tốt Nghiệp — Nguyễn Hoàng Phúc" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${escapeAttr(guestPageUrl)}" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />
  `;

  html = html.replace('</head>', `${metaInjections}\n  </head>`);

  return new Response(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=86400',
    },
  });
}