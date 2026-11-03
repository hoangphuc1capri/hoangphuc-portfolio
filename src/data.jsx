export const profile = {
  name: "Nguyễn Hoàng Phúc",
  birthYear: "2004",
  university: {
    vi: "Đại học Kinh tế - Tài chính TP.HCM (UEF)",
    en: "Ho Chi Minh City University of Economics and Finance (UEF)"
  },
  major: {
    vi: "Công nghệ Phần mềm",
    en: "Software Engineering"
  },
  role: {
    vi: "Software Developer & Event Technical Director",
    en: "Software Developer & Event Technical Director"
  },
  bio: {
    vi: "Tốt nghiệp Công nghệ Phần mềm — UEF. Đam mê biến ý tưởng thành sản phẩm số thật, từ hệ thống web fullstack đến các ứng dụng AI tương tác cao. Hiện là Lập trình viên chính thức tại Digiso sau khi hoàn thành xuất sắc kỳ thực tập. Song song đó là 4 năm giữ cương vị Trưởng ban Kỹ thuật sự kiện — rèn tư duy xử lý khủng hoảng Zero-Downtime dưới áp lực thời gian thực.",
    en: "Software Engineering Graduate from UEF. Passionate about transforming ideas into production-ready digital products, from full-stack web platforms to intelligent conversational AI systems. Currently an Official Software Developer at Digiso following a successful internship. Simultaneously served 4 years as Head of Event Technical Team — sharpening a Zero-Downtime crisis resolution mindset under live realtime pressure."
  },
  officialWork: {
    title: {
      vi: "Lập trình viên chính thức (Official Software Developer)",
      en: "Official Software Developer"
    },
    company: "Công ty TNHH Giải pháp số Digiso",
    duration: {
      vi: "01/08/2026 — Hiện nay",
      en: "08/2026 — Present"
    },
    note: {
      vi: "Sau kỳ thực tập xuất sắc, chính thức gia nhập Digiso với tư cách kỹ sư phần mềm. Đảm nhiệm xây dựng và phát triển các sản phẩm công nghệ trọng điểm của công ty: MADA AI Assistant (trợ lý AI thông minh), FounderAI.biz và các giải pháp số cho đối tác doanh nghiệp.",
      en: "Transitioned directly to a full-time Software Developer at Digiso following exceptional internship performance. Leading frontend & integration development for core tech products: MADA AI Assistant, FounderAI.biz, and digital enterprise solutions."
    }
  },
  internship: {
    title: {
      vi: "Thực tập sinh Lập trình viên",
      en: "Software Developer Intern"
    },
    company: "Công ty TNHH Giải pháp số Digiso",
    duration: "20/04/2026 — 20/07/2026",
    months: "3 tháng / 3 months",
    note: {
      vi: "Phát triển dự án FounderAI.biz cùng team: Frontend React, tích hợp Zalo OA, Email API, tracking pixel và tối ưu hiệu năng Lighthouse 95+.",
      en: "Developed FounderAI.biz with the engineering team: React Frontend, Zalo OA + Email API integration, tracking pixels, and Lighthouse 95+ performance optimization."
    }
  },
  uefExperience: {
    title: {
      vi: "Trưởng ban Kỹ thuật & Dev CSLUEF.com",
      en: "Head of Technical Team & CSLUEF.com Developer"
    },
    company: "Trung tâm Kết nối cộng đồng — UEF",
    duration: "09/2022 — 04/2026",
    years: {
      vi: "Gắn bó 4 năm",
      en: "4 Years Dedication"
    },
    roles: [
      {
        name: {
          vi: "Kỹ thuật sự kiện (Trưởng ban)",
          en: "Event Production & Technical Director"
        },
        tasks: {
          vi: "Chỉ huy vận hành AV, ánh sáng, visual LED cho 20+ sự kiện quy mô từ 50 đến 1000+ người (Vietnam Innovation Summit 2025, EA Summit, Dòng Kênh Xanh, AlterCop...). Lên phương án kỹ thuật và xử lý sự cố real-time dưới áp lực cao.",
          en: "Led AV, stage lighting, and LED mapping for 20+ major events (50 to 1000+ attendees) including Vietnam Innovation Summit 2025, EA Summit, and Dong Kenh Xanh. Mastered real-time crisis resolution."
        }
      },
      {
        name: {
          vi: "Phát triển web CSLUEF.com",
          en: "CSLUEF.com Fullstack Development"
        },
        tasks: {
          vi: "Xây dựng hệ thống quản lý dữ liệu CLB & 500+ sinh viên bằng React + .NET MVC 5 + SQL Server. Tăng 60% hiệu suất vận hành so với quy trình Excel thủ công.",
          en: "Built the community management platform for 500+ students using React + .NET MVC 5 + SQL Server, improving administrative efficiency by 60%."
        }
      }
    ]
  },
  languages: [
    { name: { vi: "Tiếng Anh", en: "English" }, level: { vi: "Giao tiếp phổ thông", en: "Professional Working" } },
    { name: { vi: "Tiếng Nhật", en: "Japanese" }, level: { vi: "Cơ bản", en: "Basic" } }
  ],
  social: {
    phone: "0844 790 999",
    phoneDisplay: "0844.790.999",
    email: "hoangphuc.capri.0501@gmail.com",
    github: "https://github.com/hoangphuc1capri",
    linkedin: "https://linkedin.com/in/sennahoangphuc0501",
    portfolio: "https://phucphuc.id.vn",
    zalo: "https://zalo.me/0844790999",
    whatsapp: "https://wa.me/84844790999",
    telegram: "https://t.me/sennahoangphuc"
  }
};

