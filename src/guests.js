// Danh sách khách mời lễ tốt nghiệp
// Cách dùng: Mở link https://sennahoangphuc.vercel.app/#/thiepmoi/<Tên trong URL>
// Gợi ý: dùng encodeURIComponent() cho tên có dấu cách / ký tự đặc biệt

export const guestList = [
  { name: 'Quốc Huỳnh', slug: 'QuocHuynh', note: 'Bạn thân', invited: true },
  { name: 'Ánh Xuân', slug: 'AnhXuan', note: 'Bạn thân', invited: true },
  { name: 'Thanh Trúc', slug: 'ThanhTruc', note: 'Bạn thân', invited: true },
  { name: 'Chị Quế Lâm', slug: 'ChiQueLam', note: 'Đàn chị', invited: true },
  { name: 'Chị Tường Vy', slug: 'TuongVy', note: 'Đàn chị', invited: true },
  { name: 'Chị Ngọc Yên', slug: 'NgocYen', note: 'Đàn chị', invited: true },
  { name: 'Hương Giang', slug: 'HuongGiang', note: 'Bạn', invited: true },
];

// Helper: tạo link thiệp mời nhanh
export const buildInviteUrl = (slug, baseUrl = 'https://sennahoangphuc.vercel.app') => {
  return `${baseUrl}/#/thiepmoi/${slug}`;
};

export const inviteUrls = guestList.map((guest) => ({
  ...guest,
  url: buildInviteUrl(guest.slug),
  urlAutoOpen: buildInviteUrl(guest.slug) + '?open=1',
}));
