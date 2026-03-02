
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import AIConsultant from './components/AIConsultant';
import { COURSES, FEATURES, INSTRUCTORS, STUDENT_LOCATIONS, STUDENT_STORIES, STUDENT_WORK } from './constants';

const EnrollmentModal: React.FC<{ isOpen: boolean; onClose: () => void; courseName: string }> = ({ isOpen, onClose, courseName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-stone-900/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="bg-red-600 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 hover:rotate-90 transition-transform">
            <i className="fas fa-times text-xl"></i>
          </button>
          <h3 className="text-2xl font-bold font-jp mb-2">预约报名咨询</h3>
          <p className="text-red-100 text-sm opacity-80">申请课程：{courseName}</p>
        </div>
        <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('报名信息已提交，导师将尽快与您联系！'); onClose(); }}>
          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">您的姓名</label>
            <input required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="请输入姓名" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">联络电话</label>
            <input required type="tel" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="请输入手机号码" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">所在地区</label>
            <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="例如：上海、新加坡..." />
          </div>
          <button type="submit" className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-red-600 transition-all shadow-xl shadow-stone-200">
            确认申请
          </button>
          <p className="text-center text-[9px] text-stone-400 uppercase tracking-widest">Submit to receive detailed curriculum and logistics.</p>
        </form>
      </div>
    </div>
  );
};

const WECHAT_LINK = 'weixin://';

