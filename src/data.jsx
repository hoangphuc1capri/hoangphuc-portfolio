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
    linkedin: "www.linkedin.com/in/sennahoangphuc0501",
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
    color: "from-blue-600 to-cyan-500",
    link: "https://csluef.com/",
    images:[
      "/projects/csl-1.png", // Đổi tên file cho khớp với ảnh thật của bạn
    ]
  },
  academic: [
    {
      title: "Quản Lý Nhà Hàng",
      subject: "Ứng dụng Desktop",
      tech: ["C#", ".NET", "WinForms"],
      icon: <Utensils size={24} />,
      desc: "Quản lý order và doanh thu thời gian thực.",
      // github: "https://github.com/phuc-nguyen/restaurant-mgmt" // THÊM LINK GITHUB
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