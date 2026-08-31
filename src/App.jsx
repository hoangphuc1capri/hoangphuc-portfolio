import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Headphones, FileText, X, Camera, Layout, ChevronRight, Images, ChevronLeft, Quote, ExternalLink, RefreshCw, Wifi, Eye, Maximize2 } from 'lucide-react';
import { profile, projects, events, techStack } from './data';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

function LivePreview({ url, title }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const statusLabel = useMemo(() => {
    if (loaded) return 'Live preview đang hoạt động';
    if (failed) return 'Live preview tạm không ổn định';
    return retryCount > 0 ? 'Đang thử kết nối lại live preview' : 'Đang kết nối tới website trực tiếp';
  }, [failed, loaded, retryCount]);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    setReloadKey(0);
    setRetryCount(0);
    setIsFullscreen(false);
  }, [url]);

  useEffect(() => {
    if (loaded || failed) return undefined;

    const timer = setTimeout(() => {
      if (retryCount < 1) {
        setRetryCount((current) => current + 1);
        setReloadKey((current) => current + 1);
        return;
      }

      setFailed(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [failed, loaded, reloadKey, retryCount]);

  const reloadPreview = () => {
    setFailed(false);
    setLoaded(false);
    setRetryCount(0);
    setReloadKey((current) => current + 1);
  };

  const Frame = ({ fullscreen = false }) => (
    <div className={`relative ${fullscreen ? 'w-[min(92vw,1280px)] h-[85vh]' : 'w-full h-full'} bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)]" />

      {!failed && (
        <iframe
          key={`${url}-${reloadKey}-${fullscreen ? 'fullscreen' : 'inline'}`}
          src={url}
          title={title}
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => {
            setLoaded(true);
            setFailed(false);
          }}
          onError={() => {
            if (retryCount < 1) {
              setRetryCount((current) => current + 1);
              setReloadKey((current) => current + 1);
              return;
            }

            setFailed(true);
          }}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      <div className={`absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between transition-opacity duration-500 ${loaded && !failed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
              Live Preview
            </div>
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </div>

        <div className="self-center w-full max-w-2xl rounded-[1.75rem] border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,_23,_42,_0.10)] p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">{title}</h3>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
            {failed
              ? 'Website này hiện không ổn định khi nhúng bằng iframe. Bạn có thể tải lại hoặc mở website trực tiếp ở tab mới.'
              : 'Portfolio đang giữ chế độ live preview hoàn toàn. Nếu website phản hồi chậm, hệ thống sẽ tự thử lại một lần.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={reloadPreview}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-blue-600 transition-colors"
            >
              <RefreshCw size={16} /> Tải lại live preview
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100 hover:bg-blue-100 transition-colors"
            >
              <ExternalLink size={16} /> Mở website
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <span>{statusLabel}</span>
          {!failed ? (
            <div className="flex items-center gap-2 text-blue-600">
              {!loaded && <div className="w-5 h-5 border-[3px] border-blue-200 border-t-blue-600 rounded-full animate-spin" />}
              <span>{loaded ? 'Connected' : retryCount === 0 ? 'Loading' : 'Retrying once'}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-amber-50 text-amber-700 border-amber-200">
              <Wifi size={14} />
              <span>Unavailable in iframe</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Frame />

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-slate-950/80 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>
              <Frame fullscreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function App() {
  const [activeView, setActiveView] = useState('developer');

  // State mới cho Event Gallery Modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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

      <main className="relative z-10 max-w-[90rem] mx-auto px-6 pt-32 md:pt-40">
        <div className={`${activeView === 'developer' ? 'block' : 'hidden'}`}>
          {/* =========================================
              TRANG 1: Web Developer (Giữ nguyên)
              ========================================= */}
          <motion.div animate={{ opacity: activeView === 'developer' ? 1 : 0, x: activeView === 'developer' ? 0 : -20 }} transition={{ duration: 0.3 }}>
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
                      Software Developer • Digiso · UEF Alumni
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
                      Xin chào, mình là <span className="text-slate-900 font-bold italic">Hoàng Phúc</span>. Một lập trình viên Gen Z sinh năm 2004, chuyên tâm vào <span className="text-slate-900">Web Development</span> và vận hành <span className="text-slate-900 underline decoration-blue-500/30">Kỹ thuật Sự kiện</span>.
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

              {/* Work Experience & Languages */}
              <section className="py-16 border-t border-slate-200/60">
                <div className="grid md:grid-cols-5 gap-10">
                  {/* Cột kinh nghiệm làm việc */}
                  <div className="md:col-span-3">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Kinh nghiệm làm việc</h3>

                    {/* Thực tập */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative pl-8 pb-8 border-l-2 border-blue-500"
                    >
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 ring-4 ring-blue-100"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                        {profile.internship.duration}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mt-3 mb-1">{profile.internship.title}</h4>
                      <p className="text-slate-500 font-semibold mb-3">{profile.internship.company}</p>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        Hoàn thành {profile.internship.months} thực tập tại Digiso. {profile.internship.note}. Tham gia trực tiếp vào các dự án phát triển sản phẩm số và quy trình vận hành thực tế.
                      </p>
                    </motion.div>

                    {/* UEF Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative pl-8 border-l-2 border-slate-200"
                    >
                      <div className="absolute w-4 h-4 bg-white border-4 border-slate-300 rounded-full -left-[9px] top-1"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {profile.uefExperience.duration}
                      </span>
                      <h4 className="text-lg font-bold text-slate-700 mt-3 mb-1">{profile.uefExperience.title}</h4>
                      <p className="text-slate-500 font-semibold mb-3">{profile.uefExperience.company}</p>
                      <p className="text-slate-500 font-medium leading-relaxed italic mb-4">
                        Suốt gần 4 năm đại học, vừa cầm micro cầm mixer, vừa cầm bàn phím gõ code. Hai mảng nghe tách biệt, nhưng cùng chung một tư duy: <strong>làm cho mọi thứ vận hành trơn tru</strong>.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {profile.uefExperience.roles.map((role, idx) => (
                          <div key={idx}>
                            <p className="text-[10px] font-black text-blue-600 uppercase mb-2">▸ {role.name}</p>
                            <ul className="text-sm text-slate-600 list-disc ml-4 leading-relaxed space-y-1">
                              {role.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Cột ngoại ngữ */}
                  <div className="md:col-span-2">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Ngoại ngữ</h3>
                    <div className="space-y-6 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
                      {profile.languages.map((lang, i) => (
                        <div key={lang.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-base font-bold text-slate-800">{lang.name}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                              {lang.level}
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: lang.name === 'Tiếng Anh' ? '65%' : '30%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Personal Projects */}
              <section className="py-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-3">Dự án cá nhân</h3>
                    <p className="text-slate-500 max-w-2xl leading-relaxed font-medium">
                      Ba sản phẩm mình trực tiếp xây dựng, tập trung vào trải nghiệm người dùng, hiệu quả vận hành và khả năng triển khai thực tế.
                    </p>
                  </div>
                </div>

                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 gap-12">
                  {projects.personal.map((p, i) => (
                    <motion.article
                      key={p.title}
                      variants={itemVariants}
                      whileHover={{ y: -6 }}
                      className="bg-white border border-slate-200/60 rounded-[2.25rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group grid xl:grid-cols-[minmax(0,1.9fr)_minmax(360px,0.85fr)]"
                    >
                      <div className="relative min-h-[440px] md:min-h-[560px] xl:min-h-[640px] border-b xl:border-b-0 xl:border-r border-slate-200 bg-slate-100 overflow-hidden">
                        {p.link ? (
                          <LivePreview url={p.link} title={p.title} />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center">
                              <Layout size={28} className="text-slate-400" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-slate-600 font-bold text-sm">Preview không khả dụng</p>
                              <p className="text-slate-400 text-xs">Dự án này hiện chưa có live preview.</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-8 md:p-10 flex flex-col flex-1">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition duration-300 mb-6">
                          {p.icon}
                        </div>

                        <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">{p.subtitle}</h5>
                        <h4 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-slate-900">{p.title}</h4>
                        <p className="text-sm md:text-base text-slate-500 mb-6 leading-relaxed">{p.desc}</p>
                        <p className="text-sm md:text-[15px] text-slate-400 mb-8 leading-relaxed flex-1">{p.detail}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {p.tech.map((t) => (
                            <span key={t} className="text-[10px] text-slate-500 font-bold uppercase bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">{t}</span>
                          ))}
                        </div>

                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-auto px-5 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-blue-600 transition-colors w-fit"
                          >
                            Truy cập website <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            </motion.div>
          </div>

          {/* =========================================
              TRANG 2: EVENT TECH (ĐÃ NÂNG CẤP ĐA ẢNH)
              ========================================= */}
          <div className={`${activeView === 'event' ? 'block' : 'hidden'}`}>
            <motion.div animate={{ opacity: activeView === 'event' ? 1 : 0, x: activeView === 'event' ? 0 : 20 }} transition={{ duration: 0.3 }}>

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
          </div>

        {/* --- FOOTER CHUNG --- */}
        <footer className="py-20 border-t border-slate-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 italic text-slate-800">Sẵn sàng đồng hành cùng bạn!</h2>

            {/* QR Code + Social */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
              <a href={profile.social.portfolio} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-105">
                <div className="bg-white p-3 rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-500/10">
                  <img src="/qr-phucphuc.png" alt="QR phucphuc.id.vn" className="w-28 h-28 block" />
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                  phucphuc.id.vn ↗
                </span>
              </a>
              <div className="flex flex-col items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  Kết nối nhanh
                </span>
                <div className="flex gap-4">
                  <a href={profile.social.github}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition shadow-sm"><Github
                      size={20} /></a>
                  <a href={profile.social.linkedin}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition shadow-sm"><Linkedin
                      size={20} /></a>
                  <a href={`mailto:${profile.social.email}`}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition shadow-sm"><Mail
                      size={20} /></a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2026 NGUYỄN HOÀNG PHÚC · phucphuc.id.vn
            </p>
          </div>
        </footer>
      </main>

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