export const projects = {
  personal: [
    {
      id: "mada-ai",
      title: "MADA AI Assistant",
      subtitle: {
        vi: "Trợ lý AI thông minh cho doanh nghiệp đa nền tảng",
        en: "Intelligent Enterprise AI Conversational Assistant"
      },
      image: "/projects/mada.png",
      type: "web-showcase",
      highlights: [
        { vi: "Streaming Chat Real-time", en: "Real-time Streaming Chat" },
        { vi: "Digiso Enterprise Engine", en: "Digiso Enterprise Engine" },
        { vi: "Bảo mật & Tối ưu mili-giây", en: "Enterprise Security & Sub-100ms" }
      ],
      tech: ["React", "Vite", "Tailwind CSS", "AI Stream", "REST API"],
      desc: {
        vi: "Nền tảng trợ lý trí tuệ nhân tạo thế hệ mới của Digiso hỗ trợ đối thoại thông minh, xử lý tri thức chuyên sâu và tự động hóa quy trình nghiệp vụ.",
        en: "Digiso's next-generation conversational AI assistant supporting contextual intelligence, enterprise knowledge retrieval, and business workflow automation."
      },
      detail: {
        vi: "Dự án chính thức tại Digiso: Xây dựng giao diện chat trực quan với cơ chế streaming tin nhắn real-time, giao diện dark/light tương thích cao, quản lý lịch sử hội thoại, tích hợp bảo mật và tối ưu tốc độ phản hồi tính bằng mili-giây.",
        en: "Official engineering project at Digiso: Designed and built responsive streaming chat interfaces, multi-turn conversation memory, low-latency UI updates, and enterprise security compliance."
      },
      link: "https://mada.digiso.vn/chat",
      featured: true,
      badge: { vi: "Digiso Official 2026", en: "Digiso Official 2026" }
    },
    {
      id: "tiachop",
      title: "Tia Chớp Consult",
      subtitle: {
        vi: "Dịch thuật công chứng, Visa & Pháp lý trọn gói",
        en: "Notarized Translation, Visa & Legal Advisory Platform"
      },
      image: "/projects/tiachop.png",
      type: "web-showcase",
      highlights: [
        { vi: "Dịch thuật công chứng", en: "Notarized Translation" },
        { vi: "Visa du lịch & định cư", en: "Global Visa Services" },
        { vi: "Chuẩn SEO & CRO 95+", en: "SEO & CRO 95+ Score" }
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "SEO Pro"],
      desc: {
        vi: "Website dịch vụ pháp lý, làm visa và dịch thuật công chứng chuyên nghiệp với giao diện hiện đại, tối ưu tỉ lệ chuyển đổi khách hàng.",
        en: "Comprehensive platform for notarized translation, global visa facilitation, and corporate legal consultation with high conversion rate UX."
      },
      detail: {
        vi: "Fullstack / Solo Web Developer: Xây dựng nền tảng từ khâu lên ý tưởng kiến trúc, thiết kế giao diện chuyển đổi cao (CRO), cấu hình bảng giá dịch vụ trực quan, form nhận hồ sơ tự động hóa, chuẩn SEO Google và đạt điểm số Lighthouse 95+.",
        en: "Fullstack Developer: Conceptualized architecture, built high-converting UI (CRO-driven), automated document submission intake funnels, and optimized for 95+ Google Lighthouse SEO."
      },
      link: "https://www.tiachopconsult.com/",
      featured: true,
      badge: { vi: "Production 2026", en: "Production 2026" }
    },
    {
      id: "founderai",
      title: "FounderAI.biz",
      subtitle: {
        vi: "Đồng sáng lập AI — Tự động hóa Marketing qua Zalo & Email",
        en: "AI Co-Founder Platform — Marketing Automation via Zalo & Email"
      },
      image: "/projects/founderai.png",
      type: "web-showcase",
      highlights: [
        { vi: "Chatbot Zalo OA", en: "Zalo Official Bot" },
        { vi: "Tự động hóa Email", en: "Email Automation Funnel" },
        { vi: "A/B Testing CRO", en: "High-Conversion A/B" }
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "A/B Testing"],
      desc: {
        vi: "Nền tảng AI tự động hóa marketing đa kênh qua Zalo và Email cho doanh nghiệp một người và các nhà sáng lập.",
        en: "AI automation engine orchestrating multi-channel marketing through Zalo Official Account and smart Email funnels for founders."
      },
      detail: {
        vi: "Nền tảng AI do Digiso phát triển. Solo Frontend: dựng landing page & dashboard, tích hợp Zalo + Email, tracking pixel, form chuyển đổi A/B test. UI chuyển đổi cao, tối ưu Lighthouse 95+. Từ brief → production trong vài ngày.",
        en: "Solo Frontend Developer: Engineered high-converting landing pages, marketing analytics dashboards, Zalo OA + Email webhooks, and A/B test funnels with 95+ Lighthouse."
      },
      link: "https://founderai.biz",
      featured: true,
      badge: { vi: "Digiso Product", en: "Digiso Product" }
    },
    {
      id: "csluef",
      title: "CSLUEF.com",
      subtitle: {
        vi: "Hệ thống số hóa quản lý CLB & Sinh viên UEF",
        en: "Community Management Platform for 500+ Students"
      },
      image: "/projects/csluef.png",
      type: "web-showcase",
      highlights: [
        { vi: "500+ Sinh viên hoạt động", en: "500+ Active Students" },
        { vi: "React + .NET MVC 5 + SQL", en: "React + .NET MVC 5 + SQL" },
        { vi: "Tăng 60% hiệu suất vận hành", en: "+60% Admin Efficiency" }
      ],
      tech: ["React", ".NET MVC 5", "SQL Server", "Tailwind CSS"],
      desc: {
        vi: "Nền tảng số hóa giúp quản lý hiệu quả hoạt động câu lạc bộ, dự án và hơn 500 sinh viên tại Trung tâm Service-Learning UEF.",
        en: "Centralized university digital platform managing clubs, community projects, and 500+ service-learning students."
      },
      detail: {
        vi: "Dự án cùng team UEF: tham gia thiết kế kiến trúc, code frontend & backend, triển khai & vận hành production. Backend REST API bằng .NET MVC 5 + SQL Server. Thay thế quy trình Excel thủ công → tăng 60% hiệu suất vận hành của Trung tâm.",
        en: "Collaborative project with UEF engineering team: Architected REST APIs with .NET MVC 5 & SQL Server, built responsive React interfaces, and boosted operational efficiency by 60% over Excel."
      },
      link: "https://csluef.com",
      featured: true,
      badge: { vi: "UEF Platform", en: "UEF Platform" }
    },
    {
      id: "astrodemy",
      title: "Astrodemy.vn",
      subtitle: {
        vi: "Tư vấn & đo lường Well-being (Cá nhân & Doanh nghiệp B2B)",
        en: "Well-being Consultation & Psychological Assessment Platform"
      },
      image: "/projects/astrodemy.png",
      type: "web-showcase",
      highlights: [
        { vi: "Trắc nghiệm Well-being Online", en: "Online Well-being Test" },
        { vi: "Gói B2B cho Doanh nghiệp", en: "B2B Corporate Well-being" },
        { vi: "Solo Dev: Figma to Code", en: "Solo Dev: Figma to Code" }
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Figma UI/UX"],
      desc: {
        vi: "Nền tảng tư vấn Well-being và bài Test Well-being trực tuyến cho cá nhân và doanh nghiệp (gói B2B).",
        en: "Well-being advisory and automated psychological assessment platform tailored for individuals and B2B corporate teams."
      },
      detail: {
        vi: "Solo Developer: nhận brief từ Founder → UI/UX trên Figma → sản phẩm hoàn chỉnh. Gồm trang tư vấn (Coaching, Consulting, Training) và trang bài Test Well-being trực tuyến — giao diện hiện đại, dễ chia sẻ, Lighthouse 90+, SEO chuẩn.",
        en: "Solo Developer: From Figma UX/UI design to full production deployment. Features online well-being tests, automated scoring algorithms, and corporate training bookings."
      },
      link: "https://astrodemy.vn",
      featured: false,
      badge: { vi: "Client Project", en: "Client Project" }
    }
  ]
};

export const events = [
  {
    id: 1,
    title: "Dòng Kênh Xanh",
    role: { vi: "AV & Visual Operator", en: "AV & Visual Operator" },
    year: "2026",
    desc: {
      vi: "Trực tiếp setup hệ thống âm thanh, ánh sáng và điều phối tín hiệu Visual LED. Đảm bảo chất lượng trình diễn và xử lý mượt mà các tình huống kỹ thuật 'real-time' trên sân khấu.",
      en: "Operated sound, lighting, and real-time LED visual feeds. Ensured flawless stage execution under live performance conditions."
    },
    images: [
      "/events/dongkenhxanh/1.jpg",
      "/events/dongkenhxanh/2.jpg",
    ]
  },
  {
    id: 2,
    title: "AlterCop 30",
    role: { vi: "Stage & Technical Manager", en: "Stage & Technical Manager" },
    year: "2025",
    desc: {
      vi: "Chịu trách nhiệm chạy đường dây kịch bản kỹ thuật. Điều phối nhịp nhàng giữa màn hình LED, hệ thống micro và ánh sáng, đảm bảo sự kiện diễn ra liền mạch và chuyên nghiệp.",
      en: "Managed full technical stage cues, synchronizing LED screens, multi-mic setups, and lighting to deliver a seamless production."
    },
    images: [
      "/events/altercop/1.jpg",
      "/events/altercop/2.jpg",
    ]
  },
  {
    id: 3,
    title: "Vietnam Innovation Summit 2025",
    role: { vi: "LED System Technician", en: "LED System Technician" },
    year: "2025",
    desc: {
      vi: "Vận hành hệ thống trình chiếu LED tại sân khấu Collab. Đảm bảo tín hiệu hình ảnh sắc nét, đồng bộ nội dung với các diễn giả tại hội nghị đổi mới sáng tạo quy mô lớn (1000+ người).",
      en: "Operated large-scale LED wall projection systems at Collab Stage for 1,000+ attendees at Vietnam's premier innovation summit."
    },
    images: [
      "/events/6.jpg",
    ]
  },
  {
    id: 4,
    title: "CSL Orientation Day",
    role: { vi: "Technical Director", en: "Technical Director" },
    year: "2025",
    desc: {
      vi: "Đảm nhận vai trò 'nhạc trưởng' kỹ thuật. Lên phương án và trực tiếp tổng điều phối toàn bộ hệ thống âm thanh, ánh sáng, hình ảnh cho lễ chào tân sinh viên.",
      en: "Head technical director orchestrating full acoustic, illumination, and video systems for university freshman orientation."
    },
    images: [
      "/events/cslorientation/1.jpg",
      "/events/cslorientation/2.jpg",
      "/events/cslorientation/3.jpg",
    ]
  },
  {
    id: 5,
    title: "Diễn Đàn Thiện Nguyện Hiệu Quả (EA Summit 2025)",
    role: { vi: "Head of Technical Team", en: "Head of Technical Team" },
    year: "2025",
    desc: {
      vi: "Lãnh đạo đội ngũ kỹ thuật vận hành diễn đàn. Cân chỉnh âm thanh hội nghị chuẩn xác và kiểm soát luồng hình ảnh/ánh sáng theo sát tính chất trang trọng của chương trình.",
      en: "Led technical crew for the national Effective Altruism forum, mastering high-fidelity speech clarity and broadcast lighting."
    },
    images: [
      "/events/easummit/1.jpg"
    ]
  },
  {
    id: 6,
    title: "CSL Closing Day",
    role: { vi: "Technical Leader", en: "Technical Leader" },
    year: "2025",
    desc: {
      vi: "Giữ vai trò tổng chỉ huy kỹ thuật cho lễ vinh danh sinh viên. Kết hợp hài hòa giữa âm thanh và hiệu ứng ánh sáng/LED để đẩy cảm xúc của buổi lễ lên mức cao nhất.",
      en: "Commanded technical operations for student gala awards, harmonizing dynamic soundscapes with synchronized LED cues."
    },
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
    role: { vi: "AV Technician", en: "AV Technician" },
    year: "2025",
    desc: {
      vi: "Setup và vận hành mảng âm thanh, ánh sáng. Theo sát diễn biến sự kiện để backup và xử lý ngay lập tức các sự cố kỹ thuật, đảm bảo show diễn không bị gián đoạn.",
      en: "Setup and operated live audio/lighting with zero-downtime redundancy protocols to ensure uninterrupted performances."
    },
    images: [
      "/events/tretruyentre/1.jpg"
    ]
  },
  {
    id: 8,
    title: "Unitour: Empowering Sustainability",
    role: { vi: "Technical Crew", en: "Technical Crew" },
    year: "2025",
    desc: {
      vi: "Đồng hành cùng chuỗi sự kiện Unitour. Triển khai nhanh chóng hệ thống kỹ thuật sân khấu, tối ưu hóa trải nghiệm nghe nhìn cho hàng trăm sinh viên tham dự.",
      en: "Rapidly deployed acoustic and visual rigs across multi-campus sustainability roadshows for hundreds of attendees."
    },
    images: [
      "/events/mindset/1.jpg",
      "/events/mindset/2.jpg",
      "/events/mindset/3.jpg",
    ]
  },
  {
    id: 9,
    title: "Kick-off: Mirai Journey",
    role: { vi: "Stage Technician", en: "Stage Technician" },
    year: "2024",
    desc: {
      vi: "Cài đặt và điều khiển hệ thống ánh sáng, LED. Phối hợp chặt chẽ với ban tổ chức để bắt đúng 'cue' (nhịp) của các tiết mục, tạo nên màn Kick-off bùng nổ.",
      en: "Configured intelligent lighting and stage LED mapping, synchronizing precise performance cues for an explosive kick-off."
    },
    images: [
      "/events/mirai/1.jpg",
    ] 
  },
  {
    id: 10,
    title: "Talkshow: Break the rules",
    role: { vi: "Technical Staff & Guest Musician", en: "Technical Staff & Guest Musician" },
    year: "2024",
    desc: {
      vi: "Đảm nhận vai trò 'kép': Vừa điều khiển hệ thống AV phía sau cánh gà, vừa trực tiếp lên sân khấu trình diễn nhạc cụ (Organ), góp phần tạo nên không khí nghệ thuật cho Talkshow.",
      en: "Dual role: Commanded backstage AV consoles while performing live on stage as an Organ instrumentalist."
    },
    images: [
      "/events/breaktherules/1.jpg",
      "/events/breaktherules/2.jpg",
    ]
  },
  {
    id: 11,
    title: "BridgeFest 2023",
    role: { vi: "Zone Leader & Tech Support", en: "Zone Leader & Tech Support" },
    year: "2024",
    desc: {
      vi: "Quản lý khu vực được phân công, giám sát an toàn kỹ thuật, đảm bảo không có lỗi xảy ra trong quá trình diễn ra sự kiện.",
      en: "Zonal technical supervisor safeguarding electrical safety and uninterrupted AV streams during large-scale music festival."
    },
    images: [
      "/events/bridgefest/1.jpg",
      "/events/bridgefest/2.jpg"
    ]
  },
  {
    id: 12,
    title: "THE CIRCLE: Chuyến đi trao yêu thương",
    role: { vi: "Logistics & Operations", en: "Logistics & Operations" },
    year: "2024",
    desc: {
      vi: "Hỗ trợ công tác hậu cần và vận hành cho dự án thiện nguyện. Trực tiếp tham gia đóng gói, vận chuyển và trao tặng các phần quà ý nghĩa đến tận tay bà con vùng cao Ba Tơ, Quảng Ngãi.",
      en: "Managed volunteer logistics and technical fieldwork, delivering meaningful care packages to Ba To mountainous community, Quang Ngai."
    },
    images: [
      "/events/quangngai/1.jpg",
      "/events/quangngai/2.jpg"
    ]
  }
];

export const techStack = [
  { 
    category: { vi: "Ngôn ngữ Lập trình", en: "Programming Languages" }, 
    items: ["JavaScript (ES6+)", "TypeScript", "C# (.NET)", "Java", "SQL"] 
  },
  { 
    category: { vi: "Frontend & UI", en: "Frontend & UI Engineering" }, 
    items: ["React 19", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "Figma UI/UX"] 
  },
  { 
    category: { vi: "Backend & Cơ sở dữ liệu", en: "Backend & Databases" }, 
    items: ["Node.js", ".NET MVC 5", "Spring Boot", "SQL Server", "MongoDB", "RESTful API"] 
  },
  { 
    category: { vi: "Công cụ & DevOps", en: "Tools & DevOps" }, 
    items: ["Git / GitHub", "Docker", "Postman", "Vercel", "Lighthouse SEO", "A/B Testing"] 
  },
  {
    category: { vi: "Kỹ thuật Sân khấu & AV", en: "Live Event & AV Production" },
    items: ["Visual LED Mapping", "Live Sound Mixer", "Wireless Audio Setup", "Lighting Cues", "Real-time Crisis Recovery", "Organ Player"]
  }
];
