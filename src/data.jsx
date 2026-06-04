import { Globe, Smartphone, Book, Award, Code2, Database, Terminal } from 'lucide-react';

export const profile = {
  name: "Nguyễn Hoàng Phúc",
  role: "Web Developer Student @ UEF",
  bio: "Sinh viên năm cuối chuyên ngành Công nghệ Phần mềm tại UEF. Với tư duy giải quyết vấn đề dựa trên thực tiễn, mình tập trung xây dựng các sản phẩm số hữu ích, hiện đại và có thể triển khai thực tế.",
  university: "Đại học Kinh tế - Tài chính TP.HCM (UEF)",
  major: "Công nghệ Phần mềm",
  birthYear: "2004",
  social: {
    github: "https://github.com/hoangphuc1capri",
    linkedin: "www.linkedin.com/in/sennahoangphuc0501",
    email: "hoangphuc.capri.0501@gmail.com"
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
      detail: "Dự án tập trung vào việc số hóa vận hành cộng đồng, hỗ trợ quản lý thành viên, hoạt động, báo cáo và tăng khả năng kết nối giữa sinh viên với các dự án xã hội.",
      link: "https://csluef.com",
      images: []
    },
    {
      title: "Astrodemy.vn",
      subtitle: "Well-being & Learning Platform",
      tech: ["React", "Vite", "Tailwind CSS", "Responsive UI"],
      icon: <Globe size={24} />,
      desc: "Website tập trung vào tư vấn, đào tạo và xây dựng văn hóa well-being với trải nghiệm nội dung hiện đại, rõ ràng.",
      detail: "Dự án cá nhân được xây dựng với định hướng tạo ra một trải nghiệm số hiện đại, tối ưu hiển thị nội dung, điều hướng mượt và dễ mở rộng cho nhiều chương trình đào tạo khác nhau.",
      link: "https://astrodemy.vn",
      images: []
    },
    {
      title: "FounderAI.biz",
      subtitle: "AI Marketing Platform",
      tech: ["React", "Vite", "Tailwind CSS"],
      icon: <Smartphone size={24} />,
      desc: "Nền tảng tự động hóa marketing đa kênh, tập trung vào chuyển đổi và trải nghiệm sản phẩm.",
      detail: "Dự án cá nhân định hướng thương mại hóa, nhấn mạnh trải nghiệm hiện đại, bố cục thuyết phục và khả năng triển khai nhanh cho các chiến dịch marketing số.",
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