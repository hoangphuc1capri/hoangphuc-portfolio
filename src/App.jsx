import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Code2, X, 
  ExternalLink, Check, Monitor, Radio,
  ChevronRight, ArrowUpRight, Copy, Printer,
  Maximize2, RefreshCw, Sparkles, Phone, MessageSquare,
  Send, Globe2, Lock, Bot, ShieldCheck
} from 'lucide-react';
import { profile, projects, events, techStack } from './data';

// ========================================================
// MADA AI ASSISTANT SIMULATOR (Live Interactive Conversational UI)
// ========================================================
function MadaAssistantSimulator({ project, lang, fullscreen = false, onToggleFullscreen }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'mada',
      text: lang === 'vi' 
        ? 'Xin chào! Tôi là MADA AI Assistant từ Digiso. Tôi có thể hỗ trợ bạn tìm hiểu năng lực công nghệ, sản phẩm AI hoặc kết nối nhanh với Nguyễn Hoàng Phúc.' 
        : 'Hello! I am MADA AI Assistant from Digiso. I can help you explore tech capabilities, AI products, or connect with Nguyen Hoang Phuc.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const promptSuggestions = useMemo(() => [
    {
      q: lang === 'vi' ? '🚀 Hoàng Phúc làm gì tại Digiso?' : "🚀 What is Phuc's role at Digiso?",
      a: lang === 'vi'
        ? 'Nguyễn Hoàng Phúc là Software Developer chính thức tại Digiso từ 01/08/2026. Phúc trực tiếp xây dựng giao diện AI Chat Streaming cho MADA Assistant, nền tảng FounderAI.biz, và tích hợp các luồng tự động hóa tiếp thị qua Zalo OA & Email.'
        : 'Nguyen Hoang Phuc is an Official Software Developer at Digiso (since August 2026). He engineers real-time streaming AI chat UI for MADA Assistant, FounderAI.biz, and automated Zalo & Email marketing funnels.'
    },
    {
      q: lang === 'vi' ? '⚡ Điểm mạnh công nghệ của MADA AI?' : '⚡ Tech strengths of MADA AI?',
      a: lang === 'vi'
        ? 'MADA AI vận hành trên React 19 + Vite, Tailwind CSS và streaming token phản hồi mili-giây. Hệ thống tích hợp bảo mật doanh nghiệp, lưu trữ lịch sử hội thoại và tương thích mượt mà trên mobile.'
        : 'MADA AI runs on React 19 + Vite with Tailwind CSS and sub-100ms real-time token streaming. Built with enterprise security compliance, session memory, and responsive UI.'
    },
    {
      q: lang === 'vi' ? '💼 Dịch vụ của Digiso gồm những gì?' : '💼 Digiso enterprise services?',
      a: lang === 'vi'
        ? 'Digiso cung cấp giải pháp chuyển đổi số toàn diện: Trợ lý AI đàm thoại chuyên sâu (MADA), nền tảng marketing automation Zalo OA / Email (FounderAI), và thiết kế phần mềm doanh nghiệp tùy chỉnh.'
        : 'Digiso provides comprehensive digital transformation: Conversational AI Assistants (MADA), multi-channel marketing automation (FounderAI), and custom enterprise software development.'
    },
    {
      q: lang === 'vi' ? '📞 Kết nối nhanh với Phúc' : '📞 Contact Hoang Phuc',
      a: lang === 'vi'
        ? 'Bạn có thể kết nối ngay với Hoàng Phúc qua Hotline/Zalo: 0844 790 999, WhatsApp: +84 844 790 999, Telegram: @hoangphuc_capri hoặc Email: hoangphuc.capri.0501@gmail.com.'
        : 'Reach Phuc via Phone/Zalo: 0844 790 999, WhatsApp: +84 844 790 999, Telegram: @hoangphuc_capri or Email: hoangphuc.capri.0501@gmail.com.'
    }
  ], [lang]);

  const handleSendPrompt = (question, answer) => {
    if (isTyping) return;
    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, sender: 'user', text: question }
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { id: prev.length + 2, sender: 'mada', text: answer }
      ]);
      setIsTyping(false);
    }, 400);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    const text = inputValue.trim();
    setInputValue('');
    
    const matched = promptSuggestions.find(p => p.q.toLowerCase().includes(text.toLowerCase()) || text.toLowerCase().includes(p.q.toLowerCase()));
    const reply = matched 
      ? matched.a 
      : (lang === 'vi' 
          ? `MADA AI đã tiếp nhận câu hỏi của bạn: "${text}". Dự án MADA AI Assistant được Hoàng Phúc tối ưu với khả năng xử lý truy vấn AI real-time, giao diện thân thiện và kết nối API doanh nghiệp mượt mà.`
          : `MADA AI received your query: "${text}". MADA AI Assistant was engineered by Hoang Phuc with real-time AI query handling, ultra-responsive UI, and robust enterprise API integration.`);

    handleSendPrompt(text, reply);
  };

  return (
    <div className={`relative ${fullscreen ? 'w-[min(94vw,1200px)] h-[86vh]' : 'w-full h-full min-h-[480px] md:min-h-[540px]'} bg-[#050C07] rounded-2xl overflow-hidden flex flex-col border border-[#00DF82]/30 shadow-2xl`}>
      {/* Top OS Window Bar */}
      <div className="px-4 py-3 bg-[#030805] border-b border-[#E2F8EE]/10 flex items-center justify-between shrink-0 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-[#00DF82]/80"></span>
          <div className="hidden sm:flex items-center gap-2 ml-3 px-3 py-1 rounded-full bg-[#08140E] border border-[#00DF82]/30 text-[11px] font-mono text-[#60FFAF]">
            <Lock size={11} className="text-[#00DF82]" />
            <span>mada.digiso.vn/chat</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-ping ml-1"></span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#00DF82] px-2.5 py-0.5 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-pulse"></span>
            <span>Live Interactive Simulator</span>
          </span>
          <button
            type="button"
            onClick={onToggleFullscreen}
            title={fullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
            className="p-1.5 rounded-lg text-[#E2F8EE]/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            {fullscreen ? <X size={15} /> : <Maximize2 size={13} />}
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Mở mada.digiso.vn"
            className="p-1.5 rounded-lg text-[#00DF82] hover:text-[#60FFAF] hover:bg-[#00DF82]/10 transition-colors"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Chat App Header inside window */}
      <div className="px-4 sm:px-6 py-3.5 bg-[#06120A] border-b border-[#00DF82]/15 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#00DF82]/15 border border-[#00DF82]/40 flex items-center justify-center p-1.5 overflow-hidden">
            <img src={project.image} alt="MADA Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-kanit font-bold text-sm text-white tracking-wide">MADA AI Assistant</h4>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-[#00DF82]/20 text-[#60FFAF] border border-[#00DF82]/30">v2.4 Enterprise</span>
            </div>
            <p className="text-[10px] text-[#E2F8EE]/60 font-mono">Digiso Technology · Stream Engine Active</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#E2F8EE]/50">
          <Bot size={13} className="text-[#00DF82]" />
          <span>Real-time Chat Simulation</span>
        </div>
      </div>

      {/* Chat Message Scrollable Viewport */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-xs sm:text-sm">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'mada' && (
              <div className="w-7 h-7 rounded-lg bg-[#00DF82]/20 border border-[#00DF82]/40 flex items-center justify-center shrink-0 p-1">
                <img src={project.image} alt="MADA" className="w-full h-full object-contain" />
              </div>
            )}
            <div 
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-[#00DF82] to-[#60FFAF] text-black font-semibold shadow-md'
                  : 'bg-[#08180E] border border-[#00DF82]/25 text-[#E2F8EE]'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs font-mono text-[#60FFAF] py-1">
            <div className="w-7 h-7 rounded-lg bg-[#00DF82]/20 border border-[#00DF82]/40 flex items-center justify-center shrink-0 p-1">
              <img src={project.image} alt="MADA" className="w-full h-full object-contain" />
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#08180E] border border-[#00DF82]/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="px-4 py-2 bg-[#040A06] border-t border-[#E2F8EE]/5 overflow-x-auto flex items-center gap-2 no-scrollbar">
        {promptSuggestions.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendPrompt(item.q, item.a)}
            className="px-3 py-1 rounded-full bg-[#08180E] hover:bg-[#00DF82]/20 border border-[#00DF82]/30 hover:border-[#00DF82] text-[11px] text-[#60FFAF] hover:text-white transition-all whitespace-nowrap shrink-0"
          >
            {item.q}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <form onSubmit={handleCustomSubmit} className="p-3 sm:p-4 bg-[#030805] border-t border-[#00DF82]/20 flex items-center gap-2">
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={lang === 'vi' ? 'Hỏi MADA AI về dự án hoặc Digiso...' : 'Ask MADA AI about the project or Digiso...'}
          className="flex-1 bg-[#08180E] border border-[#00DF82]/25 focus:border-[#00DF82] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#E2F8EE]/40 outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00DF82] to-[#60FFAF] text-black font-bold text-xs flex items-center gap-1.5 hover:opacity-90 disabled:opacity-40 transition-all shadow-md shrink-0"
        >
          <span>{lang === 'vi' ? 'Gửi' : 'Send'}</span>
          <Send size={13} />
        </button>
      </form>
    </div>
  );
}

// ========================================================
// REAL WEBPAGE BROWSER SHOWCASE (1440x900 Live Captured Screenshots)
// ========================================================
function InteractiveBrowserShowcase({ project, lang, fullscreen = false, onToggleFullscreen }) {
  const [madaTab, setMadaTab] = useState('screenshot'); // 'screenshot' or 'chat'
  const isMada = project.id === 'mada-ai';

  const cleanUrl = useMemo(() => {
    return project.link ? project.link.replace(/^https?:\/\//, '') : '';
  }, [project.link]);

  return (
    <div className={`relative ${fullscreen ? 'w-[min(94vw,1320px)] h-[88vh]' : 'w-full h-full min-h-[460px] md:min-h-[520px]'} bg-[#050C07] rounded-2xl overflow-hidden flex flex-col border border-[#00DF82]/30 shadow-2xl`}>
      {/* OS Browser Bar */}
      <div className="px-4 py-3 bg-[#030805] border-b border-[#E2F8EE]/10 flex items-center justify-between shrink-0 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-[#00DF82]/80"></span>

          {/* Address Pill */}
          <div className="hidden sm:flex items-center gap-2 ml-3 px-3 py-1 rounded-full bg-[#08140E] border border-[#00DF82]/30 text-[11px] font-mono text-[#60FFAF] max-w-xs truncate">
            <Lock size={11} className="text-[#00DF82]" />
            <span className="truncate">{cleanUrl}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-ping ml-1"></span>
          </div>
        </div>

        {/* Browser Right Controls */}
        <div className="flex items-center gap-2">
          {isMada && (
            <div className="flex items-center bg-[#08140E] border border-[#00DF82]/25 rounded-full p-0.5 text-[10px] font-mono">
              <button
                type="button"
                onClick={() => setMadaTab('screenshot')}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${madaTab === 'screenshot' ? 'bg-[#00DF82] text-black font-extrabold shadow-sm' : 'text-[#E2F8EE]/60 hover:text-white'}`}
              >
                <Monitor size={11} />
                <span>{lang === 'vi' ? 'Giao diện Web' : 'Live UI'}</span>
              </button>
              <button
                type="button"
                onClick={() => setMadaTab('chat')}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${madaTab === 'chat' ? 'bg-[#00DF82] text-black font-extrabold shadow-sm' : 'text-[#E2F8EE]/60 hover:text-white'}`}
              >
                <Bot size={11} />
                <span>{lang === 'vi' ? 'Chat Thử' : 'AI Chat'}</span>
              </button>
            </div>
          )}

          <span className="text-[10px] font-mono uppercase tracking-wider text-[#00DF82] hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-pulse"></span>
            <span>Live 2026</span>
          </span>

          <button
            type="button"
            onClick={onToggleFullscreen}
            title={fullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
            className="p-1.5 rounded-lg text-[#E2F8EE]/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            {fullscreen ? <X size={15} /> : <Maximize2 size={13} />}
          </button>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={lang === 'vi' ? 'Mở trực tiếp website' : 'Open live website'}
            className="p-1.5 rounded-lg text-[#00DF82] hover:text-[#60FFAF] hover:bg-[#00DF82]/10 transition-colors"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative flex-1 w-full h-full bg-[#040806] overflow-hidden flex flex-col">
        {isMada && madaTab === 'chat' ? (
          <MadaAssistantSimulator project={project} lang={lang} fullscreen={fullscreen} onToggleFullscreen={onToggleFullscreen} />
        ) : (
          /* High-Resolution Real Page Screenshot Showcase */
          <div className="relative flex-1 w-full h-full overflow-y-auto group">
            {/* Clickable Image to open live website */}
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={`${project.title} live interface`}
                className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040806] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </a>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-[#040806]/90 backdrop-blur-md border border-[#00DF82]/40 text-[#60FFAF] text-[10px] font-mono flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#00DF82] animate-ping"></span>
                <span>Chụp thực tế từ website · 1440×900</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#040806]/90 backdrop-blur-md border border-[#E2F8EE]/15 text-[#E2F8EE]/80 text-[10px] font-mono hidden sm:inline-block">
                ⚡ Lighthouse 95+
              </span>
            </div>

            {/* Bottom Floating Interactive HUD */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-[#050E08]/92 backdrop-blur-md border border-[#00DF82]/30 flex flex-wrap items-center justify-between gap-3 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#00DF82] tracking-wider block">
                  {lang === 'vi' ? 'Giao diện thực tế' : 'Real Website Interface'}
                </span>
                <h4 className="font-kanit font-black text-white text-base sm:text-lg">{project.title}</h4>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.highlights?.map((hl, hIdx) => (
                    <span key={hIdx} className="px-2 py-0.5 rounded-md bg-[#00DF82]/10 text-[#60FFAF] text-[10px] font-mono border border-[#00DF82]/20">
                      {hl[lang]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-btn text-black font-extrabold uppercase tracking-wider text-xs px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg"
                >
                  <span>{lang === 'vi' ? 'Mở Website Trực Tiếp' : 'Open Website'}</span>
                  <ArrowUpRight size={14} className="stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================================
// UNIFIED PROJECT SHOWCASE WINDOW (Handles Fullscreen & Routing)
// ========================================================
function ProjectShowcaseWindow({ project, lang }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <InteractiveBrowserShowcase 
        project={project} 
        lang={lang} 
        fullscreen={false} 
        onToggleFullscreen={() => setIsFullscreen(true)} 
      />

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#040806]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <InteractiveBrowserShowcase 
                project={project} 
                lang={lang} 
                fullscreen={true} 
                onToggleFullscreen={() => setIsFullscreen(false)} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================================
// MAIN APPLICATION COMPONENT (With Bilingual VI / EN Support)
// ========================================================
export default function App() {
  const [lang, setLang] = useState('vi'); // 'vi' or 'en'
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [copiedType, setCopiedType] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventFilter, setEventFilter] = useState('all');

  // 1. Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(winScroll / height);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Mouse spotlight
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Copy handler
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  // 4. Events filter
  const filteredEvents = useMemo(() => {
    if (eventFilter === 'all') return events;
    if (eventFilter === 'featured') return events.slice(0, 6);
    return events.filter(e => e.year === eventFilter);
  }, [eventFilter]);

  // Dictionary for UI static text
  const t = useMemo(() => {
    return {
      vi: {
        navAbout: 'Về tôi',
        navProjects: 'Dự án Live',
        navEvents: 'Sân khấu & AV',
        navExperience: 'Kinh nghiệm',
        navContact: 'Liên hệ',
        openToWork: 'Lập trình viên Digiso',
        viewCvBtn: 'Xem CV A4',
        heroEyebrow: 'WHERE CODE MEETS THE STAGE · PORTFOLIO 2026',
        heroTagline: 'Kỹ sư phần mềm tốt nghiệp UEF, hiện là Lập trình viên chính thức tại Digiso. Đam mê biến ý tưởng thành sản phẩm số thật từ nền tảng AI thông minh đến web fullstack. Bên cạnh code, vận hành kỹ thuật âm thanh - ánh sáng - LED cho 20+ sự kiện 1000+ người với tư duy Zero-Downtime.',
        exploreProjects: 'Khám phá 5 Dự án Live',
        exploreEvents: 'Show Sân khấu & AV',
        metric1Num: 'DIGISO',
        metric1Sub: 'Lập trình viên chính thức',
        metric2Num: '20+ Show',
        metric2Sub: 'Sự kiện quy mô 50 - 1000+ người',
        metric3Num: '60% Hiệu suất',
        metric3Sub: 'Tối ưu hóa với CSLUEF.com',
        metric4Num: '95+ Điểm',
        metric4Sub: 'Lighthouse Performance',
        capSectionTitle: '01 / THẾ MẠNH ĐỘC BẢN',
        capHeading: 'HAI MẶT CỦA MỘT BẢN THỂ',
        capDesc: 'Sự hòa quyện giữa tư duy logic của Kỹ sư phần mềm và phản xạ nhạy bén tính bằng mili-giây của Tổng chỉ huy kỹ thuật sân khấu.',
        devPillarTitle: 'The Code Crafter',
        devPillarDesc: 'Tốt nghiệp Kỹ thuật Phần mềm UEF. Lập trình viên chính thức tại Digiso, tham gia phát triển MADA AI Assistant, FounderAI.biz và các nền tảng số hóa. Tập trung UI chuyển đổi cao, tối ưu Lighthouse 95+ và kiến trúc Backend ổn định.',
        stagePillarTitle: 'The Stage Conductor',
        stagePillarDesc: '4 năm cống hiến giữ chức vụ Trưởng ban Kỹ thuật Trung tâm Kết nối cộng đồng UEF. Chỉ huy kỹ thuật âm thanh, ánh sáng, màn hình LED và visual cho 20+ sự kiện tầm cỡ. Rèn luyện bản lĩnh xử lý sự cố trực tiếp dưới áp lực nghẹt thở.',
        projectsSectionTitle: '02 / FEATURED WORK',
        projectsHeading: '5 DỰ ÁN LIVE PREVIEW (LUÔN BẬT)',
        projectsDesc: 'Tất cả các sản phẩm số đều đang chạy trực tiếp trên môi trường production, bạn có thể lướt và tương tác ngay trên khung mô phỏng.',
        openNewTab: 'Mở Tab Mới',
        productDesc: 'Mô tả sản phẩm',
        techStackLabel: 'Tech Stack',
        statusActive: '● Production Active',
        perfScore: 'Lighthouse 95+',
        responsiveAll: '100% Mobile & PC',
        visitDirectly: 'Truy cập trực tiếp',
        eventsSectionTitle: '03 / BEHIND THE STAGE',
        eventsHeading: 'SÂN KHẤU, ÁNH SÁNG & AV THỰC CHIẾN',
        eventsDesc: '20+ sự kiện quy mô từ 50 đến 1000+ người trong suốt 4 năm phụ trách kỹ thuật.',
        filterAll: `Tất cả (${events.length})`,
        filterFeatured: 'Tiêu biểu (6)',
        filter2026: 'Năm 2026',
        filter2025: 'Năm 2025',
        filter2024: 'Năm 2024',
        viewPhotos: 'Xem ảnh',
        timelineSectionTitle: '04 / TIMELINE',
        timelineHeading: 'KINH NGHIỆM THỰC CHIẾN',
        arsenalSectionTitle: '05 / ARSENAL',
        arsenalHeading: 'KỸ NĂNG & VŨ KHÍ CÔNG NGHỆ',
        contactSectionTitle: 'Ready for full-time role & high-impact projects',
        contactHeading: "LET'S TALK",
        directEmail: 'Direct Email',
        phoneZalo: 'Phone / Zalo',
        chatWhatsApp: 'Chat qua WhatsApp',
        chatTelegram: 'Chat qua Telegram',
        copyright: 'Nguyễn Hoàng Phúc · Portfolio 2026',
        copyrightRole: 'Software Developer · Digiso Official · Event Technical Director',
        cvModalTitle: 'CURRICULUM VITAE · HOÀNG PHÚC',
        printCv: 'In / Tải PDF',
        summaryHeading: 'Tóm tắt năng lực',
        progSkillsHeading: 'Kỹ năng Lập trình',
        stageSkillsHeading: 'Kỹ thuật Sân khấu',
        eduHeading: 'Học vấn',
        workExpHeading: 'Kinh nghiệm thực tế',
        featuredProjHeading: 'Dự án tiêu biểu',
      },
      en: {
        navAbout: 'About',
        navProjects: 'Live Projects',
        navEvents: 'Stage & AV',
        navExperience: 'Experience',
        navContact: 'Contact',
        openToWork: 'Software Developer @ Digiso',
        viewCvBtn: 'View A4 CV',
        heroEyebrow: 'WHERE CODE MEETS THE STAGE · PORTFOLIO 2026',
        heroTagline: 'Software Engineering Graduate from UEF, currently an Official Software Developer at Digiso. Passionate about shipping real digital products, from intelligent conversational AI to high-performing fullstack platforms. Simultaneously commanding live AV, sound, and stage LED for 20+ mega shows with a Zero-Downtime mindset.',
        exploreProjects: 'Explore 5 Live Projects',
        exploreEvents: 'Live Shows & AV',
        metric1Num: 'DIGISO',
        metric1Sub: 'Official Software Developer',
        metric2Num: '20+ Shows',
        metric2Sub: 'Live events (50 to 1,000+ pax)',
        metric3Num: '60% Efficiency',
        metric3Sub: 'Optimized via CSLUEF.com',
        metric4Num: '95+ Score',
        metric4Sub: 'Google Lighthouse Performance',
        capSectionTitle: '01 / CORE DUAL CAPABILITY',
        capHeading: 'TWO SIDES OF ONE IDENTITY',
        capDesc: 'The synergy between structured software engineering logic and split-second crisis instincts of a live stage technical director.',
        devPillarTitle: 'The Code Crafter',
        devPillarDesc: 'Software Engineering graduate from UEF. Full-time developer at Digiso, building MADA AI Assistant, FounderAI.biz, and business digitization platforms with high conversion UX and 95+ Lighthouse scores.',
        stagePillarTitle: 'The Stage Conductor',
        stagePillarDesc: '4 years dedicated as Head of Technical Team at UEF Community Center. Directed audio, lighting, and real-time LED mapping for 20+ large-scale events under intense live production pressure.',
        projectsSectionTitle: '02 / FEATURED WORK',
        projectsHeading: '5 LIVE PREVIEWS (ALWAYS ON)',
        projectsDesc: 'All digital products are running live on production environments. You can scroll, test, and interact right inside the simulated frames.',
        openNewTab: 'Open In New Tab',
        productDesc: 'Product Overview',
        techStackLabel: 'Tech Stack',
        statusActive: '● Production Active',
        perfScore: 'Lighthouse 95+',
        responsiveAll: '100% Mobile & PC',
        visitDirectly: 'Visit live project',
        eventsSectionTitle: '03 / BEHIND THE STAGE',
        eventsHeading: 'STAGE PRODUCTION & LIVE AV ARCHIVE',
        eventsDesc: '20+ live conferences, summits, and festivals (50 to 1,000+ audience capacity) across 4 years of technical leadership.',
        filterAll: `All (${events.length})`,
        filterFeatured: 'Featured (6)',
        filter2026: 'Year 2026',
        filter2025: 'Year 2025',
        filter2024: 'Year 2024',
        viewPhotos: 'View Photos',
        timelineSectionTitle: '04 / TIMELINE',
        timelineHeading: 'PRACTICAL EXPERIENCE',
        arsenalSectionTitle: '05 / ARSENAL',
        arsenalHeading: 'TECHNICAL SKILLS & TOOLS',
        contactSectionTitle: 'Ready for full-time role & high-impact projects',
        contactHeading: "LET'S TALK",
        directEmail: 'Direct Email',
        phoneZalo: 'Phone / Zalo',
        chatWhatsApp: 'Chat on WhatsApp',
        chatTelegram: 'Chat on Telegram',
        copyright: 'Nguyen Hoang Phuc · Portfolio 2026',
        copyrightRole: 'Software Developer · Digiso Official · Event Technical Director',
        cvModalTitle: 'CURRICULUM VITAE · HOANG PHUC',
        printCv: 'Print / Save PDF',
        summaryHeading: 'Executive Summary',
        progSkillsHeading: 'Software Engineering',
        stageSkillsHeading: 'Live Event & AV',
        eduHeading: 'Education',
        workExpHeading: 'Professional Experience',
        featuredProjHeading: 'Featured Projects',
      }
    }[lang];
  }, [lang]);

  return (
    <div className="bg-[#040806] text-[#E2F8EE] font-sans antialiased selection:bg-[#00DF82] selection:text-black relative overflow-x-hidden min-h-screen">
      
      {/* Mouse Glow Spotlight */}
      <div 
        className="pointer-events-none fixed w-[600px] h-[600px] rounded-full blur-3xl z-1 hidden md:block transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 223, 130, 0.12) 0%, rgba(5, 122, 68, 0.04) 40%, transparent 70%)'
        }}
      />

      {/* Top Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#032B18] via-[#00DF82] to-[#60FFAF] z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Floating Header Navigation */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-[1280px]">
        <nav className="glass-panel px-4 sm:px-6 lg:px-8 py-3 rounded-full flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          
          <a href="#hero" className="flex items-center gap-2 group shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00DF82] group-hover:scale-125 transition-transform shadow-[0_0_12px_#00DF82]"></span>
            <span className="font-kanit font-black tracking-wider text-lg uppercase text-white group-hover:text-[#60FFAF] transition-colors whitespace-nowrap">
              HP<span className="text-[#00DF82]">.DEV</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-7 text-xs uppercase tracking-wider font-medium text-[#E2F8EE]/70 whitespace-nowrap">
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">{t.navAbout}</a>
            <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap">{t.navProjects}</a>
            <a href="#events" className="hover:text-white transition-colors whitespace-nowrap">{t.navEvents}</a>
            <a href="#experience" className="hover:text-white transition-colors whitespace-nowrap">{t.navExperience}</a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap">{t.navContact}</a>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-[#040806]/80 border border-[#E2F8EE]/15 rounded-full p-0.5 text-[11px] font-mono shrink-0">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === 'vi' ? 'bg-[#00DF82] text-black font-black shadow-sm' : 'text-[#E2F8EE]/60 hover:text-white'}`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-[#00DF82] text-black font-black shadow-sm' : 'text-[#E2F8EE]/60 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            {/* Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00DF82]/10 border border-[#00DF82]/25 text-[#60FFAF] text-[11px] font-medium whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DF82] animate-ping"></span>
              <span>{t.openToWork}</span>
            </div>

            <button 
              onClick={() => setIsCvOpen(true)}
              className="shine-btn text-black text-xs uppercase tracking-wider font-black px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>{t.viewCvBtn}</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </button>
          </div>

        </nav>
      </header>

      {/* Ambient Stage Light Background Gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#057A44]/20 rounded-full blur-[140px]"></div>
        <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-[#032B18]/35 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-10 right-0 w-[700px] h-[600px] bg-[#00DF82]/10 rounded-full blur-[150px]"></div>
      </div>

      <main className="relative z-10">

        {/* ======================================================== */}
        {/* HERO SECTION: MASSIVE TYPOGRAPHY + AVATAR PHOTO          */}
        {/* ======================================================== */}
        <section id="hero" className="relative min-h-screen pt-36 pb-20 px-5 sm:px-8 md:px-12 flex flex-col justify-between cyber-grid-bg">
          
          <div className="max-w-6xl mx-auto w-full pt-4">
            
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
              
              {/* Left Column: Text & Hero Info */}
              <div className="lg:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E2F8EE]/15 bg-[#E2F8EE]/5 backdrop-blur-sm text-xs font-mono tracking-widest uppercase text-[#60FFAF] mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00DF82] animate-pulse"></span>
                  {t.heroEyebrow}
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-kanit font-black uppercase text-white tracking-tighter leading-[0.88] mb-6 cursor-default" 
                  style={{ fontSize: 'clamp(3rem, 9.5vw, 135px)' }}
                >
                  HOÀNG PHÚC
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E2F8EE] via-[#00DF82] to-[#60FFAF]">
                    TECH &amp; STAGE
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-2xl text-[#E2F8EE]/80 text-base sm:text-lg font-light leading-relaxed mb-8"
                >
                  {t.heroTagline}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4 sm:gap-6"
                >
                  <a href="#projects" className="shine-btn text-black font-extrabold uppercase tracking-wider text-sm px-8 py-4 rounded-full flex items-center gap-3">
                    <span>{t.exploreProjects}</span>
                    <ChevronRight size={18} />
                  </a>

                  <a href="#events" className="px-8 py-4 rounded-full border border-[#E2F8EE]/30 hover:border-[#00DF82] text-white hover:text-[#60FFAF] uppercase tracking-wider text-sm font-semibold glass-panel transition-all flex items-center gap-3">
                    <span>{t.exploreEvents}</span>
                    <Radio size={16} className="text-[#00DF82]" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: User Portrait Card with /avatar.png */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group max-w-sm w-full"
                >
                  {/* Glowing backlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00DF82]/35 via-[#057A44]/30 to-[#60FFAF]/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                  {/* Card Container */}
                  <div className="relative glass-panel rounded-[2.5rem] p-4 border border-[#00DF82]/30 overflow-hidden shadow-2xl">
                    
                    {/* Portrait Image */}
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative bg-[#050C07]">
                      <img 
                        src="/avatar.png" 
                        alt="Nguyễn Hoàng Phúc" 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/events/personalpic/nhangiaycsl.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040806] via-transparent to-transparent opacity-80"></div>
                      
                      {/* Live Badge overlay */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#040806]/80 backdrop-blur-md border border-[#00DF82]/40 text-[10px] font-mono text-[#60FFAF] flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#00DF82] animate-ping"></span>
                        <span>Hoàng Phúc · 2004</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[10px] font-mono uppercase text-[#60FFAF] tracking-widest block">Software Developer</span>
                        <h4 className="font-kanit font-black text-xl text-white">Nguyễn Hoàng Phúc</h4>
                        <p className="text-[11px] text-[#E2F8EE]/70 font-light mt-0.5">
                          {lang === 'vi' ? 'Lập trình viên chính thức @ Digiso' : 'Official Software Developer @ Digiso'}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="pt-3 px-2 flex items-center justify-between text-xs font-mono text-[#E2F8EE]/60">
                      <span className="flex items-center gap-1.5">
                        <Sparkles size={13} className="text-[#00DF82]" />
                        <span>Stage &amp; Code</span>
                      </span>
                      <span className="text-[#60FFAF]">phucphuc.id.vn</span>
                    </div>

                  </div>
                </motion.div>
              </div>

            </div>

          </div>

          {/* Quick Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-6xl mx-auto w-full border-t border-[#E2F8EE]/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div>
              <div className="font-kanit font-black text-3xl sm:text-4xl text-white tracking-tight">{t.metric1Num}</div>
              <div className="text-xs uppercase tracking-widest text-[#E2F8EE]/50 mt-1">{t.metric1Sub}</div>
            </div>
            <div>
              <div className="font-kanit font-black text-3xl sm:text-4xl text-white tracking-tight">{t.metric2Num}</div>
              <div className="text-xs uppercase tracking-widest text-[#E2F8EE]/50 mt-1">{t.metric2Sub}</div>
            </div>
            <div>
              <div className="font-kanit font-black text-3xl sm:text-4xl text-white tracking-tight">{t.metric3Num}</div>
              <div className="text-xs uppercase tracking-widest text-[#E2F8EE]/50 mt-1">{t.metric3Sub}</div>
            </div>
            <div>
              <div className="font-kanit font-black text-3xl sm:text-4xl text-white tracking-tight">{t.metric4Num}</div>
              <div className="text-xs uppercase tracking-widest text-[#E2F8EE]/50 mt-1">{t.metric4Sub}</div>
            </div>
          </motion.div>

        </section>

        {/* ======================================================== */}
        {/* KINETIC DOUBLE MARQUEE                                   */}
        {/* ======================================================== */}
        <section className="relative py-16 sm:py-24 overflow-hidden select-none">
          <div className="transform -rotate-[2.5deg] relative z-20 py-3.5 shadow-2xl" style={{ background: 'linear-gradient(90deg, #60FFAF, #00DF82 40%, #A7F3D0 75%, #00DF82)' }}>
            <div className="marquee-track-left text-[#040806] font-kanit font-black text-lg sm:text-2xl uppercase tracking-widest flex items-center gap-8">
              <span>MADA AI ASSISTANT</span> <span className="opacity-40">✦</span>
              <span>TIA CHỚP CONSULT</span> <span className="opacity-40">✦</span>
              <span>FOUNDERAI.BIZ</span> <span className="opacity-40">✦</span>
              <span>CSLUEF.COM</span> <span className="opacity-40">✦</span>
              <span>ASTRODEMY.VN</span> <span className="opacity-40">✦</span>
              <span>REACT 19</span> <span className="opacity-40">✦</span>
              <span>NEXT.JS</span> <span className="opacity-40">✦</span>
              <span>.NET MVC 5</span> <span className="opacity-40">✦</span>
              <span>SPRING BOOT</span> <span className="opacity-40">✦</span>
              <span>SQL SERVER</span> <span className="opacity-40">✦</span>
              <span>DOCKER</span> <span className="opacity-40">✦</span>
              <span>MADA AI ASSISTANT</span> <span className="opacity-40">✦</span>
              <span>TIA CHỚP CONSULT</span> <span className="opacity-40">✦</span>
              <span>FOUNDERAI.BIZ</span> <span className="opacity-40">✦</span>
            </div>
          </div>

          <div className="transform rotate-[1.5deg] -mt-5 sm:-mt-7 relative z-10 py-3.5 border-y border-[#00DF82]/40" style={{ background: 'linear-gradient(90deg, #032B18, #051A10 50%, #032B18)' }}>
            <div className="marquee-track-right text-[#E2F8EE] font-kanit font-black text-lg sm:text-2xl uppercase tracking-widest flex items-center gap-8">
              <span className="text-[#60FFAF]">STAGE TECHNICAL DIRECTOR</span> <span className="text-[#00DF82]">✦</span>
              <span>AV OPERATOR</span> <span className="text-[#00DF82]">✦</span>
              <span className="text-[#60FFAF]">LED SCREEN MAPPING</span> <span className="text-[#00DF82]">✦</span>
              <span>LIVE AUDIO MIXER</span> <span className="text-[#00DF82]">✦</span>
              <span className="text-[#60FFAF]">LIGHTING CUE CONTROL</span> <span className="text-[#00DF82]">✦</span>
              <span>1000+ AUDIENCE CAPACITY</span> <span className="text-[#00DF82]">✦</span>
              <span className="text-[#60FFAF]">ZERO-FAILURE UNDER PRESSURE</span> <span className="text-[#00DF82]">✦</span>
              <span className="text-[#60FFAF]">STAGE TECHNICAL DIRECTOR</span> <span className="text-[#00DF82]">✦</span>
              <span>AV OPERATOR</span> <span className="text-[#00DF82]">✦</span>
              <span className="text-[#60FFAF]">LED SCREEN MAPPING</span> <span className="text-[#00DF82]">✦</span>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ABOUT & DUAL CAPABILITY                                  */}
        {/* ======================================================== */}
        <section id="about" className="py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-[#E2F8EE]/15 pb-8">
            <div>
              <span className="text-[#00DF82] text-xs font-mono uppercase tracking-[0.3em] block mb-2">{t.capSectionTitle}</span>
              <h2 className="font-kanit font-black uppercase text-3xl sm:text-5xl text-white tracking-tight">
                {t.capHeading}
              </h2>
            </div>
            <p className="text-[#E2F8EE]/60 text-sm max-w-md font-light">
              {t.capDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-[#E2F8EE]/5 font-kanit font-black text-7xl select-none group-hover:text-[#00DF82]/15 transition-colors">
                DEV
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#00DF82]/15 border border-[#00DF82]/30 flex items-center justify-center text-[#00DF82] mb-6 shadow-[0_0_15px_rgba(0,223,130,0.2)]">
                <Code2 size={24} />
              </div>

              <h3 className="font-kanit font-bold text-2xl uppercase text-white mb-3 tracking-wide">
                {t.devPillarTitle}
              </h3>
              <p className="text-[#E2F8EE]/70 font-light text-sm leading-relaxed mb-6">
                {t.devPillarDesc}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E2F8EE]/10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E2F8EE]/50">{lang === 'vi' ? 'Công việc hiện tại' : 'Current Role'}</span>
                  <span className="text-[#00DF82] font-bold">DIGISO (08/2026 — Present)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E2F8EE]/50">Frontend Focus</span>
                  <span className="text-[#60FFAF] font-medium">React 19, Next.js, Tailwind, AI Stream</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E2F8EE]/50">Backend &amp; DB</span>
                  <span className="text-white font-medium">.NET MVC 5, Spring Boot, SQL Server</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-[#E2F8EE]/5 font-kanit font-black text-7xl select-none group-hover:text-[#00DF82]/15 transition-colors">
                STAGE
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#60FFAF]/15 border border-[#60FFAF]/30 flex items-center justify-center text-[#60FFAF] mb-6 shadow-[0_0_15px_rgba(96,255,175,0.2)]">
                <Radio size={24} />
              </div>

              <h3 className="font-kanit font-bold text-2xl uppercase text-white mb-3 tracking-wide">
                {t.stagePillarTitle}
              </h3>
              <p className="text-[#E2F8EE]/70 font-light text-sm leading-relaxed mb-6">
                {t.stagePillarDesc}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E2F8EE]/10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E2F8EE]/50">{lang === 'vi' ? 'Chuyên môn AV' : 'AV Expertise'}</span>
                  <span className="text-[#60FFAF] font-medium">Visual LED Mapping, Mixer, Mic &amp; Stage Flow</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E2F8EE]/50">{lang === 'vi' ? 'Show tiêu biểu' : 'Key Shows'}</span>
                  <span className="text-white font-medium">Vietnam Innovation Summit, AlterCop, EA Summit</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E2F8EE]/50">{lang === 'vi' ? 'Nghệ thuật' : 'Music Talent'}</span>
                  <span className="text-[#00DF82] font-medium">{lang === 'vi' ? 'Nhạc công Organ biểu diễn Talkshow' : 'Organ Instrumental Performance'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FEATURED PROJECTS: 5 LIVE PREVIEWS ALWAYS ON             */}
        {/* ======================================================== */}
        <section id="projects" className="py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-[#E2F8EE]/15 pb-8">
            <div>
              <span className="text-[#00DF82] text-xs font-mono uppercase tracking-[0.3em] block mb-2">{t.projectsSectionTitle}</span>
              <h2 className="font-kanit font-black uppercase text-3xl sm:text-5xl text-white tracking-tight">
                {t.projectsHeading}
              </h2>
            </div>
            <p className="text-[#E2F8EE]/60 text-sm max-w-xs font-light">
              {t.projectsDesc}
            </p>
          </div>

          <div className="space-y-16">
            {projects.personal.map((proj, idx) => (
              <motion.div 
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden group border border-[#E2F8EE]/15 hover:border-[#00DF82]/50 transition-all shadow-2xl"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E2F8EE]/10">
                  <div className="flex items-center gap-3">
                    <span className="font-kanit font-black text-[#00DF82] text-2xl tracking-wider">0{idx + 1}</span>
                    <h3 className="font-kanit font-extrabold text-2xl sm:text-3xl uppercase text-white group-hover:text-[#60FFAF] transition-colors">
                      {proj.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[#00DF82]/15 text-[#60FFAF] text-xs font-mono uppercase tracking-wider hidden sm:inline-block">
                      {proj.subtitle[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E2F8EE]/70">
                      <span className="w-2 h-2 rounded-full bg-[#00DF82] animate-pulse"></span>
                      <span>Live Production</span>
                    </div>
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="shine-btn text-black font-extrabold uppercase tracking-wider text-xs px-5 py-2 rounded-full flex items-center gap-1.5"
                      >
                        <span>{t.openNewTab}</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* 2-Column Layout: Column 1 = Live Preview Iframe ALWAYS ON, Column 2 = Info */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LIVE PREVIEW & INTERACTIVE OS WINDOW - ALWAYS ACTIVE & FLAWLESS! */}
                  <div className="lg:col-span-8 w-full">
                    <ProjectShowcaseWindow key={proj.id} project={proj} lang={lang} />
                  </div>

                  {/* PROJECT DETAILS & METRICS */}
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <span className="text-xs font-mono text-[#60FFAF] uppercase tracking-wider block mb-1">{t.productDesc}</span>
                      <p className="text-white font-medium text-sm leading-relaxed mb-3">
                        {proj.desc[lang]}
                      </p>
                      <p className="text-[#E2F8EE]/70 font-light text-xs leading-relaxed">
                        {proj.detail[lang]}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#60FFAF] uppercase tracking-wider block mb-2">{t.techStackLabel}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((techItem) => (
                          <span key={techItem} className="px-2.5 py-1 rounded-full bg-[#E2F8EE]/10 text-[11px] font-mono text-[#E2F8EE]/80 border border-[#E2F8EE]/10">
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#08140E] border border-[#00DF82]/20 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#E2F8EE]/50 font-mono">{lang === 'vi' ? 'Trạng thái' : 'Status'}</span>
                        <span className="text-[#00DF82] font-mono font-bold">{t.statusActive}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#E2F8EE]/50 font-mono">{lang === 'vi' ? 'Hiệu năng' : 'Performance'}</span>
                        <span className="text-[#60FFAF] font-mono font-bold">{t.perfScore}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#E2F8EE]/50 font-mono">Responsive</span>
                        <span className="text-white font-mono">{t.responsiveAll}</span>
                      </div>
                    </div>

                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#00DF82] hover:text-[#60FFAF] transition-colors pt-1"
                      >
                        <span>{t.visitDirectly} {proj.title}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* LIVE EVENT & STAGE GALLERY (With Filter Tabs)            */}
        {/* ======================================================== */}
        <section id="events" className="py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-[#E2F8EE]/15 pb-8">
            <div>
              <span className="text-[#00DF82] text-xs font-mono uppercase tracking-[0.3em] block mb-2">{t.eventsSectionTitle}</span>
              <h2 className="font-kanit font-black uppercase text-3xl sm:text-5xl text-white tracking-tight">
                {t.eventsHeading}
              </h2>
            </div>
            <p className="text-[#E2F8EE]/60 text-sm max-w-sm font-light">
              {t.eventsDesc}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { id: 'all', label: t.filterAll },
              { id: 'featured', label: t.filterFeatured },
              { id: '2026', label: t.filter2026 },
              { id: '2025', label: t.filter2025 },
              { id: '2024', label: t.filter2024 }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setEventFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  eventFilter === tab.id 
                    ? 'bg-[#00DF82] text-black font-bold shadow-[0_0_15px_rgba(0,223,130,0.4)]' 
                    : 'glass-panel text-[#E2F8EE]/70 hover:text-white hover:border-[#00DF82]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((ev) => (
              <motion.div 
                key={ev.id}
                layout
                whileHover={{ y: -6 }}
                onClick={() => setSelectedEvent(ev)}
                className="glass-panel rounded-2xl overflow-hidden group relative cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={ev.images[0]} 
                    alt={ev.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040806] via-[#040806]/30 to-transparent"></div>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#040806]/80 backdrop-blur-md text-[#60FFAF] font-mono text-[10px] border border-[#00DF82]/40">
                    {ev.role[lang]}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#E2F8EE]/50 uppercase mb-1">
                    <span>{lang === 'vi' ? `Năm ${ev.year}` : `Year ${ev.year}`}</span>
                    <span className="text-[#00DF82] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>{t.viewPhotos}</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                  <h4 className="font-kanit font-bold text-lg text-white group-hover:text-[#60FFAF] transition-colors">
                    {ev.title}
                  </h4>
                  <p className="text-[#E2F8EE]/60 text-xs mt-2 font-light line-clamp-2">
                    {ev.desc[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* EXPERIENCE & TECH STACK                                  */}
        {/* ======================================================== */}
        <section id="experience" className="py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            
            <div>
              <span className="text-[#00DF82] text-xs font-mono uppercase tracking-[0.3em] block mb-2">{t.timelineSectionTitle}</span>
              <h2 className="font-kanit font-black uppercase text-3xl sm:text-4xl text-white tracking-tight mb-8">
                {t.timelineHeading}
              </h2>

              <div className="flex flex-col">
                
                {/* 1. DIGISO OFFICIAL SOFTWARE DEVELOPER (NEW!) */}
                <div className="py-6 border-t border-[#00DF82]/30 grid grid-cols-[85px_1fr] sm:grid-cols-[115px_1fr] gap-4 bg-[#00DF82]/5 p-3 rounded-2xl mb-2">
                  <span className="text-[#00DF82] font-mono text-xs font-bold pt-1">{profile.officialWork.duration[lang]}</span>
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded bg-[#00DF82]/20 text-[#60FFAF] font-mono text-[10px] font-bold uppercase mb-1">
                      {lang === 'vi' ? '● Đang làm việc chính thức' : '● Current Full-time'}
                    </div>
                    <h4 className="font-kanit font-bold uppercase text-lg text-white hover:text-[#60FFAF] transition-colors">
                      {profile.officialWork.title[lang]}
                    </h4>
                    <p className="text-[#00DF82] text-sm font-medium mt-0.5">{profile.officialWork.company}</p>
                    <p className="text-[#E2F8EE]/70 text-xs mt-2 font-light leading-relaxed">{profile.officialWork.note[lang]}</p>
                  </div>
                </div>

                {/* 2. DIGISO INTERNSHIP */}
                <div className="py-6 border-t border-[#E2F8EE]/15 grid grid-cols-[85px_1fr] sm:grid-cols-[115px_1fr] gap-4">
                  <span className="text-[#E2F8EE]/50 font-mono text-xs pt-1">{profile.internship.duration}</span>
                  <div>
                    <h4 className="font-kanit font-bold uppercase text-lg text-white hover:text-[#60FFAF] transition-colors">
                      {profile.internship.title[lang]}
                    </h4>
                    <p className="text-[#E2F8EE]/60 text-sm font-light mt-0.5">{profile.internship.company}</p>
                    <p className="text-[#E2F8EE]/50 text-xs mt-2 font-light">{profile.internship.note[lang]}</p>
                  </div>
                </div>

                {/* 3. UEF TECHNICAL HEAD */}
                <div className="py-6 border-t border-[#E2F8EE]/15 grid grid-cols-[85px_1fr] sm:grid-cols-[115px_1fr] gap-4">
                  <span className="text-[#E2F8EE]/50 font-mono text-xs pt-1">{profile.uefExperience.duration}</span>
                  <div>
                    <h4 className="font-kanit font-bold uppercase text-lg text-white hover:text-[#60FFAF] transition-colors">
                      {profile.uefExperience.title[lang]}
                    </h4>
                    <p className="text-[#E2F8EE]/60 text-sm font-light mt-0.5">{profile.uefExperience.company} · {profile.uefExperience.years[lang]}</p>
                    <p className="text-[#E2F8EE]/50 text-xs mt-2 font-light">
                      {lang === 'vi' 
                        ? 'Chỉ huy kỹ thuật AV cho 20+ sự kiện lớn, đồng thời code nền tảng quản trị CSLUEF.com (React + .NET MVC 5 + SQL Server).' 
                        : 'Directed live AV systems for 20+ mega shows while building CSLUEF.com platform (React + .NET MVC 5 + SQL Server).'}
                    </p>
                  </div>
                </div>

                {/* 4. DEGREE */}
                <div className="py-6 border-t border-b border-[#E2F8EE]/15 grid grid-cols-[85px_1fr] sm:grid-cols-[115px_1fr] gap-4">
                  <span className="text-[#E2F8EE]/50 font-mono text-xs pt-1">2022 — 2026</span>
                  <div>
                    <h4 className="font-kanit font-bold uppercase text-lg text-white hover:text-[#60FFAF] transition-colors">
                      {lang === 'vi' ? `Cử nhân ${profile.major[lang]}` : `Bachelor of ${profile.major[lang]}`}
                    </h4>
                    <p className="text-[#E2F8EE]/60 text-sm font-light mt-0.5">{profile.university[lang]}</p>
                    <p className="text-[#E2F8EE]/50 text-xs mt-2 font-light">
                      {lang === 'vi' 
                        ? 'Hệ chính quy · Nền tảng cấu trúc dữ liệu, giải thuật, lập trình mạng và phát triển phần mềm.' 
                        : 'Formal Degree · Data Structures, Algorithms, Network Programming, and Software Architecture.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#00DF82] text-xs font-mono uppercase tracking-[0.3em] block mb-2">{t.arsenalSectionTitle}</span>
              <h2 className="font-kanit font-black uppercase text-3xl sm:text-4xl text-white tracking-tight mb-8">
                {t.arsenalHeading}
              </h2>

              <div className="space-y-6">
                {techStack.map((group) => (
                  <div key={group.category[lang]}>
                    <h5 className="text-xs uppercase font-mono tracking-widest text-[#E2F8EE]/50 mb-3">{group.category[lang]}</h5>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((techItem) => (
                        <span 
                          key={techItem} 
                          className="px-4 py-1.5 rounded-full border border-[#E2F8EE]/20 text-[#E2F8EE]/90 text-xs font-mono bg-[#E2F8EE]/5 hover:border-[#00DF82] hover:text-[#60FFAF] transition-colors"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* LET'S TALK / CONTACT: ZALO, WHATSAPP, TELEGRAM, EMAIL     */}
        {/* ======================================================== */}
        <section id="contact" className="relative py-28 px-5 sm:px-8 md:px-12 bg-[#040806] overflow-hidden border-t border-[#E2F8EE]/15">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] max-w-[1100px] aspect-[2/1] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(0,223,130,0.25), transparent 70%)' }}></div>

          <div className="relative max-w-6xl mx-auto text-center mb-16">
            <p className="text-[#E2F8EE]/60 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 font-mono">
              {t.contactSectionTitle}
            </p>
            <h2 className="font-kanit font-black uppercase text-white tracking-tighter leading-none cursor-default" style={{ fontSize: 'clamp(2.8rem, 11vw, 140px)' }}>
              {t.contactHeading}
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 1. EMAIL */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00DF82]/60 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00DF82]/10 border border-[#00DF82]/20 flex items-center justify-center text-[#00DF82] mb-3">
                  <Mail size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2F8EE]/40 block mb-1">{t.directEmail}</span>
                <span className="text-white font-medium text-sm sm:text-base select-all whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-[#60FFAF] transition-colors block mb-4" title={profile.social.email}>
                  {profile.social.email}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#E2F8EE]/10">
                <button 
                  onClick={() => handleCopy(profile.social.email, 'email')}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#E2F8EE]/10 hover:bg-[#00DF82] hover:text-black text-xs font-mono transition-all flex items-center justify-center gap-1.5"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-[#00DF82]" /> : <Copy size={14} />}
                  <span>{copiedType === 'email' ? (lang === 'vi' ? 'Đã chép' : 'Copied!') : (lang === 'vi' ? 'Sao chép' : 'Copy')}</span>
                </button>
                <a 
                  href={`mailto:${profile.social.email}`}
                  className="p-2 rounded-lg bg-[#00DF82]/20 hover:bg-[#00DF82] text-[#60FFAF] hover:text-black transition-all"
                  title="Gửi email"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* 2. ZALO */}
            <a 
              href={profile.social.zalo}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00DF82]/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <MessageSquare size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2F8EE]/40 block mb-1">Zalo Chat / Gọi</span>
                <span className="text-white font-medium text-base group-hover:text-[#60FFAF] transition-colors block mb-1">
                  {profile.social.phoneDisplay}
                </span>
                <p className="text-xs text-[#E2F8EE]/60 font-light">
                  {lang === 'vi' ? 'Nhắn tin trực tiếp qua Zalo' : 'Chat directly via Zalo'}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#00DF82] border-t border-[#E2F8EE]/10">
                <span>{lang === 'vi' ? 'Mở Zalo' : 'Open Zalo'}</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* 3. WHATSAPP */}
            <a 
              href={profile.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00DF82]/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Phone size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2F8EE]/40 block mb-1">WhatsApp</span>
                <span className="text-white font-medium text-base group-hover:text-[#60FFAF] transition-colors block mb-1">
                  {profile.social.phoneDisplay}
                </span>
                <p className="text-xs text-[#E2F8EE]/60 font-light">
                  {lang === 'vi' ? 'Chat WhatsApp quốc tế nhanh' : 'Instant International WhatsApp'}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#00DF82] border-t border-[#E2F8EE]/10">
                <span>WhatsApp Web</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* 4. TELEGRAM */}
            <a 
              href={profile.social.telegram}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00DF82]/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                  <Send size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2F8EE]/40 block mb-1">Telegram</span>
                <span className="text-white font-medium text-base group-hover:text-[#60FFAF] transition-colors block mb-1">
                  @hoangphuc_capri
                </span>
                <p className="text-xs text-[#E2F8EE]/60 font-light">
                  {lang === 'vi' ? 'Nhắn tin qua Telegram' : 'Direct Message on Telegram'}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#00DF82] border-t border-[#E2F8EE]/10">
                <span>t.me/hoangphuc_capri</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* 5. GITHUB */}
            <a 
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00DF82]/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3">
                  <Github size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2F8EE]/40 block mb-1">Source Code</span>
                <span className="text-white font-medium text-base group-hover:text-[#60FFAF] transition-colors block mb-1">
                  GitHub Profile
                </span>
                <p className="text-xs text-[#E2F8EE]/60 font-light">
                  hoangphuc1capri
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#00DF82] border-t border-[#E2F8EE]/10">
                <span>View Repositories</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* 6. LINKEDIN */}
            <a 
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00DF82]/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-400 mb-3">
                  <Linkedin size={18} />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2F8EE]/40 block mb-1">Network</span>
                <span className="text-white font-medium text-base group-hover:text-[#60FFAF] transition-colors block mb-1">
                  LinkedIn Profile
                </span>
                <p className="text-xs text-[#E2F8EE]/60 font-light">
                  sennahoangphuc0501
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#00DF82] border-t border-[#E2F8EE]/10">
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

          </div>

          <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#E2F8EE]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#E2F8EE]/40 uppercase tracking-widest">
            <span>{t.copyright}</span>
            <span>{t.copyrightRole}</span>
          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* CV MODAL A4 PREVIEW (Bilingual Support)                  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isCvOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCvOpen(false)}
            className="fixed inset-0 z-50 bg-[#040806]/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#040806] border border-[#E2F8EE]/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-4 bg-[#040806] border-b border-[#E2F8EE]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-[#00DF82]"></span>
                  <span className="font-kanit font-bold text-sm tracking-wider uppercase text-white ml-2">
                    {t.cvModalTitle}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a 
                    href="/CV_HoangPhuc.html" 
                    target="_blank" 
                    rel="noreferrer"
                    className="shine-btn text-black text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <Printer size={14} />
                    <span>{t.printCv}</span>
                  </a>

                  <button 
                    onClick={() => setIsCvOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b-2 border-slate-900 pb-8">
                  <div className="flex items-center gap-5">
                    <img 
                      src="/avatar.png" 
                      alt="Hoàng Phúc" 
                      className="w-16 h-16 rounded-2xl object-cover border border-slate-300"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-600 block mb-1">
                        Curriculum Vitae · 2026
                      </span>
                      <h1 className="font-kanit font-black text-4xl sm:text-5xl uppercase tracking-tight text-slate-900">
                        {profile.name}
                      </h1>
                      <p className="font-medium text-slate-600 text-base mt-1">
                        {profile.role[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs space-y-1 sm:text-right font-mono text-slate-600">
                    <div><strong>Email:</strong> {profile.social.email}</div>
                    <div><strong>Phone:</strong> {profile.social.phoneDisplay}</div>
                    <div><strong>Portfolio:</strong> {profile.social.portfolio}</div>
                    <div><strong>GitHub:</strong> {profile.social.github}</div>
                    <div><strong>Location:</strong> TP. Hồ Chí Minh, Việt Nam</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-12 gap-8 pt-8">
                  <div className="sm:col-span-4 space-y-8 border-b sm:border-b-0 sm:border-r border-slate-200 pb-8 sm:pb-0 sm:pr-6">
                    <div>
                      <h3 className="font-kanit font-black uppercase text-xs tracking-widest text-emerald-600 mb-2">{t.summaryHeading}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {profile.bio[lang]}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-kanit font-black uppercase text-xs tracking-widest text-emerald-600 mb-3">{t.progSkillsHeading}</h3>
                      <div className="space-y-2 text-xs">
                        {techStack.map(g => (
                          <div key={g.category[lang]}>
                            <span className="font-bold text-slate-800 block">{g.category[lang]}:</span>
                            <span className="text-slate-600">{g.items.join(', ')}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-kanit font-black uppercase text-xs tracking-widest text-emerald-600 mb-3">{t.stageSkillsHeading}</h3>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        <div>• Visual LED Mapping &amp; Screen Control</div>
                        <div>• Sound Mixer &amp; Wireless Mics</div>
                        <div>• Lighting Cue &amp; Stage Flow</div>
                        <div>• Musical Instrument: Organ</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-kanit font-black uppercase text-xs tracking-widest text-emerald-600 mb-2">{t.eduHeading}</h3>
                      <div className="text-xs">
                        <span className="font-bold text-slate-800 block">{profile.university[lang]}</span>
                        <span className="text-slate-600 block">{lang === 'vi' ? `Cử nhân ${profile.major[lang]}` : `Bachelor of ${profile.major[lang]}`}</span>
                        <span className="text-slate-400 font-mono block mt-0.5">2022 — 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-8 space-y-8 sm:pl-2">
                    <div>
                      <h3 className="font-kanit font-black uppercase text-xs tracking-widest text-emerald-600 mb-4 pb-1 border-b border-slate-200">
                        {t.workExpHeading}
                      </h3>
                      
                      {/* DIGISO OFFICIAL */}
                      <div className="mb-5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-sm text-slate-900 uppercase">{profile.officialWork.title[lang]}</h4>
                          <span className="font-mono text-[11px] text-emerald-700 font-bold">{profile.officialWork.duration[lang]}</span>
                        </div>
                        <div className="text-xs font-bold text-emerald-700 mb-1.5">{profile.officialWork.company}</div>
                        <p className="text-xs text-slate-700 leading-relaxed">{profile.officialWork.note[lang]}</p>
                      </div>

                      {/* DIGISO INTERN */}
                      <div className="mb-5">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-sm text-slate-900 uppercase">{profile.internship.title[lang]}</h4>
                          <span className="font-mono text-[11px] text-slate-400">{profile.internship.duration}</span>
                        </div>
                        <div className="text-xs font-medium text-emerald-600 mb-1.5">{profile.internship.company}</div>
                        <p className="text-xs text-slate-600">{profile.internship.note[lang]}</p>
                      </div>

                      {/* UEF */}
                      <div>
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-sm text-slate-900 uppercase">{profile.uefExperience.title[lang]}</h4>
                          <span className="font-mono text-[11px] text-slate-400">{profile.uefExperience.duration} ({profile.uefExperience.years[lang]})</span>
                        </div>
                        <div className="text-xs font-medium text-emerald-600 mb-1.5">{profile.uefExperience.company}</div>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          {profile.uefExperience.roles.map(r => (
                            <li key={r.name[lang]}><strong>{r.name[lang]}:</strong> {r.tasks[lang]}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-kanit font-black uppercase text-xs tracking-widest text-emerald-600 mb-4 pb-1 border-b border-slate-200">
                        {t.featuredProjHeading}
                      </h3>
                      
                      <div className="space-y-3">
                        {projects.personal.map(p => (
                          <div key={p.title} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex justify-between items-baseline">
                              <span className="font-bold text-xs uppercase text-slate-900">{p.title}</span>
                              <span className="text-[10px] font-mono text-emerald-700 font-bold">{p.tech.slice(0, 3).join(' · ')}</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1">{p.desc[lang]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* EVENT DETAIL LIGHTBOX MODAL                              */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 bg-[#040806]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-panel border border-[#00DF82]/40 rounded-3xl overflow-hidden p-6 sm:p-8 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#00DF82]/20 text-[#60FFAF] font-mono text-xs uppercase">
                  {selectedEvent.role[lang]}
                </span>
                <span className="text-xs font-mono text-[#E2F8EE]/50">{selectedEvent.year}</span>
              </div>

              <h3 className="font-kanit font-black text-2xl sm:text-3xl text-white mb-3">
                {selectedEvent.title}
              </h3>
              
              <p className="text-[#E2F8EE]/80 text-sm font-light leading-relaxed mb-6">
                {selectedEvent.desc[lang]}
              </p>

              <div className="grid grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {selectedEvent.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-[#E2F8EE]/20 aspect-video">
                    <img src={img} alt={`${selectedEvent.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
