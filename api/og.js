// Dynamic OG Image endpoint
// Gọi: /api/og?slug=AnhXuan hoặc /api/og?name=Ánh Xuân
// Trả về SVG 1200x630 với tên khách được render vào

const guestList = [
  { name: 'Quốc Huỳnh', slug: 'QuocHuynh' },
  { name: 'Ánh Xuân', slug: 'AnhXuan' },
  { name: 'Thanh Trúc', slug: 'ThanhTruc' },
  { name: 'Chị Quế Lâm', slug: 'ChiQueLam' },
];

export const config = {
  runtime: 'edge',
};

const COLORS = {
  bg: '#0a1f44',
  surface: '#102a5e',
  accent: '#f59e0b',
  accentLight: '#fbbf24',
  text: '#ffffff',
  textMuted: '#cbd5e1',
};

// Helper: escape XML
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Helper: tìm tên theo slug
function resolveGuest(slug, name) {
  if (name) return decodeURIComponent(name);
  if (!slug) return 'Quý khách';
  const decoded = decodeURIComponent(slug);
  const found = guestList.find(
    (g) => g.slug.toLowerCase() === decoded.toLowerCase()
  );
  return found ? found.name : decoded;
}

// Helper: word-wrap thủ công cho SVG <text>
function wrapText(text, maxCharsPerLine) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default async function handler(request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  const nameParam = url.searchParams.get('name');

  const guestName = resolveGuest(slug, nameParam);
  const titleLines = wrapText(`Thân mời ${guestName}`, 18);
  const subtitle = 'Lễ Tốt Nghiệp 2026 • 28 Tháng 8';
  const profileName = 'Nguyễn Hoàng Phúc';

  // Font size động theo số dòng tên
  const titleFontSize = titleLines.length >= 3 ? 76 : titleLines.length === 2 ? 92 : 110;

  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="${COLORS.bg}"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="8" fill="${COLORS.accent}"/>
  <rect x="0" y="622" width="1200" height="8" fill="${COLORS.accent}"/>

  <!-- Decorative side borders -->
  <rect x="60" y="80" width="4" height="470" fill="${COLORS.accent}" rx="2"/>
  <rect x="1136" y="80" width="4" height="470" fill="${COLORS.accent}" rx="2"/>

  <!-- Top tag -->
  <rect x="80" y="110" width="280" height="40" rx="20" fill="${COLORS.surface}" stroke="${COLORS.accent}" stroke-width="2"/>
  <text x="220" y="137" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="900" fill="${COLORS.accent}" letter-spacing="3">
    THIỆP MỜI LỄ TỐT NGHIỆP
  </text>

  <!-- Title: "Thân mời [Tên]" -->
  ${titleLines
    .map(
      (line, i) =>
        `<text x="100" y="${
          250 + i * (titleFontSize * 1.1)
        }" font-family="Inter, Arial, sans-serif" font-size="${titleFontSize}" font-weight="900" fill="${COLORS.text}">${escapeXml(line)}</text>`
    )
    .join('\n  ')}

  <!-- Accent underline -->
  <rect x="100" y="${
    250 + titleLines.length * (titleFontSize * 1.1) + 20
  }" width="200" height="6" fill="${COLORS.accent}" rx="3"/>

  <!-- Subtitle -->
  <text x="100" y="${
    250 + titleLines.length * (titleFontSize * 1.1) + 80
  }" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="700" fill="${COLORS.accent}">${escapeXml(subtitle)}</text>

  <!-- Bottom info card -->
  <rect x="80" y="480" width="1040" height="80" rx="12" fill="${COLORS.surface}" stroke="${COLORS.accent}" stroke-width="2"/>
  <text x="110" y="515" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="900" fill="${COLORS.accent}" letter-spacing="2">
    ĐỊA ĐIỂM
  </text>
  <text x="110" y="545" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="${COLORS.text}">
    Nhà Hát Hòa Bình TP.HCM
  </text>
  <text x="700" y="515" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="900" fill="${COLORS.accent}" letter-spacing="2">
    THỜI GIAN
  </text>
  <text x="700" y="545" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="${COLORS.text}">
    15:00 • 28/08/2026
  </text>

  <!-- Footer brand -->
  <text x="1100" y="595" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="900" fill="${COLORS.accent}" letter-spacing="3">
    ${escapeXml(profileName.toUpperCase())} • UEF GRADUATE
  </text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}