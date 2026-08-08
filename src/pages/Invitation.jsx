import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  Sparkles,
  Gift,
  ChevronDown,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { profile } from '../data';

const EVENT_INFO = {
  date: '2026-08-28T15:00:00+07:00',
  dateLabel: 'Thứ Sáu, 28 Tháng 8, 2026',
  timeLabel: '15:00 (3 giờ chiều)',
  venueShort: 'Nhà Hát Hòa Bình TP.HCM',
  venueFull: 'Nhà Hát Hòa Bình TP.HCM',
  venueAddress: 'Số 240 đường 3 Tháng 2, Phường 12, Quận 10, TP.HCM',
  mapUrl: 'https://maps.google.com/?q=Nh%C3%A0+h%C3%A1t+H%C3%B2a+B%C3%ACnh+TP+HCM',
};

function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, finished: diff === 0 };
}

function CountdownBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/60 to-blue-950/60 backdrop-blur-md border border-amber-400/20 rounded-2xl px-3 py-4 md:px-5 md:py-5 min-w-[70px] md:min-w-[90px] shadow-lg shadow-amber-500/10">
      <span className="text-2xl md:text-4xl font-black tracking-tighter text-amber-400 tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-amber-300/80 mt-1">
        {label}
      </span>
    </div>
  );
}

