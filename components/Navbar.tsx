
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-[80] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-4 border-b border-stone-100'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-sm font-jp">麵</div>
          <span className="text-xl font-bold tracking-[0.2em] font-jp text-stone-900">RAMEN LAB</span>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-stone-600">
          <button onClick={() => scrollTo('courses')} className="hover:text-red-600 transition-colors uppercase">探索课程</button>
          <button onClick={() => scrollTo('facility')} className="hover:text-red-600 transition-colors uppercase">实验室设备</button>
          <button onClick={() => scrollTo('exhibition')} className="hover:text-red-600 transition-colors uppercase">前期作品展</button>
          <button onClick={() => scrollTo('instructors')} className="hover:text-red-600 transition-colors uppercase">导师团队</button>
          <button onClick={() => scrollTo('alumni')} className="hover:text-red-600 transition-colors uppercase">全球校友</button>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-bold tracking-widest text-stone-400">CONTACT</span>
            <span className="text-sm font-bold text-stone-900">18038739931</span>
          </div>
          
          {/* Optimized WeChat QR Code Trigger */}
          <div className="group relative">
            <button className="w-10 h-10 bg-white border border-stone-200 rounded-xl shadow-sm flex items-center justify-center text-stone-400 hover:text-red-600 hover:border-red-600 transition-all active:scale-95">
              <i className="fab fa-weixin text-xl"></i>
            </button>
            
            {/* QR Code Popup Card */}
            <div className="absolute top-full right-0 mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[90]">
              <div className="bg-white p-6 shadow-2xl border border-stone-100 rounded-[2rem] w-64 text-center ring-1 ring-black/5">
                <div className="w-full aspect-square bg-stone-50 mb-4 rounded-2xl overflow-hidden border border-stone-100 flex items-center justify-center relative group/qr">
                  <img 
                    src="https://i.imgur.com/48FcTsA.jpg" 
                    alt="WeChat QR Code" 
                    className="w-full h-full object-cover p-2"
                    onError={(e) => {
                      // Fallback if the image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
                </div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-[0.2em] mb-1">WeChat Official</h4>
                <p className="text-[9px] text-stone-400 uppercase tracking-widest">扫码咨询课程详情</p>
                <div className="mt-4 pt-4 border-t border-stone-50 flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Consultant Online</span>
                </div>
              </div>
              {/* Arrow pointer */}
              <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-stone-100 shadow-[-2px_-2px_5px_rgba(0,0,0,0.02)]"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
