// Danh sách khách mời lễ tốt nghiệp
// Cách dùng: Mở link https://sennahoangphuc.vercel.app/#/thiepmoi/<Tên trong URL>
// Gợi ý: dùng encodeURIComponent() cho tên có dấu cách / ký tự đặc biệt

export const guestList = [
  {
    name: 'Quốc Huỳnh',
    slug: 'Quoc%20Huynh',
    note: 'Bạn thân',
    invited: true,
  },
  {
    name: 'Ánh Xuân',
    slug: 'Anh%20Xuan',
    note: 'Bạn thân',
    invited: true,
  },
  {
    name: 'Thanh Trúc',
    slug: 'Thanh%20Truc',
    note: 'Bạn thân',
    invited: true,
  },
  {
    name: 'Chị Quế Lâm',
    slug: 'Chi%20Que%20Lam',
    note: 'Đàn chị',
    invited: true,
  },
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