function FloatingPetal({ delay, duration, left, size }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${left}%`, top: '-40px' }}
      initial={{ y: -40, opacity: 0, rotate: 0 }}
      animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: 360 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z"
          fill="url(#petal-gradient)"
        />
        <defs>
          <linearGradient id="petal-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function Invitation({ guestName = 'Quý khách' }) {
  const countdown = useCountdown(EVENT_INFO.date);
  const [opened, setOpened] = useState(false);

  // Khi URL có query ?open=1 thì auto mở thiệp (tiện cho việc preview / share)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    if (params.get('open') === '1') setOpened(true);
  }, []);

  const formattedGuestName = useMemo(() => {
    const trimmed = (guestName || '').trim();
    if (!trimmed) return 'Quý khách';
    return trimmed;
  }, [guestName]);

  // Cập nhật tiêu đề trang cho thiệp mời
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const prevTitle = document.title;
    document.title = `Thiệp mời tốt nghiệp — ${profile.name} → ${formattedGuestName}`;
    return () => {
      document.title = prevTitle;
    };
  }, [formattedGuestName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f44] via-[#0d2552] to-[#0a1f44] text-slate-100 font-sans selection:bg-amber-400 selection:text-amber-900 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
      </div>

      {/* Petals */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingPetal
            key={i}
            delay={i * 1.5}
            duration={14 + (i % 4) * 2}
            left={(i * 8.5) % 100}
            size={20 + (i % 3) * 6}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!opened ? (
          <EnvelopeScreen key="envelope" guestName={formattedGuestName} onOpen={() => setOpened(true)} />
        ) : (
          <InvitationScreen
            key="invitation"
            guestName={formattedGuestName}
            countdown={countdown}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- ENVELOPE / PHONG BÌ THIỆP ---------------- */

function EnvelopeScreen({ guestName, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 shadow-sm mb-8"
        >
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
            Thiệp mời lễ tốt nghiệp
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1] mb-4"
        >
          Bạn có một lời mời
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            đặc biệt!
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-300 font-medium text-base md:text-lg mb-10"
        >
          Gửi đến <span className="font-bold text-amber-300">{guestName}</span> — mình trân trọng mời bạn đến chung vui trong ngày lễ tốt nghiệp của{' '}
          <span className="font-bold text-white">{profile.name}</span>.
        </motion.p>

        {/* Envelope Illustration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative mx-auto w-72 h-48 md:w-96 md:h-60 mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 rounded-3xl shadow-2xl shadow-amber-500/40" />
          <div className="absolute inset-3 bg-gradient-to-br from-amber-300 to-amber-600 rounded-2xl flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0a1f44] flex items-center justify-center shadow-xl"
            >
              <Heart size={36} className="text-amber-400 fill-amber-400" />
            </motion.div>
          </div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-700/80 rounded-t-xl" />
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1f44] rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-amber-500/30 hover:from-amber-300 hover:to-amber-400 transition-colors"
        >
          <Mail size={18} />
          Mở thiệp mời
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center justify-center gap-2"
        >
          <ChevronDown size={14} className="animate-bounce" />
          Nhấn để mở thiệp
        </motion.p>
      </div>
    </motion.div>
  );
}

/* ---------------- INVITATION SCREEN ---------------- */

function InvitationScreen({ guestName, countdown }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Top Tag */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 shadow-sm">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
            Trân trọng kính mời
          </span>
        </div>
      </motion.div>

      {/* Header: Lời mời */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-center mb-12"
      >
        <p className="text-slate-300 font-medium text-base md:text-lg mb-3">
          Kính gửi <span className="font-bold text-amber-300">{guestName}</span>,
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white mb-4">
          Lễ Tốt Nghiệp
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            2026
          </span>
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
          Sau 4 năm ròng rã với bao nỗ lực và cố gắng, hành trình sinh viên của{' '}
          <span className="font-bold text-white">{profile.name}</span> sắp đi đến đích đầu tiên.
          Mình thật lòng muốn được chia sẻ khoảnh khắc trọng đại này cùng bạn — người đã luôn đồng hành.
        </p>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative mx-auto w-full max-w-md md:max-w-lg mb-14"
      >
        <div className="absolute -inset-6 bg-gradient-to-tr from-amber-400/30 via-blue-500/20 to-amber-400/20 rounded-[3rem] blur-2xl opacity-80" />
        <div className="relative bg-gradient-to-br from-amber-400/20 to-amber-600/20 p-3 rounded-[2.5rem] shadow-2xl border border-amber-400/30">
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-900 to-amber-900/40">
            <img
              src="/avatar.png"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1f44] px-6 py-3 rounded-2xl shadow-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0a1f44]/70 mb-1">Graduate</p>
            <p className="font-black text-base md:text-lg whitespace-nowrap">{profile.name}</p>
          </div>
        </div>
      </motion.div>

      {/* Event info cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12"
      >
        <InfoCard
          icon={<Calendar size={22} />}
          label="Ngày"
          value={EVENT_INFO.dateLabel}
          accent="from-amber-400 to-amber-600"
        />
        <InfoCard
          icon={<Clock size={22} />}
          label="Thời gian"
          value={EVENT_INFO.timeLabel}
          accent="from-blue-500 to-indigo-600"
        />
        <InfoCard
          icon={<MapPin size={22} />}
          label="Địa điểm"
          value={EVENT_INFO.venueShort}
          href={EVENT_INFO.mapUrl}
          accent="from-amber-500 to-yellow-600"
        />
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-md border border-amber-400/20 rounded-[2rem] p-6 md:p-8 mb-12 shadow-2xl shadow-amber-500/10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 mb-5">
          <Gift size={12} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
            Đếm ngược đến ngày vui
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
          <CountdownBlock value={countdown.days} label="Ngày" />
          <CountdownBlock value={countdown.hours} label="Giờ" />
          <CountdownBlock value={countdown.minutes} label="Phút" />
          <CountdownBlock value={countdown.seconds} label="Giây" />
        </div>
        <p className="mt-5 text-xs md:text-sm text-slate-400 font-medium">
          {countdown.finished ? 'Đã đến ngày vui! Hẹn gặp bạn tại lễ tốt nghiệp.' : 'Sự kiện sẽ diễn ra trong ít ngày nữa — hẹn gặp bạn!'}
        </p>
      </motion.div>

      {/* Venue detail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-br from-[#0d2552] to-[#0a1f44] border border-amber-400/20 text-white rounded-[2rem] p-8 md:p-10 mb-12 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 mb-2">Địa điểm tổ chức</p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
              {EVENT_INFO.venueFull}
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {EVENT_INFO.venueAddress}
            </p>
          </div>
          <a
            href={EVENT_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1f44] rounded-xl font-black hover:from-amber-300 hover:to-amber-400 transition shrink-0 w-fit"
          >
            <MapPin size={16} />
            Mở Google Maps
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>

      {/* Liên hệ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15 }}
        className="text-center bg-gradient-to-br from-amber-400/10 via-blue-900/30 to-amber-400/5 border border-amber-400/30 rounded-[2rem] p-8 md:p-12 mb-12 shadow-2xl"
      >
        <Heart size={36} className="text-amber-400 fill-amber-400 mx-auto mb-4" />
        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-3">
          Hẹn gặp bạn ngày 28/8 nhé!
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto leading-relaxed font-medium mb-8">
          Mình rất mong được gặp bạn tại buổi lễ. Nếu có bất cứ điều gì cần hỗ trợ — cứ thoải mái liên hệ với mình qua các kênh dưới đây nhé!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1f44] rounded-2xl font-black hover:from-amber-300 hover:to-amber-400 transition shadow-xl shadow-amber-500/30"
          >
            <Mail size={18} />
            {profile.social.email}
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-amber-400/30 text-white rounded-2xl font-bold hover:bg-white/20 transition"
          >
            <ExternalLink size={18} />
            Ghé Portfolio mình
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="text-center pt-8 border-t border-amber-400/20"
      >
        <p className="text-slate-300 italic mb-2 font-medium">
          "Mỗi hành trình đều đáng trân trọng — nhất là khi có bạn đồng hành."
        </p>
        <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4">
          © 2026 {profile.name.toUpperCase()} • UEF GRADUATE
        </p>
      </motion.footer>
    </motion.div>
  );
}

function InfoCard({ icon, label, value, href, accent }) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-md border border-amber-400/20 rounded-2xl p-5 md:p-6 shadow-lg shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 hover:border-amber-400/50 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} text-[#0a1f44] flex items-center justify-center mb-4 shadow-md`}>
        {icon}
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-300/80 mb-1">
        {label}
      </p>
      <p className="font-black text-white text-base md:text-lg leading-snug">
        {value}
      </p>
      {href && (
        <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
          Mở bản đồ <ExternalLink size={10} />
        </p>
      )}
    </Wrapper>
  );
}

/* ---------------- END ---------------- */
