import { Globe, Smartphone, Book, Award, Code2, Database, Terminal } from 'lucide-react';

export const profile = {
  name: "Nguyễn Hoàng Phúc",
  role: "Software Developer @ Digiso",
  bio: "Lập trình viên chính thức tại Công ty TNHH Giải pháp số Digiso. Tốt nghiệp chuyên ngành Công nghệ Phần mềm tại UEF với tư duy giải quyết vấn đề dựa trên thực tiễn, tập trung xây dựng các sản phẩm số hữu ích, hiện đại và có thể triển khai thực tế.",
  university: "Đại học Kinh tế - Tài chính TP.HCM (UEF)",
  major: "Công nghệ Phần mềm",
  birthYear: "2004",
  currentRole: {
    title: "Lập trình viên",
    company: "Công ty TNHH Giải pháp số Digiso",
    type: "Nhân viên chính thức",
    startDate: "01/08/2026"
  },
  internship: {
    title: "Thực tập sinh Lập trình viên",
    company: "Công ty TNHH Giải pháp số Digiso",
    duration: "20/04/2026 - 20/07/2026",
    months: "3 tháng",
    note: "Trong thời gian thực tập, đã phát triển dự án FounderAI.biz cùng team."
  },
  languages: [
    { name: "Tiếng Anh", level: "Phổ thông" },
    { name: "Tiếng Nhật", level: "Cơ bản" }
  ],
  social: {
    github: "https://github.com/hoangphuc1capri",
    linkedin: "www.linkedin.com/in/sennahoangphuc0501",
    email: "hoangphuc.capri.0501@gmail.com",
    portfolio: "https://phucphuc.id.vn"
  }
};

