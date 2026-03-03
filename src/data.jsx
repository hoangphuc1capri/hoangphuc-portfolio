import { m } from 'framer-motion';
import { Monitor, Globe, Smartphone, Book, ShoppingCart, Users, Calendar, Utensils, Award, Code2, Database, Terminal } from 'lucide-react';

export const profile = {
  name: "Nguyễn Hoàng Phúc",
  role: "Web Developer Student @ UEF",
  bio: "Sinh viên năm cuối chuyên ngành Công nghệ Phần mềm tại UEF. Với tư duy giải quyết vấn đề dựa trên thực tiễn, mình tập trung xây dựng các giải pháp phần mềm có giá trị cộng đồng và hiệu quả quản lý cao.",
  university: "Đại học Kinh tế - Tài chính TP.HCM (UEF)",
  major: "Công nghệ Phần mềm",
  birthYear: "2004",
  social: {
    github: "https://github.com/hoangphuc1capri",
    linkedin: "www.linkedin.com/in/hoàng-phúc-nguyễn-56783a3a6",
    email: "hoangphuc.capri.0501@gmail.com"
  }
};



export const projects = {
  featured: {
    title: "Website Quản Lý Hoạt Động Cộng Đồng",
    subtitle: "Đồ án Doanh nghiệp - Service-Learning UEF",
    desc: "Hệ thống quản lý chuyên sâu kết nối sinh viên và các dự án xã hội cho Trung tâm Service-Learning UEF.",
    detail: "Dự án giải quyết vấn đề quản lý thủ công hàng nghìn sinh viên tham gia hoạt động cộng đồng. Hệ thống hỗ trợ đăng ký, điểm danh, và xuất báo cáo tự động.",
    tech: ["React", ".NET MVC 5", "SQL Server", "Tailwind"],
    color: "from-blue-600 to-cyan-500"
  },
  academic: [
    {
      title: "Quản Lý Nhà Hàng",
      subject: "Ứng dụng Desktop",
      tech: ["C#", ".NET", "WinForms"],
      icon: <Utensils size={24} />,
      desc: "Quản lý order và doanh thu thời gian thực."
    },
    // {
    //   title: "Quản Lý Thư Viện",
    //   subject: "Công nghệ Phần mềm",
    //   tech: ["PHP"],
    //   icon: <Book size={24} />,
    //   desc: "Hệ thống mượn trả sách theo quy trình chuẩn."
    // },
    {
      title: "Trang Thương Mại Điện Tử",
      subject: "Công nghệ Java",
      tech: ["Java Spring Boot", "MySQL"],
      icon: <ShoppingCart size={24} />,
      desc: "Web bán hàng full-stack với luồng thanh toán."
    },
    {
      title: "Quản Lý Tài Chính",
      subject: "Lập trình Mobile",
      tech: ["Android", "Firebase"],
      icon: <Smartphone size={24} />,
      desc: "App theo dõi thu chi cá nhân cho sinh viên."
    },
    {
      title: "Quản Lý Sự Kiện",
      subject: "Lập trình Web Nâng cao",
      tech: [".NET Core", "SQL Server"],
      icon: <Calendar size={24} />,
      desc: "Nền tảng đăng ký sự kiện quy mô lớn."
    }
  ]
};
// THÊM ĐOẠN NÀY VÀO CUỐI FILE data.jsx
export const events = [
  {
    id: 1,
    title: "Dòng Kênh Xanh",
    role: "AV & Visual Operator",
    year: "2026",
    desc: "Trực tiếp setup hệ thống âm thanh, ánh sáng và điều phối tín hiệu Visual LED. Đảm bảo chất lượng trình diễn và xử lý mượt mà các tình huống kỹ thuật 'real-time' trên sân khấu.",
    images: [
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/600205123_887157013886074_312272834044954556_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=2D-yxI9-jQkQ7kNvwFwsUED&_nc_oc=AdlZeH1nD2nh7_IUV76plLlmtSI7LELlgv-OQ4uNXrqISXkA3yH1dgbx5RGmu155WsI&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=-tNA6k2LkRidNM5nI8FNKw&_nc_ss=8&oh=00_AfzMy10QE2Y50r0qKNuF5ctNdJerHLpE9--sa6kg7rHXvA&oe=69AC12FA"
    ]
  },
  {
    id: 2,
    title: "AlterCop 30",
    role: "Stage & Technical Manager",
    year: "2025",
    desc: "Chịu trách nhiệm chạy đường dây kịch bản kỹ thuật. Điều phối nhịp nhàng giữa màn hình LED, hệ thống micro và ánh sáng, đảm bảo sự kiện diễn ra liền mạch và chuyên nghiệp.",
    images: [
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/593194758_879057688029340_7228884400892363019_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=dBdA_5xzkRkQ7kNvwEtU-7y&_nc_oc=Adk8xByUjCAMfHPE3HGLGT2uE4cCH-2k26Pne20oL61HokAXqxsNvj3bMPH5LVzp2p0&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=-xLmNgHz8hpXMKHQQyDBxw&_nc_ss=8&oh=00_AfyonFdyqEdKhSIJ8OQrxRPKbMR6Qo0OH-OcxzcwswQvCA&oe=69AC1C51",
    ]
  },
  {
    id: 3,
    title: "Vietnam Innovation Summit 2025",
    role: "LED System Technician",
    year: "2025",
    desc: "Vận hành hệ thống trình chiếu LED tại sân khấu Collab. Đảm bảo tín hiệu hình ảnh sắc nét, đồng bộ nội dung với các diễn giả tại hội nghị đổi mới sáng tạo quy mô lớn.",
    images: [
      "/events/6.jpg",
    ]
  },
  {
    id: 4,
    title: "CSL Orientation Day",
    role: "Technical Director",
    year: "2025",
    desc: "Đảm nhận vai trò 'nhạc trưởng' kỹ thuật. Lên phương án và trực tiếp tổng điều phối toàn bộ hệ thống âm thanh, ánh sáng, hình ảnh, mang lại trải nghiệm trọn vẹn nhất cho người tham dự.",
    images: [
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/572002753_851352064133236_8861797660578298529_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iLgqXiovNt0Q7kNvwGpubP8&_nc_oc=AdnOzgtyHndxNdHUJTcRbJmbikkvR3YnBvzMWcffreCjt4Zw5OjmZ-Mga8WMldm60M8&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=3WGcXkoxaxyGF5D0Zrg2-Q&_nc_ss=8&oh=00_Afydn9K4oPTsKklUJaVQToJGgl18cU8_fWWs2N16JVo-oA&oe=69AC4471",
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/571203218_851352130799896_4097926985753283211_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-UYbtZw8fZ0Q7kNvwEBHxZI&_nc_oc=AdmCopVmtRaKDKEvXa7_7jveLDiaDJvOtKBzZXKXRfRqqDGQu0qy8P_JkjFl6qXnQPE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=_040o1PxgTHlRzV5d58iKg&_nc_ss=8&oh=00_AfyFvLmgIxzOK7WC0RaaOxG4GJMRxI4Y54XJrlGjVctRNw&oe=69AC2380",
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/572007125_851352314133211_4698338740959719281_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Oc2Qssq-_3gQ7kNvwE4N5-u&_nc_oc=AdlSdb49kpvdk0MpVv7pkxb8oop7SCA_rHS6_RcUnleHKm6Bp9oAZKt2aJNzOxh3eUY&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=6-8kUGxtDh6RtphP5bnVqg&_nc_ss=8&oh=00_Afwv-R-lQ9MbF2EJNxbaPKyAg_-8dEjrFPSTwuWfu9LuXQ&oe=69AC1551"
    ]
  },
  {
    id: 5,
    title: "Diễn Đàn Thiện Nguyện Hiệu Quả 2025",
    role: "Head of Technical Team",
    year: "2025",
    desc: "Lãnh đạo đội ngũ kỹ thuật vận hành diễn đàn. Cân chỉnh âm thanh hội nghị chuẩn xác và kiểm soát luồng hình ảnh/ánh sáng theo sát tính chất trang trọng của chương trình.",
    images: [
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/551036055_821078320493944_921252049464127551_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=7L3o7oqS7TIQ7kNvwFVaGmY&_nc_oc=AdlTGh8_kJ0sniua3Rk5fy-McntAZFQ5CbrH-YOfYtxrZISTo6tRsXgiSazHxfCZ1Mo&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=NbPU9lVDAeCpB8rQwo7H2w&_nc_ss=8&oh=00_AfwUtdu8BrMeZKEHEA7wFbknM7IxsjuE6Nitd-KTxCieYg&oe=69AC1CB0"
    ]
  },
  {
    id: 6,
    title: "CSL Closing Day",
    role: "Technical Leader",
    year: "2025",
    desc: "Giữ vai trò tổng chỉ huy kỹ thuật cho lễ vinh danh sinh viên. Kết hợp hài hòa giữa âm thanh và hiệu ứng ánh sáng/LED để đẩy cảm xúc của buổi lễ lên mức cao nhất.",
    images: [
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/514970724_756522136949563_1617253595567836720_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=S3giSSxBNy0Q7kNvwHHFCSw&_nc_oc=AdkpixQ2grzwL9Ch4EAZp30TR4si3Kt9D_Vlf9BctR90KS1e7v7WwnsgZYqjMoU93Ho&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=sN3niJUaD_aHmy8ZV7Ta5A&_nc_ss=8&oh=00_AfwB8Za2x7ApaNOarvJ5XlH0mtinS82u_XLUaGMdPWI9Sg&oe=69AC45A3",
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/514633050_756522590282851_6028318259096888498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Uu-XZVxLc9wQ7kNvwFJTDcd&_nc_oc=Adk8ZRgAcY1CE34-5fmueDB8Wjitq-LfgV8fsVl3vdOIlV2PERt2TKEe8SzgQrg93EA&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=gFCtDDP0PN1TXCB5WSPMvA&_nc_ss=8&oh=00_AfzGjBoFGfPHcOZg0W5x4LoxTxUFER3VipCDap8wiHr7aQ&oe=69AC27A4",
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/515574521_757313573537086_3935030404638196164_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Cllmg2KkQcQQ7kNvwFCWw-e&_nc_oc=Adn2YB2PXX53zB-x0BLDqsVxZXi5JorAFCd8FmD2z-3lRmnE6v0OWTQqyFM1cbtz8C8&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=Rxw7Gat5sNCjABLKLS-FWQ&_nc_ss=8&oh=00_AfykUc_qurG5k2lIOTuo-Hd_MDZWrsUr9o5fWKKKysd4_A&oe=69AC149D"
    ]
  },
  {
    id: 7,
    title: "Tre Truyền Thẻ",
    role: "AV Technician",
    year: "2025",
    desc: "Setup và vận hành mảng âm thanh, ánh sáng. Theo sát diễn biến sự kiện để backup và xử lý ngay lập tức các sự cố kỹ thuật, đảm bảo show diễn không bị gián đoạn.",
    images: [
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/486750475_682691874332590_6213527968058188900_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=t5cPwfNFR4IQ7kNvwHatPlW&_nc_oc=Adl69CypeIe1LyVDW6VUqVE4vwZvUsgUW1TMI69hX1LnMP9NdjhGR-tLmksmsiVdIWA&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=neKgPVVT5KYFQreusA71hQ&_nc_ss=8&oh=00_AfwexfNXxjqFLWSEw0UQXOH1Bz1SC4Guol-lbJbDPmlkdg&oe=69AC337B",
      "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/487482529_682692060999238_2744256679904998155_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_ohc=1h4z4cR-XUcQ7kNvwGLlaP-&_nc_oc=AdluWPskHHLow42VSkdbL6-iUttGVUl9rWgqESke7NFMPiywqgoKJbOO9LF-GlxBzII&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=dUlMHDv_5b6Z8kTRVEF4Bw&_nc_ss=8&oh=00_Afzb0uEmEky6BVj1H57J62pxpiaj4BR1luBLXU8XaAgkow&oe=69AC2647"
    ]
  },
  {
    id: 8,
    title: "Unitour: Empowering Sustainability",
    role: "Technical Crew",
    year: "2025",
    desc: "Đồng hành cùng chuỗi sự kiện Unitour. Triển khai nhanh chóng hệ thống kỹ thuật sân khấu, tối ưu hóa trải nghiệm nghe nhìn cho hàng trăm sinh viên tham dự.",
    images: [
      "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/485721305_679314528003658_8377043762273942131_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=yOOHf57jx2kQ7kNvwHhBJNh&_nc_oc=AdkFdxuK3J6_o3WBFouoH_2btHaQGNuxvbxN57vxNIhObsheuwjdBcySSKaxHu53HdQ&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=4GFLgpkVgzcGoK1FyvsWMg&_nc_ss=8&oh=00_AfyfcaRxyc3m_559ia53e9q4gf823_n0H-hyPriMEB22wg&oe=69AC3554",
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/486570336_679311554670622_2777096250012210948_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=G_s42mU9qv8Q7kNvwHvxjGN&_nc_oc=Adn4Zbh51vDanJfDWk_zYpLBmyrWq1tY0gWQFKIBGz4gB8wkmGgTbkhCiAXHic-MaiY&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=ClSOmKBkG-FnYpH5WJfTNg&_nc_ss=8&oh=00_Afxej57KpxmsAh2Pn7twXpNHsVMkNuKVeOktkhgW6v8gew&oe=69AC1D6B"
    ]
  },
  {
    id: 9,
    title: "Kick-off: Mirai Journey",
    role: "Stage Technician",
    year: "2024",
    desc: "Cài đặt và điều khiển hệ thống ánh sáng, LED. Phối hợp chặt chẽ với ban tổ chức để bắt đúng 'cue' (nhịp) của các tiết mục, tạo nên màn Kick-off bùng nổ.",
    images: [
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/484106463_672396572028787_4125379145617615473_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=lmO6varEWuIQ7kNvwFhxH_L&_nc_oc=AdlzIYF5sAwlTAyybbkjzM6le08aeXENDE2VOgLP5JuSNrZ9cRj7LPMr9a1Tl-beyow&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=SBs7xTGIIBAd0gvzbkht-A&_nc_ss=8&oh=00_AfycqnQla3oaLLMzyXr-QqQO2hCTi8YQc1fzRE3KdEBp_g&oe=69AC1E97"
    ]
  },
  {
    id: 10,
    title: "Talkshow: Break the rules",
    role: "Technical Staff & Guest Musician",
    year: "2024",
    desc: "Đảm nhận vai trò 'kép': Vừa điều khiển hệ thống AV phía sau cánh gà, vừa trực tiếp lên sân khấu trình diễn nhạc cụ (Organ), góp phần tạo nên không khí nghệ thuật cho Talkshow.",
    images: [
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/482987979_670525585549219_7491644808959514286_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=9u34Xf8b0HgQ7kNvwEmpbHu&_nc_oc=AdkrATh7kD2ZswoFDDTenlgtW6J-I0DYEFtZr_Y6EbvwEPrSGZ-Uubv6rw08aO8hKlI&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=Gid-nDCIE97SvzkgpDxfSw&_nc_ss=8&oh=00_AfyBmr2CbWBPt_liz8i4N5gSZR1QJBzJJ2TfxbYvHMN44Q&oe=69AC1A27",
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/482134890_670525342215910_2461847936851056978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=ZFAZnIk7B1YQ7kNvwFGDY-e&_nc_oc=AdnvzVQUcE0zscBY-CgPrWsn1R4ANJurHYhicVU_9Q46f8Tx4izp0DJu-GPWq_Sd4iI&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=Vy0Pd3UlC55gSz__Qeio1Q&_nc_ss=8&oh=00_AfxsymKexOhYmqwTczitCPUDKEVhdcYoUw4h0FQERzJcpA&oe=69AC16CE",
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/482354775_670525362215908_6319363973259985491_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=0dIE1HwkFmcQ7kNvwGJxRzb&_nc_oc=AdkoviB_5_pDvfNWDU5Yc1JWXKoJT8yPzbn9G7G8MaaR_fCMU7NJlGMYfmXKvtDXB0E&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AxN9KIN2JQZVu1YLBoJq2A&_nc_ss=8&oh=00_AfyXLKJ39V-ALrvCYq7xvh3ekGA5THkws98hVOUoOHhcfA&oe=69AC4A44",
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/482225296_670525332215911_7728481477430169995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=00AK_xdkBMwQ7kNvwEEfDPR&_nc_oc=AdkC9HWE3Mz23nq_M3cTuXEmaSqptfVi6EGhebyn02JTvnYNS8Oi1XKtX0-WSb18S4s&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=tMOSW6vQ9eDVm61-5F7gPw&_nc_ss=8&oh=00_AfzCbM5D1Ov9HfaYwtvEKcqXr4ykrFJwjcc_XPaHzU3duw&oe=69AC2CB2"
    ]
  },
  {
    id: 11,
    title: "BridgeFest 2023",
    role: "Zone Leader & Tech Support",
    year: "2024",
    desc: "Quản lý khu vực được phân công. giám sát an toàn kỹ thuật, đảm bảo không có lỗi xảy ra trong quá trình diễn ra sự kiện.",
    images: [
      "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/481450490_667696732498771_2679878329934317621_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Y_4ohT2VTY8Q7kNvwHIJZRT&_nc_oc=AdnXgva0zATRTbwMILtiwwqDIVLVrvmXZqq3-KnviaU-QdVySvS0nxwEs1ur-tNzL9E&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=AAtSADHSG4OogNEMnzgbNQ&_nc_ss=8&oh=00_AfzKlpPgj-uBjfDqgkVPQaXKTZSOtU5mYiDVlVeWr27FSA&oe=69AC46CA",
      "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/481904896_667696805832097_3256161637255374495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=0OFM9VLJTqAQ7kNvwFahaZY&_nc_oc=AdnRzUsZS63AbHAkCbKLBYFwHEBJE62VLKZE8n467d1V_zxYjM_7GZMElZ7jACf1Bis&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=J6zrKmscUXwEpzletYfW7w&_nc_ss=8&oh=00_AfxLVsVmyUG8vJz57tvsrMO-jW9ToTYQzzOWU9dJtU_p4g&oe=69AC5B59"
    ]
  },
  {
    id: 12,
    title: "THE CIRCLE: Chuyến đi trao yêu thương",
    role: "Logistics & Operations",
    year: "2024",
    desc: "Hỗ trợ công tác hậu cần và vận hành cho dự án thiện nguyện. Trực tiếp tham gia đóng gói, vận chuyển và trao tặng các phần quà ý nghĩa đến tận tay bà con vùng cao Ba Tơ, Quảng Ngãi.",
    images: [
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/482207743_667325745869203_1275945875462663643_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=rXUJ4ZQcwIUQ7kNvwGL255R&_nc_oc=AdkDIzIydd5ic-Hus-CK8Hv_CtyortIFzAmZNTBVlGp8qo752uOUASirvKWpqTqKSCc&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=272iZoK3JQCSwQy7DKIvmQ&_nc_ss=8&oh=00_AfzZE_PGFvMb3mYVYDA6vSJAIY2UPIrl0UmA9nfQXEFBNg&oe=69AC6058",
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/482988407_667324665869311_4992371572322652645_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=00mGBFpbkRQQ7kNvwEvLTtg&_nc_oc=Adkw4KbYPLhShUGZfcJCHFthoyoArJ-8dtZI_kPVnVyH_o7juSWKIy5E0ouCTNEq_Ck&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=9Oh4pLFcTgzbm56RtYZTXQ&_nc_ss=8&oh=00_AfxhsuLDPwCEbM1WQkG5LeCX14-FTtwJQbIim10GhP7CEg&oe=69AC73A7",
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/481964758_666725132595931_6615660133629220730_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=6Cb0wc80NdoQ7kNvwHHopU6&_nc_oc=AdkrQRcl8UVryNGrwRZBu0QJ0RLkpjkuhqZm1h4s4ppDl9VHB2VFcLRAGIejQbMlX0E&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=hcXDupXwBAuZ5-Wn5c-Rbg&_nc_ss=8&oh=00_AfzoaWGQcqnurva0XghXdPfTFtd9PFm2u8VodQ_PWBJOOw&oe=69AC56D1"
    ]
  }
];

// Bổ sung vào file src/data.jsx
export const techStack = [
  { category: "Ngôn ngữ", items: ["Java", "C#", "JavaScript", "TypeScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend & DB", items: ["Node.js", "Spring Boot", "SQL Server", "MongoDB"] },
  { category: "Công cụ", items: ["Git", "Docker", "Figma", "Postman"] }
];

export const timeline = [
  {
    year: "2026",
    title: "Chuẩn bị Tốt nghiệp & Tìm kiếm cơ hội",
    desc: "Hoàn thiện đồ án doanh nghiệp Service-Learning và sẵn sàng cho các vị trí Intern Web Developer."
  },
  {
    year: "2024 - 2025",
    title: "Thực chiến Đồ án & Chuyên ngành",
    desc: "Xây dựng các hệ thống quản lý (Desktop, Web, Mobile) với đa dạng công nghệ từ Java, C# đến React Native."
  },
  {
    year: "2022",
    title: "Bắt đầu hành trình tại UEF",
    desc: "Nhập học chuyên ngành Công nghệ Phần mềm. Làm quen với tư duy logic, cấu trúc dữ liệu và giải thuật."
  }
];