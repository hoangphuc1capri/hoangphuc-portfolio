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
  Music,
  Music2
} from 'lucide-react';
import { profile } from '../data';

const EVENT_INFO = {
  date: '2026-08-28T15:00:00+07:00',
  dateLabel: 'Thứ Sáu, 28 Tháng 8, 2026',
  timeLabel: '15:00 (3 giờ chiều)',
  venueShort: 'Nhà Hát Hòa Bình TP.HCM',
  venueFull: 'Nhà Hát Hòa Bình TP.HCM',
  venueAddress: 'Số 240 đường 3 Tháng 2, Phường 12, Quận 10, TP.HCM',
  rsvpFormUrl: 'https://forms.gle/your-google-form-id',
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
    <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl px-3 py-4 md:px-5 md:py-5 min-w-[70px] md:min-w-[90px] shadow-lg shadow-blue-500/5">
      <span className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mt-1">
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
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function Invitation({ guestName = 'Quý khách' }) {
  const countdown = useCountdown(EVENT_INFO.date);
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-600 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
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
            musicPlaying={musicPlaying}
            toggleMusic={() => setMusicPlaying((v) => !v)}
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-100 shadow-sm mb-8"
        >
          <Sparkles size={14} className="text-rose-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500">
            Thiệp mời lễ tốt nghiệp
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1] mb-4"
        >
          Bạn có một lời mời
          <br />
          <span className="bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
            đặc biệt!
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-500 font-medium text-base md:text-lg mb-10"
        >
          Gửi đến <span className="font-bold text-slate-900">{guestName}</span> — mình trân trọng mời bạn đến chung vui trong ngày lễ tốt nghiệp của{' '}
          <span className="font-bold text-slate-900">{profile.name}</span>.
        </motion.p>

        {/* Envelope Illustration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative mx-auto w-72 h-48 md:w-96 md:h-60 mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 rounded-3xl shadow-2xl shadow-rose-500/30" />
          <div className="absolute inset-3 bg-gradient-to-br from-rose-300 to-rose-500 rounded-2xl flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl"
            >
              <Heart size={36} className="text-rose-500 fill-rose-500" />
            </motion.div>
          </div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-700/80 rounded-t-xl" />
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-slate-900/30 hover:bg-rose-600 transition-colors"
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

function InvitationScreen({ guestName, countdown, musicPlaying, toggleMusic }) {
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm">
          <Sparkles size={14} className="text-blue-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
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
        <p className="text-slate-500 font-medium text-base md:text-lg mb-3">
          Kính gửi <span className="font-bold text-slate-900">{guestName}</span>,
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-slate-900 mb-4">
          Lễ Tốt Nghiệp
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 bg-clip-text text-transparent">
            2026
          </span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
          Sau 4 năm ròng rã với bao nỗ lực và cố gắng, hành trình sinh viên của{' '}
          <span className="font-bold text-slate-900">{profile.name}</span> sắp đi đến đích đầu tiên.
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
        <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200 via-indigo-200 to-rose-200 rounded-[3rem] blur-2xl opacity-60" />
        <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl">
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-100 to-rose-100">
            <img
              src="/avatar.png"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Graduate</p>
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
          accent="from-blue-500 to-indigo-500"
        />
        <InfoCard
          icon={<Clock size={22} />}
          label="Thời gian"
          value={EVENT_INFO.timeLabel}
          accent="from-indigo-500 to-purple-500"
        />
        <InfoCard
          icon={<MapPin size={22} />}
          label="Địa điểm"
          value={EVENT_INFO.venueShort}
          href={EVENT_INFO.mapUrl}
          accent="from-rose-500 to-pink-500"
        />
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-[2rem] p-6 md:p-8 mb-12 shadow-xl shadow-blue-500/5 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 mb-5">
          <Gift size={12} className="text-rose-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500">
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
        className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2rem] p-8 md:p-10 mb-12 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-2">Địa điểm tổ chức</p>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition shrink-0 w-fit"
          >
            <MapPin size={16} />
            Mở Google Maps
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>

      {/* RSVP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15 }}
        className="text-center bg-gradient-to-br from-rose-50 via-white to-blue-50 border border-rose-100 rounded-[2rem] p-8 md:p-12 mb-12 shadow-xl"
      >
        <Heart size={36} className="text-rose-500 fill-rose-500 mx-auto mb-4" />
        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
          Bạn sẽ đến chứ?
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed font-medium mb-8">
          Mình rất mong được gặp bạn tại buổi lễ. Hãy xác nhận tham dự để mình sắp xếp đón tiếp chu đáo nhất nhé!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={EVENT_INFO.rsvpFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-rose-600 transition shadow-xl shadow-slate-900/20"
          >
            <Mail size={18} />
            Xác nhận tham dự
            <ExternalLink size={14} />
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition shadow-sm"
          >
            <Mail size={18} />
            Gửi email cho mình
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="text-center pt-8 border-t border-slate-200"
      >
        <p className="text-slate-500 italic mb-2 font-medium">
          "Mỗi hành trình đều đáng trân trọng — nhất là khi có bạn đồng hành."
        </p>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4">
          © 2026 {profile.name.toUpperCase()} • UEF GRADUATE
        </p>
        <button
          onClick={toggleMusic}
          className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-blue-500 transition"
        >
          {musicPlaying ? <Music2 size={14} /> : <Music size={14} />}
          {musicPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền (sắp có)'}
        </button>
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
      className="group bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-5 md:p-6 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center mb-4 shadow-md`}>
        {icon}
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">
        {label}
      </p>
      <p className="font-black text-slate-900 text-base md:text-lg leading-snug">
        {value}
      </p>
      {href && (
        <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-blue-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
          Mở bản đồ <ExternalLink size={10} />
        </p>
      )}
    </Wrapper>
  );
}
