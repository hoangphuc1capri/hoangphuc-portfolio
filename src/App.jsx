import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Headphones, FileText, Users, X, Camera, Database, Layout, ChevronRight, Images, ChevronLeft, Quote, ExternalLink } from 'lucide-react';
import { profile, projects, events, techStack, timeline } from './data';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeView, setActiveView] = useState('developer');

  // State mới cho Event Gallery Modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Hàm chuyển ảnh cho Event
  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === selectedEvent.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? selectedEvent.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            PHUC.DEV
          </span>
          <div className="flex bg-slate-100 p-1 rounded-full shadow-inner border border-slate-200">
            <button
              onClick={() => setActiveView('developer')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeView === 'developer' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Code2 size={16} /> Software
            </button>
            <button
              onClick={() => setActiveView('event')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeView === 'event' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Headphones size={16} /> Event Tech
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-40">
        <AnimatePresence mode="wait">

          {/* =========================================
              TRANG 1: Web Developer (Giữ nguyên)
              ========================================= */}
          {activeView === 'developer' && (
            <motion.div key="developer" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              {/* =========================================
    HERO SECTION: THE "DISCIPLINE" ENGINEER
    ========================================= */}
              <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20 relative">

                {/* CỘT TRÁI: NỘI DUNG CHỮ */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 text-center md:text-left z-10"
                >
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Web Developer Student • UEF
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.85]">
                    Nguyễn Hoàng <br />
                    <span className="text-blue-600">Phúc.</span>
                  </h1>

                  {/* Sub-headline & Quote */}
                  <div className="max-w-xl">
                    <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed font-medium">
                      Xin chào, mình là <span className="text-slate-900 font-bold italic">Senna</span>. Một lập trình viên Gen Z sinh năm 2004, chuyên tâm vào <span className="text-slate-900">Web Development</span> và vận hành <span className="text-slate-900 underline decoration-blue-500/30">Kỹ thuật Sự kiện</span>.
                    </p>

                    {/* Quote nổi bật từ bài báo */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2 mb-10 bg-blue-50/50 rounded-r-2xl">
                      <p className="text-sm md:text-base italic text-slate-600 font-semibold leading-relaxed">
                        "Mình làm việc dựa trên <span className="text-blue-600">kỷ luật</span> chứ không phải bằng động lực."
                      </p>
                      <a
                        href="https://www.uef.edu.vn/servicelearning/phan-hoi-cua-sinh-vien/nguyen-hoang-phuc-minh-lam-viec-dua-tren-ky-luat-chu-khong-phai-bang-dong-luc-25844"
                        target="_blank"
                        className="text-[10px] uppercase font-black text-blue-400 mt-2 block hover:text-blue-600 transition tracking-widest"
                      >
                        — Read Featured Article on UEF News ↗
                      </a>
                    </div>
                  </div>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href={`mailto:${profile.social.email}`} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition shadow-xl shadow-slate-200 hover:-translate-y-1 flex items-center gap-2">
                      <Mail size={18} /> Kết nối với mình
                    </a>
                    <a href="/CV_HoangPhuc.html" target="_blank" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition shadow-sm flex items-center gap-2">
                      <FileText size={18} /> Xem CV chi tiết
                    </a>
                  </div>
                </motion.div>

                {/* CỘT PHẢI: HÌNH ẢNH CÁ NHÂN (ĐÃ FIX LỖI MẤT ĐẦU) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 relative flex justify-center items-end md:items-center min-h-[400px] md:min-h-[600px]"
                >
                  {/* Decor Background (Hình khối phía sau) */}
                  <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>

                  {/* Khung trắng bo góc (Nên đẩy thấp xuống một chút để đầu bạn vượt lên trên) */}
                  <div className="absolute w-64 h-80 md:w-96 md:h-[500px] bg-white border border-slate-100 shadow-2xl rounded-[4rem] rotate-3 translate-y-10 hidden md:block"></div>

                  {/* Container chứa ảnh (Quan trọng: Không để overflow-hidden ở đây) */}
                  <div className="relative z-10 w-full max-w-[320px] md:max-w-[480px] flex justify-center items-end">
                    <img
                      src="/avatar.png"
                      alt="Nguyễn Hoàng Phúc - Senna"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-[1.03] transition-transform duration-500"
                      style={{
                        marginBottom: "-20px", // Đẩy chân ảnh xuống sát mép
                        maxHeight: "110%"     // Cho phép ảnh cao hơn container một chút
                      }}
                    />

                    {/* Floating Badge 1 (Software) - ĐẨY LÊN CAO VÀ RA NGOÀI BIÊN PHẢI */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="absolute -right-16 top-0 md:-right-24 md:top-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 z-20 hidden lg:block"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shadow-inner"><Code2 size={24} /></div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Specializing in</p>
                          <p className="text-sm font-bold text-slate-800 tracking-tight">Web Developer</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Badge 2 (Event) - ĐẨY XUỐNG THẤP VÀ RA NGOÀI BIÊN TRÁI */}
                    <motion.div
                      animate={{ y: [0, 15, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                      className="absolute -left-16 bottom-10 md:-left-28 md:bottom-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 z-20 hidden lg:block"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-rose-50 text-rose-600 rounded-xl shadow-inner"><Headphones size={24} /></div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Expertise in</p>
                          <p className="text-sm font-bold text-slate-800 tracking-tight">Event Technical</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

              </section>

              {/* Tech Stack */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="py-16 border-t border-slate-200/60">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Vũ khí công nghệ</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {techStack.map((stack, i) => (
                    <motion.div key={i} variants={itemVariants} className="group">
                      <h4 className="text-blue-600 font-bold mb-4 text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                        {stack.category}
                      </h4>
                      <div className="flex flex-col gap-2">
                        {stack.items.map((item, j) => (
                          <span key={j} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{item}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Timeline */}
              <section className="py-20 border-t border-slate-200/60">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Hành trình học tập</h3>
                <div className="relative border-l-2 border-blue-100 ml-3 md:ml-4 space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-1"></div>
                      <span className="text-blue-600 font-bold text-sm tracking-widest">{item.year}</span>
                      <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Featured Project */}
              <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-16">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-8">Dự án doanh nghiệp</h3>
                <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }} className="group rounded-[2.5rem] p-8 md:p-12 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] cursor-pointer relative overflow-hidden" onClick={() => setSelectedProject(projects.featured)}>
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Users size={24} /></div>
                    <h4 className="text-blue-600 text-xs font-bold uppercase tracking-widest">{projects.featured.subtitle}</h4>
                    <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">{projects.featured.title}</h2>
                    <p className="text-slate-500 mb-8 max-w-3xl leading-relaxed text-lg">{projects.featured.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects.featured.tech.map(t => <span key={t} className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-100 rounded-xl text-xs font-bold uppercase">{t}</span>)}
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                      Xem chi tiết <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.section>

              {/* Academic Projects */}
              <section className="py-16">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Đồ án môn học tiêu biểu</h3>
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.academic.map((p, i) => (
                    <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col h-full">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition duration-300 mb-6">{p.icon}</div>
                      <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">{p.subject}</h5>
                      <h4 className="text-xl font-bold mb-4 tracking-tight">{p.title}</h4>
                      <p className="text-sm text-slate-500 mb-8 flex-1 leading-relaxed">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tech.map(t => <span key={t} className="text-[9px] text-slate-400 font-bold uppercase bg-slate-50 border border-slate-100 px-2 py-1 rounded">{t}</span>)}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </motion.div>
          )}

          {/* =========================================
              TRANG 2: EVENT TECH (ĐÃ NÂNG CẤP ĐA ẢNH)
              ========================================= */}
          {activeView === 'event' && (
            <motion.div key="event" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>

              <section className="pb-20 text-center flex flex-col items-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 mb-6 shadow-sm">
                  <Camera size={32} />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
                  Behind The <span className="text-rose-600">Scenes.</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                  Không chỉ là người viết code, mình còn là người vận hành sân khấu. Khả năng giải quyết sự cố kỹ thuật "real-time" là điểm mạnh giúp mình luôn giữ cái đầu lạnh trong mọi dự án.
                </p>

                {/* THẺ TRÍCH DẪN BÀI BÁO (FEATURED ARTICLE) */}
                <motion.a
                  href="https://www.uef.edu.vn/servicelearning/phan-hoi-cua-sinh-vien/nguyen-hoang-phuc-minh-lam-viec-dua-tren-ky-luat-chu-khong-phai-bang-dong-luc-25844"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="mt-12 inline-flex flex-col md:flex-row items-center gap-5 bg-white border border-rose-100 p-5 md:pr-10 rounded-[2rem] shadow-xl shadow-rose-100/50 group text-left max-w-3xl relative overflow-hidden"
                >
                  {/* Hiệu ứng lướt sáng */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-rose-50 opacity-40 group-hover:animate-shine" />

                  <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 relative z-10">
                    <Quote size={24} className="fill-rose-200" />
                  </div>

                  <div className="relative z-10 text-center md:text-left">
                    <h4 className="text-[15px] md:text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug mb-1">
                      "Mình làm việc dựa trên kỷ luật chứ không phải bằng động lực"
                    </h4>
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-black">
                      — Chuyện Nhà CSL • UEF Service-Learning
                    </p>
                  </div>

                  <div className="hidden md:flex ml-auto text-rose-200 group-hover:text-rose-600 transition-colors relative z-10 pl-4 border-l border-slate-100">
                    <ExternalLink size={24} />
                  </div>
                </motion.a>
              </section>

              {/* Event Gallery Grid */}
              <section className="pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.map((event) => {
                    // Bảo vệ: Nếu chưa có mảng images thì dùng mảng tạm hoặc ảnh cũ
                    const eventImages = event.images || [event.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop'];

                    return (
                      <motion.div
                        key={event.id}
                        whileHover={{ scale: 1.02 }}
                        className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-200 shadow-lg cursor-pointer border border-slate-200/50"
                        onClick={() => {
                          setSelectedEvent({ ...event, images: eventImages }); // Truyền mảng ảnh an toàn vào modal
                          setActiveImageIndex(0);
                        }}
                      >
                        {/* Lấy ảnh đầu tiên làm ảnh bìa an toàn */}
                        <img src={eventImages[0]} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-300"></div>

                        {/* Badge hiển thị số lượng ảnh */}
                        {eventImages.length > 1 && (
                          <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/20">
                            <Images size={14} /> {eventImages.length}
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition duration-300">
                          <span className="inline-block px-3 py-1 bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md mb-3 shadow-md">
                            {event.year} • {event.role}
                          </span>
                          <h3 className="text-2xl font-bold text-white tracking-tight">{event.title}</h3>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </section>
            </motion.div>
          )}

        </AnimatePresence>

        {/* --- FOOTER CHUNG --- */}
        <footer className="py-20 border-t border-slate-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 italic text-slate-800">Sẵn sàng đồng hành cùng bạn!</h2>
            <div className="flex justify-center gap-6">
              <a href={profile.social.github} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition shadow-sm"><Github size={20} /></a>
              <a href={profile.social.linkedin} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition shadow-sm"><Linkedin size={20} /></a>
              <a href={`mailto:${profile.social.email}`} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition shadow-sm"><Mail size={20} /></a>
            </div>
            <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2026 NGUYỄN HOÀNG PHÚC • UEF
            </p>
          </div>
        </footer>
      </main>

      {/* =========================================
          MODAL 1: CHI TIẾT DỰ ÁN SOFTWARE
          ========================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white border border-slate-200 p-8 md:p-12 rounded-[3rem] max-w-2xl w-full relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 bg-slate-100 p-2 rounded-full"><X size={20} /></button>
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">{selectedProject.subtitle}</span>
              <h2 className="text-4xl font-black text-slate-900 mt-4 mb-8 tracking-tighter">{selectedProject.title}</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Chi tiết dự án</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{selectedProject.detail || selectedProject.desc}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 mb-3 tracking-widest">Công nghệ cốt lõi</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => <span key={t} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">{t}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          MODAL 2: THƯ VIỆN ẢNH SỰ KIỆN (MỚI)
          ========================================= */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedEvent(null)}
          >
            {/* Box Container của Modal */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Nút Đóng */}
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 z-50 bg-white/50 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur-md transition shadow-sm">
                <X size={20} />
              </button>

              {/* Trái: Khu vực hiển thị ảnh to (Carousel) */}
              <div className="w-full md:w-3/5 bg-slate-100 relative group aspect-[4/3] md:aspect-auto flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={selectedEvent.images[activeImageIndex]}
                    alt="Event Detail"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>

                {/* Nút qua trái/phải nếu sự kiện có nhiều hơn 1 ảnh */}
                {selectedEvent.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition opacity-0 group-hover:opacity-100">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition opacity-0 group-hover:opacity-100">
                      <ChevronRight size={24} />
                    </button>
                    {/* Chấm hiển thị vị trí ảnh (Dots) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedEvent.images.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}></div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Phải: Thông tin chi tiết & Ảnh thu nhỏ */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col bg-white overflow-y-auto max-h-[50vh] md:max-h-none">
                <span className="text-rose-600 text-[10px] font-black uppercase tracking-widest mb-2">
                  {selectedEvent.year} • {selectedEvent.role}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                  {selectedEvent.title}
                </h2>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                  {selectedEvent.desc}
                </p>

                {/* Grid ảnh thu nhỏ (Thumbnails) */}
                {selectedEvent.images.length > 1 && (
                  <div className="mt-auto">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Thư viện ảnh ({selectedEvent.images.length})</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedEvent.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-rose-500 scale-95' : 'border-transparent hover:opacity-80'}`}
                        >
                          <img src={img} className="w-full h-full object-cover aspect-square" alt="thumbnail" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;