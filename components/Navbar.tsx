
import React, { useState, useEffect, useRef } from 'react';

// Replace with your WeChat Official Account deep link if available
// e.g. 'weixin://dl/officialaccounts?username=gh_XXXXXXXX'
const WECHAT_LINK = 'weixin://';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const startLongPress = () => {
    longPressTimer.current = setTimeout(() => {
      window.location.href = WECHAT_LINK;
    }, 600);
  };

  const cancelLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const navLinks = [
    { id: 'courses',     label: '探索课程' },
    { id: 'facility',    label: '实验室设备' },
    { id: 'exhibition',  label: '前期作品展' },
    { id: 'instructors', label: '导师团队' },
    { id: 'alumni',      label: '全球校友' },
  ];

  const QrCard = () => (
    <div className="bg-white p-6 shadow-2xl border border-stone-100 rounded-[2rem] w-64 text-center ring-1 ring-black/5">
      <div className="w-full aspect-square bg-stone-50 mb-4 rounded-2xl overflow-hidden border border-stone-100 flex items-center justify-center relative">
        <img
          src="https://i.imgur.com/48FcTsA.jpg"
          alt="WeChat QR Code"
          className="w-full h-full object-cover p-2 select-none"
          draggable={false}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          /* Long press on mobile opens WeChat */
          onTouchStart={startLongPress}
          onTouchEnd={cancelLongPress}
          onTouchMove={cancelLongPress}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-600 pointer-events-none"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-600 pointer-events-none"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-600 pointer-events-none"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-600 pointer-events-none"></div>
      </div>
      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-[0.2em] mb-1">WeChat Official</h4>
      <p className="text-[9px] text-stone-400 uppercase tracking-widest hidden md:block">扫码咨询课程详情</p>
      <p className="text-[9px] text-stone-400 tracking-widest md:hidden">长按打开微信</p>
      <div className="mt-4 pt-4 border-t border-stone-50 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Consultant Online</span>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`fixed w-full z-[80] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-4 border-b border-stone-100'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-sm font-jp">麵</div>
            <span className="text-xl font-bold tracking-[0.2em] font-jp text-stone-900">RAMEN LAB</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-stone-600">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-red-600 transition-colors uppercase">{l.label}</button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-bold tracking-widest text-stone-400">CONTACT</span>
              <span className="text-sm font-bold text-stone-900">18038739931</span>
            </div>

            {/* WeChat QR — hover on desktop, tap on mobile */}
            <div className="group relative">
              <button
                className="w-10 h-10 bg-white border border-stone-200 rounded-xl shadow-sm flex items-center justify-center text-stone-400 hover:text-red-600 hover:border-red-600 transition-all active:scale-95"
                onClick={() => setQrOpen(o => !o)}
                aria-label="WeChat QR code"
              >
                <i className="fab fa-weixin text-xl"></i>
              </button>

              {/* Popup: visible on desktop hover OR when qrOpen (mobile tap) */}
              <div className={`absolute top-full right-0 mt-4 transition-all duration-300 z-[90]
                ${qrOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'}
                group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0`}
              >
                <QrCard />
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-stone-100 shadow-[-2px_-2px_5px_rgba(0,0,0,0.02)]"></div>
              </div>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden w-10 h-10 bg-white border border-stone-200 rounded-xl shadow-sm flex items-center justify-center text-stone-600 hover:text-red-600 hover:border-red-600 transition-all active:scale-95"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <i className="fas fa-times text-base"></i>
                : <i className="fas fa-bars text-base"></i>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop to close QR popup on mobile tap-outside */}
      {qrOpen && (
        <div className="fixed inset-0 z-[79]" onClick={() => setQrOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[75] lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-xs font-jp">麵</div>
              <span className="font-bold tracking-[0.2em] font-jp text-stone-900 text-sm">RAMEN LAB</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-stone-400 hover:text-red-600 transition-colors">
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left py-4 px-4 rounded-xl text-sm font-bold uppercase tracking-widest text-stone-600 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-stone-100">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Contact</p>
            <p className="text-xl font-black text-stone-900">18038739931</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