const App: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [enrollModal, setEnrollModal] = useState<{ open: boolean; course: string }>({ open: false, course: '' });
  const footerLongPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startFooterLongPress = () => {
    footerLongPressTimer.current = setTimeout(() => {
      window.location.href = WECHAT_LINK;
    }, 600);
  };

  const cancelFooterLongPress = () => {
    if (footerLongPressTimer.current) {
      clearTimeout(footerLongPressTimer.current);
      footerLongPressTimer.current = null;
    }
  };

  const rotatingStories = STUDENT_STORIES.slice(0, 6);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const facilities = [
    {
      title: "标准化教学动线",
      desc: "参考日本元帅级标准打造，整合多维度研发空间，提供真实商业厨房体验。",
      icon: "fa-utensils",
      image: "https://imgur.com/CkoTPi6.jpg"
    },
    {
      title: "Yamato 制面机",
      desc: "数字化制面系统，精准控制加水率与筋道度，实现大师级口感复刻。",
      icon: "fa-cog",
      image: "https://imgur.com/StjtSuK.jpg"
    },
    {
      title: "金太郎高压压力缸",
      desc: "高效萃取旨味，极速乳化缩短70%时间，确保汤底浓度高度一致。",
      icon: "fa-atom",
      image: "https://imgur.com/L0DScHU.jpg"
    },
    {
      title: "数字化控温炸炉",
      desc: "极速热补偿技术，数字化油温控制，确保唐扬炸物每一口都极致酥脆。",
      icon: "fa-temperature-high",
      image: "https://imgur.com/U65rcLo.jpg"
    },
    {
      title: "智能多功能蒸烤箱",
      desc: "叉烧制作核心，精密配合湿度与温度，实现肉质纤维的极致软化。",
      icon: "fa-layer-group",
      image: "https://imgur.com/Pxs9mUs.jpg"
    },
    {
      title: "台面数控 IH 阵列",
      desc: "精准到1℃的温控，用于酱汁熟成与汤底加热，拒绝明火风味偏差。",
      icon: "fa-plug",
      image: "https://imgur.com/ZMk0rW6.jpg"
    },
    {
      title: "自动叉烧切片机",
      desc: "0.1mm级精度控制，提升出成率的同时大幅缩减高峰期人力成本。",
      icon: "fa-cut",
      image: "https://imgur.com/U65rcLo.jpg"
    },
    {
      title: "全自动注水煎饺机",
      desc: "一键控制温度，水量与时长，确保每一份煎饺均有完美冰花底与一致口感。",
      icon: "fa-bolt",
      image: "https://imgur.com/ZPtv1cv.jpg"
    },
    {
      title: "IH 数控电磁大炉",
      desc: "汤底萃取核心，数字化感应加热实现恒温输出，确保汤质极其稳定。",
      icon: "fa-microchip",
      image: "https://imgur.com/R7bLoCK.jpg"
    },
    {
      title: "Winterhalter 系统",
      desc: "全球顶尖品牌合作，90秒极速除菌洗涤，提升后厨300%运营效率。",
      icon: "fa-tachometer-alt",
      image: "https://imgur.com/7fhPKo5.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900">
      <Navbar />

      <EnrollmentModal 
        isOpen={enrollModal.open} 
        onClose={() => setEnrollModal({ open: false, course: '' })} 
        courseName={enrollModal.course}
      />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden bg-stone-900 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-4 py-1.5 rounded-full font-bold tracking-[0.2em] text-[10px] mb-8 uppercase">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            Professional Ramen Training
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 font-jp leading-tight tracking-tighter">
            成就你的<br/><span className="text-red-600 underline decoration-stone-700 underline-offset-8">拉面职人</span>之路
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 font-light tracking-widest max-w-3xl mx-auto uppercase mb-12">
            SCIENCE-DRIVEN METHODS. TRADITIONAL SPIRIT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('courses')} className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all shadow-2xl active:scale-95">探索课程</button>
            <button onClick={() => scrollToSection('exhibition')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all active:scale-95">前期作品展</button>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://imgur.com/9f4X70S.jpg" className="w-full h-full object-cover" alt="Master Peter Kim" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-xl rounded-xl border border-stone-100 hidden md:block max-w-xs">
                <p className="text-stone-900 font-jp font-bold text-xl mb-4 italic leading-relaxed">"我们不仅教你如何制面，更教你制面背后的‘为什么’。"</p>
                <p className="text-stone-400 text-xs font-bold tracking-widest uppercase">— MASTER PETER KIM</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-10 font-jp leading-snug text-stone-900">大和精神与<br/>实验室标准的完美结合</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-lg font-bold font-jp text-xl shrink-0">道</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-jp text-stone-900">逻辑驱动 (Logical Path)</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">拒绝经验主义的模糊。通过化学逻辑解析风味层次。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 text-stone-900 flex items-center justify-center rounded-lg font-bold font-jp text-xl shrink-0">器</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-jp text-stone-900">顶级实验设施 (Facilities)</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">配置金太郎压力缸、数控炸炉、自动切片机等 10 项行业巅峰利器。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 text-stone-900 flex items-center justify-center rounded-lg font-bold font-jp text-xl shrink-0">数</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-jp text-stone-900">数据标准 (Data Standard)</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">每一克配方均可复刻，不因产地改变而降低水准。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section - 顶级实验教学设施 (上5下5布局) */}
      <section id="facility" className="py-24 bg-white scroll-mt-24 border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-[1600px]">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 font-jp tracking-tight text-stone-900">顶级实验教学设施</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-stone-400 tracking-[0.3em] text-[10px] font-bold uppercase text-center">World-Class Ramen Lab Infrastructure</p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="group overflow-hidden rounded-3xl bg-stone-50 border border-stone-100 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-stone-200 flex items-center justify-center relative">
                  {f.image ? (
                    <img src={f.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={f.title} />
                  ) : (
                    <i className={`fas ${f.icon} text-5xl text-stone-400 opacity-40`}></i>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    <h4 className="font-bold text-stone-900 font-jp text-sm leading-tight">{f.title}</h4>
                  </div>
                  <p className="text-stone-500 text-[10px] leading-relaxed uppercase tracking-widest mt-auto">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Section */}
      <section id="exhibition" className="py-24 bg-stone-950 text-white scroll-mt-24 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black mb-4 font-jp tracking-tight">前期作品展</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-stone-400 tracking-[0.3em] text-[10px] font-bold uppercase">Scientific Exploration of Ramen Craft</p>
        </div>
        <div className="relative">
          <div className="animate-marquee gap-8 px-4">
            {[...STUDENT_WORK, ...STUDENT_WORK].map((work, idx) => (
              <div key={idx} className="w-[320px] group cursor-pointer shrink-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative shadow-2xl border border-white/5 bg-stone-900">
                  <img src={work.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={work.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-xs text-stone-300 mb-2">{work.desc}</p>
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Lab Data View →</span>
                  </div>
                </div>
                <h4 className="text-md font-bold font-jp mb-1 px-2">{work.title}</h4>
                <p className="text-stone-500 text-[10px] font-bold tracking-widest uppercase px-2">{work.student}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-stone-950 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-stone-950 to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-stone-50 border-y border-stone-200 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 font-jp tracking-tight text-stone-900">探索课程</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-stone-400 tracking-[0.3em] text-[10px] font-bold uppercase">Choose Your Path to Mastery</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {COURSES.map((course) => (
              <div key={course.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group border relative ${course.id === 'c2' ? 'border-stone-400 shadow-xl shadow-stone-200/50 lg:scale-[1.02]' : 'border-stone-200'}`}>
                <div className="h-72 overflow-hidden relative">
                  <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={course.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold font-jp leading-tight">{course.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <p className="text-stone-500 text-xs leading-relaxed mb-4">{course.description}</p>
                    <div className="flex flex-col items-start gap-0.5 mt-auto">
                      <div className="text-red-600 text-3xl font-black font-jp tracking-tighter">{course.price}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {FEATURES.courseOutline && (
                      <button onClick={() => setActiveCourse(activeCourse === course.id ? null : course.id)} className="flex-1 bg-stone-100 text-stone-900 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-stone-200">课程大纲</button>
                    )}
                    <button onClick={() => setEnrollModal({ open: true, course: course.title })} className="flex-1 bg-red-600 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-red-700 shadow-lg shadow-red-200">立即报名</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Alumni Section */}
      <section id="alumni" className="py-24 bg-stone-950 text-white scroll-mt-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="text-red-600 font-bold tracking-[0.4em] text-xs mb-4 uppercase">Feedback</div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 font-jp leading-tight">完成课程后，<br/>学员对我们的真实感受</h2>
            </div>
          </div>
          <div className="relative">
            <div className="animate-marquee gap-8 px-4">
              {[...rotatingStories, ...rotatingStories].map((story, idx) => (
                <div key={`${story.id}-${idx}`} className="w-[380px] bg-white text-stone-900 rounded-[2.5rem] p-10 flex flex-col shadow-2xl transition-all hover:-translate-y-2 duration-500 group cursor-default shrink-0">
                  <div className="flex items-center gap-5 mb-8">
                    <img src={story.image} className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-stone-100" alt={story.name} />
                    <div>
                      <h4 className="text-lg font-bold font-jp leading-none mb-1.5">{story.name} 様</h4>
                      <p className="text-red-600 text-[9px] font-bold uppercase tracking-[0.2em]">{story.region}</p>
                    </div>
                  </div>
                  <div className="flex-1 border-t border-stone-100 pt-6">
                    <p className="text-stone-600 text-[14px] leading-relaxed font-jp italic mb-6">"{story.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-stone-950 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-stone-950 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-24 bg-stone-50 border-t border-stone-200 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-black mb-6 font-jp tracking-tight text-stone-900">导师团队</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {INSTRUCTORS.map((inst) => (
              <div key={inst.id} className="flex flex-col md:flex-row gap-8 items-center md:items-start group">
                <div className="w-56 h-72 rounded-2xl overflow-hidden shrink-0 shadow-xl border-4 border-white bg-stone-100">
                  <img src={inst.image} className="w-full h-full object-cover" alt={inst.name} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-stone-900 mb-2 font-jp">{inst.name}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed border-l-2 border-stone-100 pl-6">{inst.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 py-24 border-t border-stone-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold font-jp text-lg">麵</div>
                <span className="text-2xl font-black tracking-[0.2em] font-jp text-stone-900">RAMEN LAB</span>
              </div>
              <p className="text-stone-400 text-[10px] font-bold tracking-[0.2em] uppercase leading-loose">
                TRANSFORMING CULINARY PASSION INTO STANDARDIZED SUCCESS.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-900 mb-6 text-xs tracking-widest uppercase">快速链接</h5>
              <ul className="space-y-4 text-xs font-bold text-stone-500 uppercase tracking-widest">
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-600 transition-colors uppercase">探索课程</button></li>
                <li><button onClick={() => scrollToSection('exhibition')} className="hover:text-red-600 transition-colors uppercase">前期作品展</button></li>
                <li><button onClick={() => scrollToSection('instructors')} className="hover:text-red-600 transition-colors uppercase">导师团队</button></li>
                <li><button onClick={() => scrollToSection('alumni')} className="hover:text-red-600 transition-colors uppercase">全球校友</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-stone-900 mb-6 text-xs tracking-widest uppercase">联系实验室</h5>
              <p className="text-3xl font-black text-stone-900 mb-4">18038739931</p>
              <div className="flex items-center gap-4">
                <div className="group relative">
                  <div className="w-24 h-24 bg-white border border-red-600 p-1.5 rounded-xl shadow-sm hover:shadow-md transition-shadow shrink-0 overflow-hidden cursor-pointer flex items-center justify-center text-stone-300 hover:text-red-600">
                    <i className="fab fa-weixin text-5xl"></i>
                  </div>
                  {/* QR Code Popup Card */}
                  <div className="absolute bottom-full left-0 mb-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[90]">
                    <div className="bg-white p-6 shadow-2xl border border-stone-100 rounded-[2rem] w-64 text-center ring-1 ring-black/5">
                      <div className="w-full aspect-square bg-stone-50 mb-4 rounded-2xl overflow-hidden border border-stone-100 flex items-center justify-center relative">
                        <img
                          src="https://i.imgur.com/48FcTsA.jpg"
                          alt="WeChat QR Code"
                          className="w-full h-full object-cover p-2 select-none"
                          draggable={false}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          onTouchStart={startFooterLongPress}
                          onTouchEnd={cancelFooterLongPress}
                          onTouchMove={cancelFooterLongPress}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
                      </div>
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-[0.2em] mb-1">WeChat Official</h4>
                      <p className="text-[9px] text-stone-400 uppercase tracking-widest hidden md:block">扫码咨询课程详情</p>
                      <p className="text-[9px] text-stone-400 tracking-widest md:hidden">长按打开微信</p>
                      <div className="mt-4 pt-4 border-t border-stone-50 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Consultant Online</span>
                      </div>
                    </div>
                    {/* Arrow pointer */}
                    <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45 border-b border-r border-stone-100 shadow-[2px_2px_5px_rgba(0,0,0,0.02)]"></div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    招生顾问微信
                  </p>
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest leading-relaxed">
                    扫码获取课程大纲<br/>校友开店案例集
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200 text-center text-[10px] text-stone-400 font-bold tracking-widest uppercase">
            © 日式拉面实验室 JAPANESE RAMEN LABORATORY
          </div>
        </div>
      </footer>

      <AIConsultant />
    </div>
  );
};

export default App;