export const projects = {
  personal: [
    {
      title: "CSLUEF.com",
      subtitle: "Community Management Platform",
      tech: ["React", ".NET MVC 5", "SQL Server", "Tailwind"],
      icon: <Book size={24} />,
      desc: "Nền tảng số hóa giúp quản lý hiệu quả hoạt động câu lạc bộ, dự án và sinh viên tại Trung tâm Service-Learning UEF.",
      detail: "Dự án nhóm cùng team tại UEF, tập trung vào việc số hóa vận hành cộng đồng, hỗ trợ quản lý thành viên, hoạt động, báo cáo và tăng khả năng kết nối giữa sinh viên với các dự án xã hội.",
      link: "https://csluef.com",
      images: []
    },
    {
      title: "Astrodemy.vn",
      subtitle: "Well-being Consulting & Online Test",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Responsive UI"],
      icon: <Globe size={24} />,
      desc: "Nền tảng tư vấn Well-being và bài Test Well-being trực tuyến cho cá nhân và doanh nghiệp (gói B2B).",
      detail: "Dự án cá nhân hợp tác cùng Founder Astrodemy (info@Astrodemy.vn). Website gồm trang giới thiệu dịch vụ tư vấn (Coaching, Consulting, Training) và trang bài Test Well-being trực tuyến — giao diện hiện đại, dễ chia sẻ, tối ưu cho cả người dùng cá nhân và khách hàng doanh nghiệp.",
      link: "https://astrodemy.vn",
      images: []
    },
    {
      title: "FounderAI.biz",
      subtitle: "Marketing Automation via Zalo & Email",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      icon: <Smartphone size={24} />,
      desc: "Nền tảng tự động hóa marketing đa kênh qua Zalo (OA/ZNS) và Email cho doanh nghiệp và nhà sáng lập.",
      detail: "Dự án nhóm cùng team tại Digiso trong thời gian thực tập. Tập trung xây dựng landing page và dashboard cho hệ thống gửi tin nhắn Zalo/Email tự động theo kịch bản marketing. UI chuyển đổi cao, tích hợp tracking pixel và form chuyển đổi sẵn sàng A/B test.",
      link: "https://founderai.biz",
      images: []
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
      "/events/dongkenhxanh/1.jpg",
      "/events/dongkenhxanh/2.jpg",
    ]
  },
  {
    id: 2,
    title: "AlterCop 30",
    role: "Stage & Technical Manager",
    year: "2025",
    desc: "Chịu trách nhiệm chạy đường dây kịch bản kỹ thuật. Điều phối nhịp nhàng giữa màn hình LED, hệ thống micro và ánh sáng, đảm bảo sự kiện diễn ra liền mạch và chuyên nghiệp.",
    images: [
      "/events/altercop/1.jpg",
      "/events/altercop/2.jpg",
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
      "/events/cslorientation/1.jpg",
      "/events/cslorientation/2.jpg",
      "/events/cslorientation/3.jpg",
    ]
  },
  {
    id: 5,
    title: "Diễn Đàn Thiện Nguyện Hiệu Quả 2025",
    role: "Head of Technical Team",
    year: "2025",
    desc: "Lãnh đạo đội ngũ kỹ thuật vận hành diễn đàn. Cân chỉnh âm thanh hội nghị chuẩn xác và kiểm soát luồng hình ảnh/ánh sáng theo sát tính chất trang trọng của chương trình.",
    images: [
      "/events/easummit/1.jpg"
    ]
  },
  {
    id: 6,
    title: "CSL Closing Day",
    role: "Technical Leader",
    year: "2025",
    desc: "Giữ vai trò tổng chỉ huy kỹ thuật cho lễ vinh danh sinh viên. Kết hợp hài hòa giữa âm thanh và hiệu ứng ánh sáng/LED để đẩy cảm xúc của buổi lễ lên mức cao nhất.",
    images: [
      "/events/erax/1.jpg",
      "/events/erax/2.jpg",
      "/events/erax/3.jpg",
      "/events/erax/4.jpg",

    ]
  },
  {
    id: 7,
    title: "Tre Truyền Trẻ",
    role: "AV Technician",
    year: "2025",
    desc: "Setup và vận hành mảng âm thanh, ánh sáng. Theo sát diễn biến sự kiện để backup và xử lý ngay lập tức các sự cố kỹ thuật, đảm bảo show diễn không bị gián đoạn.",
    images: [
      "/events/tretruyentre/1.jpg"
    ]
  },
  {
    id: 8,
    title: "Unitour: Empowering Sustainability",
    role: "Technical Crew",
    year: "2025",
    desc: "Đồng hành cùng chuỗi sự kiện Unitour. Triển khai nhanh chóng hệ thống kỹ thuật sân khấu, tối ưu hóa trải nghiệm nghe nhìn cho hàng trăm sinh viên tham dự.",
    images: [
      "/events/mindset/1.jpg",
      "/events/mindset/2.jpg",
      "/events/mindset/3.jpg",
    ]
  },
  {
    id: 9,
    title: "Kick-off: Mirai Journey",
    role: "Stage Technician",
    year: "2024",
    desc: "Cài đặt và điều khiển hệ thống ánh sáng, LED. Phối hợp chặt chẽ với ban tổ chức để bắt đúng 'cue' (nhịp) của các tiết mục, tạo nên màn Kick-off bùng nổ.",
    images: [
      "/events/mirai/1.jpg",
    ] 
  },
  {
    id: 10,
    title: "Talkshow: Break the rules",
    role: "Technical Staff & Guest Musician",
    year: "2024",
    desc: "Đảm nhận vai trò 'kép': Vừa điều khiển hệ thống AV phía sau cánh gà, vừa trực tiếp lên sân khấu trình diễn nhạc cụ (Organ), góp phần tạo nên không khí nghệ thuật cho Talkshow.",
    images: [
      "/events/breaktherules/1.jpg",
      "/events/breaktherules/2.jpg",
    ]
  },
  {
    id: 11,
    title: "BridgeFest 2023",
    role: "Zone Leader & Tech Support",
    year: "2024",
    desc: "Quản lý khu vực được phân công. giám sát an toàn kỹ thuật, đảm bảo không có lỗi xảy ra trong quá trình diễn ra sự kiện.",
    images: [
      "/events/bridgefest/1.jpg",
      "/events/bridgefest/2.jpg"
    ]
  },
  {
    id: 12,
    title: "THE CIRCLE: Chuyến đi trao yêu thương",
    role: "Logistics & Operations",
    year: "2024",
    desc: "Hỗ trợ công tác hậu cần và vận hành cho dự án thiện nguyện. Trực tiếp tham gia đóng gói, vận chuyển và trao tặng các phần quà ý nghĩa đến tận tay bà con vùng cao Ba Tơ, Quảng Ngãi.",
    images: [
      "/events/quangngai/1.jpg",
      "/events/quangngai/2.jpg"
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
    year: "2026 - Hiện tại",
    title: "Lập trình viên chính thức @ Digiso",
    desc: "Gia nhập Công ty TNHH Giải pháp số Digiso với vị trí Lập trình viên chính thức từ ngày 01/08/2026, sau 3 tháng thực tập từ 20/04/2026 đến 20/07/2026. Tham gia phát triển các giải pháp số cho khách hàng doanh nghiệp."
  },
  {
    year: "04 - 07/2026",
    title: "Thực tập Lập trình viên @ Digiso",
    desc: "Hoàn thành 3 tháng thực tập tại Công ty TNHH Giải pháp số Digiso (20/04/2026 - 20/07/2026). Làm quen môi trường làm việc chuyên nghiệp, tham gia xây dựng và triển khai các sản phẩm số thực tế."
  },
  {
    year: "2024 - 2026",
    title: "Thực chiến Đồ án & Chuyên ngành",
    desc: "Xây dựng các hệ thống quản lý (Desktop, Web, Mobile) với đa dạng công nghệ từ Java, C# đến React Native."
  },
  {
    year: "2022",
    title: "Bắt đầu hành trình tại UEF",
    desc: "Nhập học chuyên ngành Công nghệ Phần mềm. Làm quen với tư duy logic, cấu trúc dữ liệu và giải thuật."
  }
];