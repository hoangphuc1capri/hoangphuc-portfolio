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

// 🎨 Flat UI 2.0 — bảng màu
const COLORS = {
  bg: '#0a1f44',           // navy đậm phẳng
  surface: '#102a5e',      // surface (không blur, không opacity)
  surfaceAlt: '#1a3a7a',   // surface phụ
  border: '#f59e0b',       // amber border
  accent: '#f59e0b',       // amber
  text: '#ffffff',
  textMuted: '#94a3b8',
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
    <div
      className="flex flex-col items-center justify-center rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[80px] md:min-w-[100px]"
      style={{
        backgroundColor: COLORS.surface,
        border: `2px solid ${COLORS.accent}`,
      }}
    >
      <span
        className="text-3xl md:text-5xl font-black tabular-nums leading-none"
        style={{ color: COLORS.accent }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span
        className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-2"
        style={{ color: COLORS.accent }}
      >
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
          fill="#f59e0b"
        />
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
    <div
      className="min-h-screen text-white font-sans relative overflow-x-hidden"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* Petals */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <FloatingPetal
            key={i}
            delay={i * 1.5}
            duration={14 + (i % 4) * 2}
            left={(i * 10) % 100}
            size={18 + (i % 3) * 6}
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
          className="inline-flex items-center gap-2 px-4 py-2 mb-8"
          style={{
            backgroundColor: COLORS.surface,
            border: `2px solid ${COLORS.accent}`,
            borderRadius: '999px',
          }}
        >
          <Sparkles size={14} style={{ color: COLORS.accent }} />
          <span
            className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.accent }}
          >
            Thiệp mời lễ tốt nghiệp
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-4xl md:text-6xl font-black tracking-tighter leading-[1] mb-6"
          style={{ color: COLORS.text }}
        >
          Bạn có một lời mời
          <br />
          <span style={{ color: COLORS.accent }}>đặc biệt!</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-medium text-base md:text-lg mb-12"
          style={{ color: COLORS.textMuted }}
        >
          Gửi đến{' '}
          <span className="font-bold" style={{ color: COLORS.accent }}>
            {guestName}
          </span>{' '}
          — mình trân trọng mời bạn đến chung vui trong ngày lễ tốt nghiệp của{' '}
          <span className="font-bold" style={{ color: COLORS.text }}>
            {profile.name}
          </span>
          .
        </motion.p>

        {/* Envelope Illustration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative mx-auto w-72 h-48 md:w-96 md:h-60 mb-12"
        >
          {/* Phong bì ngoài (flat, solid color) */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundColor: COLORS.accent,
              border: `4px solid ${COLORS.accent}`,
            }}
          />
          {/* Ruột phong bì */}
          <div
            className="absolute inset-2 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: '#fbbf24' }}
          >
            <div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: COLORS.bg }}
            >
              <Heart size={36} style={{ color: COLORS.accent, fill: COLORS.accent }} />
            </div>
          </div>
          {/* Nắp phong bì (flat top) */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 rounded-t-lg"
            style={{ backgroundColor: '#d97706' }}
          />
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm"
          style={{
            backgroundColor: COLORS.accent,
            color: COLORS.bg,
            border: `2px solid ${COLORS.accent}`,
          }}
        >
          <Mail size={18} />
          Mở thiệp mời
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2"
          style={{ color: COLORS.textMuted }}
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
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            backgroundColor: COLORS.surface,
            border: `2px solid ${COLORS.accent}`,
          }}
        >
          <Sparkles size={14} style={{ color: COLORS.accent }} />
          <span
            className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.accent }}
          >
            Trân trọng
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
        <p
          className="font-medium text-base md:text-lg mb-4"
          style={{ color: COLORS.textMuted }}
        >
          Thân mời{' '}
          <span className="font-bold" style={{ color: COLORS.accent }}>
            {guestName}
          </span>
          ,
        </p>
        <h1
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6"
          style={{ color: COLORS.text }}
        >
          Lễ Tốt Nghiệp
          <br />
          <span style={{ color: COLORS.accent }}>2026</span>
        </h1>
        <p
          className="max-w-xl mx-auto leading-relaxed font-medium"
          style={{ color: COLORS.textMuted }}
        >
          Sau 4 năm ròng rã với bao nỗ lực và cố gắng, hành trình sinh viên của{' '}
          <span className="font-bold" style={{ color: COLORS.text }}>
            {profile.name}
          </span>{' '}
          sắp đi đến đích đầu tiên. Mình thật lòng muốn được chia sẻ khoảnh khắc trọng đại
          này cùng bạn — người đã luôn đồng hành.
        </p>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative mx-auto w-full max-w-md md:max-w-lg mb-14"
      >
        {/* Khung flat (không glow, không blur) */}
        <div
          className="relative p-3 rounded-2xl"
          style={{
            backgroundColor: COLORS.surface,
            border: `3px solid ${COLORS.accent}`,
          }}
        >
          <div
            className="aspect-[3/4] rounded-xl overflow-hidden"
            style={{ backgroundColor: COLORS.surfaceAlt }}
          >
            <img
              src="/avatar.png"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Tag Graduate */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl"
            style={{
              backgroundColor: COLORS.accent,
              border: `3px solid ${COLORS.accent}`,
            }}
          >
            <p
              className="text-[10px] font-black uppercase tracking-[0.3em] mb-1"
              style={{ color: COLORS.bg }}
            >
              Graduate
            </p>
            <p
              className="font-black text-base md:text-lg whitespace-nowrap"
              style={{ color: COLORS.bg }}
            >
              {profile.name}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Event info cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12"
      >
        <InfoCard
          icon={<Calendar size={22} />}
          label="Ngày"
          value={EVENT_INFO.dateLabel}
          iconBg="#f59e0b"
        />
        <InfoCard
          icon={<Clock size={22} />}
          label="Thời gian"
          value={EVENT_INFO.timeLabel}
          iconBg="#fbbf24"
        />
        <InfoCard
          icon={<MapPin size={22} />}
          label="Địa điểm"
          value={EVENT_INFO.venueShort}
          href={EVENT_INFO.mapUrl}
          iconBg="#d97706"
        />
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="rounded-2xl p-6 md:p-8 mb-12 text-center"
        style={{
          backgroundColor: COLORS.surface,
          border: `2px solid ${COLORS.accent}`,
        }}
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
          style={{
            backgroundColor: COLORS.bg,
            border: `2px solid ${COLORS.accent}`,
          }}
        >
          <Gift size={12} style={{ color: COLORS.accent }} />
          <span
            className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.accent }}
          >
            Đếm ngược đến ngày vui
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
          <CountdownBlock value={countdown.days} label="Ngày" />
          <CountdownBlock value={countdown.hours} label="Giờ" />
          <CountdownBlock value={countdown.minutes} label="Phút" />
          <CountdownBlock value={countdown.seconds} label="Giây" />
        </div>
        <p
          className="mt-6 text-xs md:text-sm font-medium"
          style={{ color: COLORS.textMuted }}
        >
          {countdown.finished
            ? 'Đã đến ngày vui! Hẹn gặp bạn tại lễ tốt nghiệp.'
            : 'Sự kiện sẽ diễn ra trong ít ngày nữa — hẹn gặp bạn!'}
        </p>
      </motion.div>

      {/* Venue detail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="rounded-2xl p-8 md:p-10 mb-12"
        style={{
          backgroundColor: COLORS.surface,
          border: `2px solid ${COLORS.accent}`,
          color: COLORS.text,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p
              className="text-[10px] font-black uppercase tracking-[0.3em] mb-2"
              style={{ color: COLORS.accent }}
            >
              Địa điểm tổ chức
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
              {EVENT_INFO.venueFull}
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: COLORS.textMuted }}
            >
              {EVENT_INFO.venueAddress}
            </p>
          </div>
          <a
            href={EVENT_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black"
            style={{
              backgroundColor: COLORS.accent,
              color: COLORS.bg,
              border: `2px solid ${COLORS.accent}`,
            }}
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
        className="text-center rounded-2xl p-8 md:p-12 mb-12"
        style={{
          backgroundColor: COLORS.surface,
          border: `2px solid ${COLORS.accent}`,
        }}
      >
        <Heart size={40} style={{ color: COLORS.accent, fill: COLORS.accent }} className="mx-auto mb-5" />
        <h2
          className="text-2xl md:text-4xl font-black tracking-tight mb-3"
          style={{ color: COLORS.text }}
        >
          Hẹn gặp bạn ngày 28/8 nhé!
        </h2>
        <p
          className="max-w-xl mx-auto leading-relaxed font-medium mb-8"
          style={{ color: COLORS.textMuted }}
        >
          Mình rất mong được gặp bạn tại buổi lễ. Nếu có bất cứ điều gì cần hỗ trợ — cứ thoải mái
          liên hệ với mình qua các kênh dưới đây nhé!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black"
            style={{
              backgroundColor: COLORS.accent,
              color: COLORS.bg,
              border: `2px solid ${COLORS.accent}`,
            }}
          >
            <Mail size={18} />
            {profile.social.email}
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold"
            style={{
              backgroundColor: COLORS.bg,
              color: COLORS.text,
              border: `2px solid ${COLORS.accent}`,
            }}
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
        className="text-center pt-8"
        style={{ borderTop: `2px solid ${COLORS.accent}` }}
      >
        <p
          className="italic mb-2 font-medium"
          style={{ color: COLORS.textMuted }}
        >
          "Mỗi hành trình đều đáng trân trọng — nhất là khi có bạn đồng hành."
        </p>
        <p
          className="text-[10px] font-black uppercase tracking-[0.3em] mt-4"
          style={{ color: COLORS.accent }}
        >
          © 2026 {profile.name.toUpperCase()} • UEF GRADUATE
        </p>
      </motion.footer>
    </motion.div>
  );
}

function InfoCard({ icon, label, value, href, iconBg }) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block rounded-xl p-5 md:p-6"
      style={{
        backgroundColor: COLORS.surface,
        border: `2px solid ${COLORS.accent}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: iconBg, color: COLORS.bg }}
      >
        {icon}
      </div>
      <p
        className="text-[10px] font-black uppercase tracking-[0.3em] mb-1"
        style={{ color: COLORS.accent }}
      >
        {label}
      </p>
      <p
        className="font-black text-base md:text-lg leading-snug"
        style={{ color: COLORS.text }}
      >
        {value}
      </p>
      {href && (
        <p
          className="mt-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1"
          style={{ color: COLORS.accent }}
        >
          Mở bản đồ <ExternalLink size={10} />
        </p>
      )}
    </Wrapper>
  );
}

/* ---------------- END ---------------- */
