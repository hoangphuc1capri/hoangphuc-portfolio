import { Globe, Smartphone, Book, Award, Code2, Database, Terminal } from 'lucide-react';

export const profile = {
  name: "Nguyễn Hoàng Phúc",
  role: "Software Developer",
  bio: "Tốt nghiệp Công nghệ Phần mềm — UEF. Đam mê biến ý tưởng thành sản phẩm thật, từ web fullstack đến landing page marketing chuyển đổi cao. Hoàn thành 3 tháng thực tập tại Digiso, phát triển dự án FounderAI.biz. Bên cạnh code, vận hành kỹ thuật sự kiện (AV, LED, livestream) — rèn tư duy xử lý sự cố real-time dưới áp lực.",
  university: "Đại học Kinh tế - Tài chính TP.HCM (UEF)",
  major: "Công nghệ Phần mềm",
  birthYear: "2004",
  internship: {
    title: "Thực tập sinh Lập trình viên",
    company: "Công ty TNHH Giải pháp số Digiso",
    duration: "20/04/2026 - 20/07/2026",
    months: "3 tháng",
    note: "Trong thời gian thực tập, đã phát triển dự án FounderAI.biz cùng team."
  },
  uefExperience: {
    title: "Trưởng ban Kỹ thuật & Dev CSLUEF.com",
    company: "Trung tâm Kết nối cộng đồng — UEF",
    duration: "09/2022 — 04/2026",
    years: "Gắn bó 4 năm",
    roles: [
      {
        name: "Kỹ thuật sự kiện (Trưởng ban)",
        tasks: [
          "Vận hành AV, ánh sáng, LED cho 20+ sự kiện lớn (Vietnam Innovation Summit, EA Summit, Unitour, Talkshow...).",
          "Lên phương án kỹ thuật, điều phối team và xử lý sự cố real-time dưới áp lực cao.",
          "Setup micro, mixer, livestream cho sự kiện từ 50 — 1000+ người."
        ]
      },
      {
        name: "Phát triển web CSLUEF.com",
        tasks: [
          "Dự án cùng team UEF: React + .NET MVC 5 + SQL Server.",
          "Số hóa vận hành CLB & dự án cho 500+ sinh viên.",
          "Tăng 60% hiệu suất so với quy trình Excel thủ công."
        ]
      }
    ]
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
      detail: "Dự án cùng team UEF: tham gia thiết kế kiến trúc, code frontend & backend, triển khai & vận hành production. Backend REST API bằng .NET MVC 5 + SQL Server, quản lý 500+ bản ghi sinh viên/CLB. Frontend React responsive, form phức tạp cho đăng ký & báo cáo. Thay thế quy trình Excel thủ công → tăng 60% hiệu suất vận hành của Trung tâm.",
      link: "https://csluef.com",
      images: []
    },
    {
      title: "Astrodemy.vn",
      subtitle: "Tư vấn & đo lường Well-being (cá nhân & B2B)",
      tech: ["React", "Vite", "Tailwind CSS", "Figma"],
      icon: <Globe size={24} />,
      desc: "Nền tảng tư vấn Well-being và bài Test Well-being trực tuyến cho cá nhân và doanh nghiệp (gói B2B).",
      detail: "Solo Developer: nhận brief từ Founder → UI/UX trên Figma → sản phẩm hoàn chỉnh. Gồm trang tư vấn (Coaching, Consulting, Training) và trang bài Test Well-being trực tuyến — giao diện hiện đại, dễ chia sẻ. React + Vite + Tailwind, animation mượt, Lighthouse 90+, SEO chuẩn.",
      link: "https://astrodemy.vn",
      images: []
    },
    {
      title: "FounderAI.biz",
      subtitle: "Đồng sáng lập AI cho doanh nghiệp một người — Marketing qua Zalo & Email",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      icon: <Smartphone size={24} />,
      desc: "Nền tảng AI tự động hóa marketing đa kênh qua Zalo và Email cho doanh nghiệp và nhà sáng lập.",
      detail: "Nền tảng AI do Digiso phát triển. Solo Frontend: dựng landing page & dashboard, tích hợp Zalo + Email, tracking pixel, form chuyển đổi A/B test. UI chuyển đổi cao, tối ưu Lighthouse 90+. Từ brief → production trong vài ngày. Dự án thực tập tại Digiso.",
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