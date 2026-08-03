import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, CheckCircle2, X, ChevronDown, Target, Sparkles, MessageSquare, Home, LogIn, Layers, Play, Award, AlertTriangle, Bot, Cpu, PenTool } from 'lucide-react';
import { TESTIMONIALS, FAQ_ITEMS, COURSES, VALUE_STACK_ITEMS, INCOME_TIERS, MENTORS, WHO_IS_THIS_FOR, WHO_IS_THIS_NOT_FOR } from '../constants';
import { LoginModal } from '../components/LoginModal';
import {
  Logo, CallToActionWidget, SocialProofToast,
  PROBLEM_POINTS, TRANSFORMATION_STORIES, CHOOSE_PATH_DATA, INDUSTRIES, BUSINESS_MODULES,
  PHASE_DATA, PAGE_PREVIEWS_ROW1, PAGE_PREVIEWS_ROW2, FEAR_STATS, AI_TRUTH,
} from './LandingHelpers';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ h: 3, m: 36, s: 20 });
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const calc = () => { const D = (3 * 3600 + 36 * 60 + 20) * 1000, now = Date.now(), r = D - (now % D); setTimeLeft({ h: Math.floor((r / 3600000) % 24), m: Math.floor((r / 60000) % 60), s: Math.floor((r / 1000) % 60) }); };
    const t = setInterval(calc, 1000); calc(); return () => clearInterval(t);
  }, []);
  useEffect(() => { const h = () => setShowStickyBar(window.scrollY > 600); window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);

  const openCheckout = () => navigate('/checkout');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden antialiased selection:bg-orange-500/20">

      {/* ═══ STICKY HEADER ═══ */}
      <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur-xl border-b border-slate-200/80 px-5 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-widest"><LogIn size={14} /> Login</button>
            <button onClick={openCheckout} className="hidden md:block text-white px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-md shadow-orange-500/20" style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>Enroll Now — ₦37,000</button>
          </div>
        </div>
      </header>

      <main>
        {/* ═══ HERO — Light Theme ═══ */}
        <section className="relative pt-6 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50 border-b border-slate-200/60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
            <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-orange-200/30 blur-[140px] rounded-full" />
            <div className="absolute top-10 right-1/3 w-[300px] h-[300px] bg-amber-200/20 blur-[120px] rounded-full" />
          </div>
          <div className="max-w-5xl mx-auto px-5 relative z-10">
            <div className="flex flex-col items-center text-center pt-6 md:pt-10">
              {/* Proof Badge */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full shadow-2xs">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-800">10,000+ Nigerian Students Enrolled 🇳🇬</span>
              </div>

              {/* Main Headline with exact requested copy */}
              <h1 className="font-display font-bold leading-tight mb-6 text-slate-900 tracking-tight">
                <span className="block text-[4.6vw] sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
                  To Make Money in Home Design Industry,
                </span>
                <span className="block text-[4.3vw] sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 font-extrabold mt-1">
                  You Need to Learn:
                </span>
                <span className="block text-[6.2vw] sm:text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent underline decoration-orange-300 decoration-wavy underline-offset-8 whitespace-nowrap font-extrabold my-2">
                  Plan, Design & Render.
                </span>
                <span className="block text-xl sm:text-3xl md:text-4xl text-orange-600 font-bold mt-2">
                  We Teach You All Three.
                </span>
              </h1>

              {/* 15 Days Promise Subheadline — Exactly 2 lines on phone */}
              <p className="text-[3.5vw] sm:text-base md:text-xl text-slate-700 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
                <span className="block sm:inline whitespace-nowrap">
                  Learn to Design <strong className="text-slate-900 font-bold bg-amber-100/80 px-1.5 py-0.5 rounded">Homes, Offices & Villas</strong> in <strong className="text-orange-600 font-bold">15 Days</strong> —
                </span>{' '}
                <span className="block sm:inline whitespace-nowrap">
                  from zero experience to client-ready execution.
                </span>
              </p>

              {/* Freelance Projects Guarantee Highlight Banner */}
              <div className="w-full max-w-2xl mb-8 p-4 md:p-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-xl shadow-orange-500/20 border border-orange-400/30 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                <div className="relative z-10 text-center space-y-1">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-100">GUARANTEED FREELANCE PROJECTS</p>
                  <p className="text-base md:text-lg font-black text-white leading-tight">
                    We Will Give You Freelance Projects Worth <span className="underline decoration-white underline-offset-2">₦500,000</span>
                  </p>
                </div>
              </div>

              {/* Hero Video (Placed Directly Below Freelance Box) */}
              <div className="w-full max-w-4xl mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-orange-500/10 bg-slate-900" style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  title="Course overview video"
                  src="https://iframe.mediadelivery.net/embed/494628/81badf78-a3b0-42fa-9f23-9f7213d4185c?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
                  loading="eager"
                  style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen={true}
                />
              </div>

              {/* 3 Pillars Visual Mini-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mb-8">
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">1</span>
                    <span className="font-bold text-slate-900 text-sm">PLAN</span>
                  </div>
                  <p className="text-xs text-slate-500">AutoCAD precision floor plans & 2D blueprints</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">2</span>
                    <span className="font-bold text-slate-900 text-sm">DESIGN</span>
                  </div>
                  <p className="text-xs text-slate-500">SketchUp 3D modeling for Homes, Offices & Villas</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">3</span>
                    <span className="font-bold text-slate-900 text-sm">RENDER</span>
                  </div>
                  <p className="text-xs text-slate-500">V-Ray, Lumion, D5 & AI photorealistic visuals</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <button onClick={openCheckout} className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 hover:scale-[1.03] transition-all flex items-center gap-3 group whitespace-nowrap">
                  Start Learning — ₦37,000 (was ₦110,000) <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
              <p className="text-xs text-slate-500 mb-4 font-medium">⚡ Instant access • 15-day mastery • Free software provided • 7-day money-back guarantee</p>

              {/* Payment Options */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Payment Options:</span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs text-[11px] font-bold text-purple-700">Selar Checkout</span>
                  <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs text-[11px] font-bold text-emerald-700">Paystack</span>
                  <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs text-[11px] font-bold text-blue-700">Cards</span>
                  <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs text-[11px] font-bold text-amber-700">Bank Transfer</span>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full max-w-4xl">
                {COURSES.map((c) => (
                  <div key={c.id} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group cursor-pointer hover:border-orange-500/60 transition-all hover:scale-105 shadow-sm">
                    <img src={c.imageUrl} alt={c.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">{c.software}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FEAR STATS BAR ═══ */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEAR_STATS.map((s, i) => (
              <div key={i} className="text-center reveal">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <span className="text-3xl md:text-4xl font-display font-black text-orange-600">{s.stat}</span>
                <p className="text-xs text-slate-600 mt-1 leading-snug font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 10,000+ NIGERIAN STUDENTS SECTION ═══ */}
        <section className="py-14 md:py-20 bg-gradient-to-b from-white via-orange-50/30 to-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-5 text-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-4">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Trusted Nationwide</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-3">
                10,000+ Nigerian Students 🇳🇬
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
                From Lagos to Abuja, Port Harcourt to Kano — architects, designers, and students are building real-world projects and landing high-paying gigs with this system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 reveal">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group hover:border-orange-500 transition-all duration-300">
                <img
                  src="https://afrca37k.vercel.app/student1.jpg"
                  alt="10,000+ Nigerian Students Showcase 1"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group hover:border-orange-500 transition-all duration-300">
                <img
                  src="https://afrca37k.vercel.app/student2.jpg"
                  alt="10,000+ Nigerian Students Showcase 2"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AI TRUTH SECTION ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 border border-orange-200 rounded-full mb-6"><Bot size={16} className="text-orange-600" /><span className="text-xs font-bold text-orange-700">THE AI REALITY CHECK</span></div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Everyone's Talking About AI.<br /><span className="text-orange-600">Here's What They're Not Telling You.</span></h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">AI will revolutionize rendering. But it has a fatal flaw that nobody mentions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_TRUTH.map((item, i) => (
                <div key={i} className={`reveal bg-white border rounded-2xl p-6 shadow-sm ${item.color === 'green' ? 'border-emerald-200' : item.color === 'red' ? 'border-red-200' : 'border-orange-200'}`}>
                  <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${item.color === 'green' ? 'bg-emerald-100 text-emerald-800' : item.color === 'red' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}`}>{item.verdict}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal text-center mt-10">
              <p className="text-slate-800 text-lg font-semibold mb-2">This course teaches you the <span className="text-orange-600 font-bold">Hybrid Workflow</span>.</p>
              <p className="text-slate-600 text-sm">You learn to design with precision. AI handles the heavy rendering. Together, you're 10x faster than either alone.</p>
            </div>
          </div>
        </section>

        {/* ═══ ALL-IN-ONE BRIDGE ═══ */}
        <section className="py-16 md:py-24 bg-white border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Zero to Advanced. One Bundle. No Paid Software.</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              AutoCAD. SketchUp. V-Ray. Lumion. D5. <span className="text-orange-600">AI.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-4">The entire architect's pipeline in one system. Every tool, every technique, every shortcut — from your first click to your first ₦4,000,000 walkthrough.</p>
            <p className="text-sm font-bold text-emerald-700 mb-8 flex items-center justify-center gap-2"><CheckCircle size={16} className="text-emerald-600" /> All software links & free licenses included — you don't pay a penny for tools</p>
            <button onClick={openCheckout} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base hover:bg-slate-800 transition-all inline-flex items-center gap-3 group whitespace-nowrap shadow-lg shadow-slate-900/10">
              See What's Inside <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>

            {/* Course Preview Video */}
            <div className="w-full max-w-3xl mx-auto mt-10 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900" style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                title="Course preview walkthrough"
                src="https://iframe.mediadelivery.net/embed/489113/a214b199-e64a-4eaf-af70-edfbc586e5fd?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
                loading="lazy"
                style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen={true}
              />
            </div>
          </div>
        </section>

        {/* ═══ PEEK INSIDE CAROUSEL ═══ */}
        <section className="py-16 md:py-24 bg-slate-100/70 overflow-hidden border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-5 mb-12 text-center">
            <div className="reveal">
              <p className="text-orange-600 text-xs font-mono uppercase tracking-widest mb-4">Student results</p>
              <h2 className="text-3xl md:text-6xl font-display font-bold text-slate-900 tracking-tight mb-6">This Is What Our Students <span className="text-orange-600">Produce</span></h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto italic font-serif">"15 days ago I didn't know what SketchUp was. Now I have 3 job offers in Lagos."</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex gap-3 md:gap-8 animate-scroll-left hover:pause">
              {[...PAGE_PREVIEWS_ROW1, ...PAGE_PREVIEWS_ROW1].map((img, i) => (
                <div key={i} className="w-[200px] md:w-[400px] shrink-0 aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group bg-white">
                  <img src={img} alt="Student Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 md:gap-8 animate-scroll-right hover:pause">
              {[...PAGE_PREVIEWS_ROW2, ...PAGE_PREVIEWS_ROW2].map((img, i) => (
                <div key={i} className="w-[200px] md:w-[400px] shrink-0 aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group bg-white">
                  <img src={img} alt="Student Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ MANIFESTO ═══ */}
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <p className="text-orange-600 text-xs font-mono uppercase tracking-widest mb-4">A message from the instructor</p>
              <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 mb-8 leading-snug">"I've watched this industry punish talented people who can't visualize their ideas."</h2>
            </div>
            <div className="reveal space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>Here's the truth nobody tells you: <strong className="text-slate-900">design skill alone doesn't win clients anymore.</strong></p>
              <p>The architect who shows cinematic walkthroughs wins. The designer who renders photorealistic images wins. The freelancer who delivers in 2 days instead of 2 weeks wins. Every. Single. Time.</p>
              <p>And now? <strong className="text-red-600">AI is accelerating this gap.</strong> Designers who learn the AI hybrid workflow are charging 3x more. Those who don't are watching their inbox go quiet.</p>
              <p>Universities don't teach you these tools. YouTube gives you fragments. Expensive courses charge ₦1,500,000+ and still leave you struggling. Meanwhile, your competitors are getting faster every month.</p>
              <p>So I built this system. <strong className="text-slate-900">Six courses. Every tool in the pipeline. Zero paid software required.</strong> We even provide the software links, free licenses, and 10,000+ assets.</p>
              <p className="text-slate-900 font-semibold text-lg md:text-xl border-l-4 border-orange-500 pl-4 bg-orange-50/50 py-3 rounded-r-xl">The question isn't whether you can afford ₦37,000. It's whether you can afford to keep falling behind while 10,000+ Nigerian students are learning the exact skills that get people hired, promoted, and paid.</p>
            </div>
          </div>
        </section>

        {/* ═══ FRICTION GRID ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">The Old Way vs. <span className="text-orange-600">The Hybrid System</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal bg-red-50/40 border border-red-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center"><X size={20} className="text-red-600" /></div><h3 className="text-xl font-bold text-red-800">Still Doing This?</h3></div>
                <ul className="space-y-4">
                  {['Googling random tutorials that contradict each other', 'Paying ₦1,500,000+ for university courses that don\'t cover AI', '4 hours on a floor plan. Your competitor does it in 40 minutes.', 'Handing clients flat PDFs. They hire the person with 3D walkthroughs.', 'Paying ₦400,000/year for software you could get free', 'Graduating without a single portfolio-ready render'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm"><X size={14} className="text-red-500 mt-1 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="reveal bg-orange-50/40 border border-orange-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><CheckCircle size={20} className="text-orange-600" /></div><h3 className="text-xl font-bold text-slate-900">With This System</h3></div>
                <ul className="space-y-4">
                  {['Structured pipeline: AutoCAD → SketchUp → V-Ray → Lumion → D5 → AI', 'AI handles your rendering. You handle the design. 10x output.', '15 days to a professional portfolio — even from zero', 'All software provided FREE — no expensive licenses ever', '10,000+ textures, models, AI prompts included', 'Mentor support when you\'re stuck at 11pm before a deadline'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm"><CheckCircle size={14} className="text-orange-600 mt-1 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SOUND FAMILIAR ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Be Honest. <span className="text-orange-600">Is This You?</span></h2>
              <p className="text-slate-500 text-sm">Every week you don't fix this, someone hungrier does.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PROBLEM_POINTS.map((point, i) => (
                <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-orange-300 transition-all shadow-2xs">
                  <span className="text-3xl">{point.emoji}</span>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
            <div className="reveal text-center mt-10">
              <p className="text-slate-600 text-sm">If you checked even ONE of these — <strong className="text-slate-900">this system was built for you.</strong></p>
            </div>
          </div>
        </section>

        {/* ═══ WHO IS THIS FOR ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-10 tracking-tight">If You're Any of These, <span className="text-orange-600">You're Already Behind.</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="reveal bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-300 transition-all group text-left shadow-xs">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <span className="text-sm font-bold text-slate-900 block mb-1">{ind.label}</span>
                  <span className="text-xs text-slate-500">{ind.hook}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FREE SOFTWARE BAIT ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6"><CheckCircle size={16} className="text-emerald-600" /><span className="text-xs font-bold text-emerald-800">NO PAID SOFTWARE REQUIRED</span></div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">"But I Can't Afford Expensive Software..."</h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                That excuse dies today. <strong className="text-slate-900">Every software in this system is available for free.</strong> We provide direct links to official free versions, student licenses, and free alternatives. SketchUp, AutoCAD, D5 Render — all free. Even V-Ray and Lumion have free student editions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {[
                  { icon: <Cpu size={24} />, title: 'Software Provided', desc: 'Direct links to every free/student version. No hunting. No piracy. Legit and ready.' },
                  { icon: <Sparkles size={24} />, title: 'AI Tools = Free', desc: 'The AI rendering tools we teach are completely free. ₦0/month. Replace expensive subscriptions.' },
                  { icon: <Award size={24} />, title: 'Lifetime Access', desc: 'Enroll once, access forever. Every update, every new module — free for life.' }
                ].map((item, i) => (
                  <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left shadow-2xs">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">{item.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-orange-600 font-bold text-sm">The only investment is ₦37,000 and 15 days of your time. Everything else is provided.</p>
            </div>
          </div>
        </section>

        {/* ═══ NOT JUST TUTORIALS ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">This isn't <span className="text-orange-600">"just tutorials."</span></h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8">This is the complete pipeline that takes you from <strong className="text-slate-900">opening AutoCAD for the first time</strong> to <strong className="text-slate-900">delivering cinematic renders that win ₦15,000,000 projects</strong>. Every course is project-based, hands-on, and designed for real-world results. And AI does the heavy lifting on rendering.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { icon: <Layers size={24} />, title: '6 Complete Courses', desc: 'AutoCAD → SketchUp → V-Ray → Lumion → D5 → AI. Zero to advanced. The full pipeline.' },
                  { icon: <Play size={24} />, title: 'Project-Based', desc: 'You build real interiors, renders, and walkthroughs. 6+ portfolio pieces by the end.' },
                  { icon: <Bot size={24} />, title: 'AI-Powered Rendering', desc: 'Learn to use AI for rendering, concept generation, and style transfer. Free tools only.' }
                ].map((item, i) => (
                  <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-2xs">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600">{item.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CHOOSE YOUR PATH ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Choose Your Path</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CHOOSE_PATH_DATA.map((path, i) => (
                <div key={i} className={`reveal bg-gradient-to-br ${path.color} border border-slate-200 rounded-2xl p-8 hover:border-orange-300 transition-all shadow-sm`}>
                  <span className="text-3xl mb-4 block">{path.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{path.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BEFORE & AFTER ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-2">Before & After</h2><p className="text-slate-500 text-sm">Real Nigerian students. Real transformations. Same ₦37,000 investment.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRANSFORMATION_STORIES.map((story, i) => (
                <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <span className="text-4xl mb-4 block">{story.emoji}</span>
                  <div className="flex items-center gap-2 mb-4"><span className="font-bold text-slate-900">{story.name}</span><span className="text-xs text-slate-500">• {story.role}</span></div>
                  <div className="mb-3"><p className="text-[10px] font-mono uppercase text-red-600 mb-1">Before</p><p className="text-slate-600 text-sm">{story.before}</p></div>
                  <div><p className="text-[10px] font-mono uppercase text-emerald-600 mb-1">After</p><p className="text-slate-800 text-sm font-medium">{story.after}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE MATH ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">The Math <span className="text-orange-600">Doesn't Lie</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal bg-red-50/30 border border-red-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-6 font-mono uppercase tracking-wider">The Expensive Way</h3>
                <div className="space-y-4">
                  {[['University Arch-Viz Course', '₦1,500,000 – ₦4,000,000'], ['Premium Software Licenses', '₦400,000+/year'], ['Outsourced Renders', '₦2,500,000/video'], ['Random YouTube (your time)', '100+ hours wasted'], ['Lost Clients (flat PDFs)', '₦₦₦₦ uncountable']].map(([l, c], i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200"><span className="text-slate-600 text-sm">{l}</span><span className="text-slate-800 text-sm font-medium">{c}</span></div>
                  ))}
                </div>
              </div>
              <div className="reveal bg-emerald-50/30 border border-emerald-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-700 mb-6 font-mono uppercase tracking-wider">This System</h3>
                <div className="space-y-4">
                  {[['All 6 Courses (Zero to Advanced)', '₦37,000'], ['All Software (Free Licenses)', '₦0'], ['10,000+ Textures & Models', '₦0 (included)'], ['AI Prompt Vault & Tools', '₦0 (included)'], ['Mentor Support + Diploma', '₦0 (included)'], ['Lifetime Access + Updates', '₦0 (forever)']].map(([l, c], i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200"><span className="text-slate-700 text-sm">{l}</span><span className="text-emerald-700 text-sm font-bold">{c}</span></div>
                  ))}
                  <div className="flex justify-between items-center pt-2"><span className="text-slate-900 font-bold text-lg">Total Investment</span><span className="text-emerald-700 font-black text-2xl">₦37,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MID-SCROLL CTA ═══ */}
        <CallToActionWidget timeLeft={timeLeft} onClick={openCheckout} headline="Still thinking?" subtext="10,000+ Nigerian students already made this decision. The only question is whether you'll join them today — or wish you had." />

        {/* ═══ INCOME TIERS ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">What You Could <span className="text-orange-600">Earn</span></h2>
              <p className="text-slate-500 text-sm">Real numbers. Real students. The ₦37,000 pays for itself on your first gig.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INCOME_TIERS.map((tier, i) => (
                <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 transition-all shadow-sm">
                  <div className="flex items-center gap-3 mb-4"><span className="text-3xl">{tier.icon}</span><span className="text-sm font-bold text-slate-900">{tier.label}</span></div>
                  <div className="flex items-center gap-4">
                    <div><p className="text-[10px] font-mono text-slate-400 uppercase mb-1">Before</p><p className="text-slate-400 text-sm line-through">{tier.before}</p></div>
                    <ArrowRight size={16} className="text-orange-600" />
                    <div><p className="text-[10px] font-mono text-orange-600 uppercase mb-1">After</p><p className="text-slate-900 text-sm font-bold">{tier.after}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6 COURSES ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">6 Courses. One Pipeline. <span className="text-orange-600">Total Mastery.</span></h2>
              <p className="text-slate-500 text-sm mt-2">Each course includes free software, project files, and mentor support</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.map((course) => (
                <div key={course.id} className="reveal bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-300 transition-all group shadow-2xs">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                    <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full"><span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">{course.software}</span></div>
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full"><span className="text-[10px] font-bold text-white">{course.students} students</span></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>
                    <ul className="space-y-2">{course.learningPoints.map((p, j) => (<li key={j} className="flex items-start gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-orange-600 mt-0.5 shrink-0" />{p}</li>))}</ul>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-orange-600 text-xs font-semibold">{course.workflowImpact}</p>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">FREE SOFTWARE</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 9 PHASES ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">9 Phases. Zero to <span className="text-orange-600">Advanced.</span></h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PHASE_DATA.map((phase, i) => (
                <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-300 transition-all shadow-xs">
                  <div className="flex items-center gap-3 mb-3"><span className="text-3xl font-display font-black text-orange-400">{phase.phase}</span><h3 className="text-sm font-bold text-slate-900">{phase.title}</h3></div>
                  <p className="text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ USE CASES ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">What Will You Do <span className="text-orange-600">With These Skills?</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BUSINESS_MODULES.map((mod, i) => (
                <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-5 hover:border-orange-300 transition-all shadow-2xs">
                  <div className="text-3xl">{mod.icon}</div>
                  <div><h3 className="text-lg font-bold text-slate-900 mb-2">{mod.title}</h3><p className="text-slate-600 text-sm leading-relaxed">{mod.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ VALUE STACK ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Everything You Get <span className="text-orange-600">For ₦37,000</span></h2></div>
            <div className="reveal bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {VALUE_STACK_ITEMS.map((item, i) => (
                <div key={i} className={`flex justify-between items-center px-6 py-4 ${i !== VALUE_STACK_ITEMS.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <div className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-600 shrink-0" /><span className="text-sm text-slate-700 font-medium">{item.name}</span></div>
                  <span className="text-sm font-bold text-slate-400 line-through">{item.value}</span>
                </div>
              ))}
              <div className="bg-orange-50 border-t border-orange-200 px-6 py-5 flex justify-between items-center">
                <span className="text-slate-900 font-bold">You Pay Today</span>
                <div className="flex items-center gap-3"><span className="text-slate-400 line-through text-sm">₦2,740,000</span><span className="text-2xl font-display font-black text-orange-600">₦37,000</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MENTORS ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Your <span className="text-orange-600">Mentors</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MENTORS.map((mentor, i) => (
                <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">{mentor.name[0]}</div><div><h3 className="text-lg font-bold text-slate-900">{mentor.name}</h3><p className="text-xs text-slate-500 font-medium">{mentor.title}</p></div></div>
                  <p className="text-slate-600 text-sm mb-4">{mentor.bio}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500"><span className="flex items-center gap-1 font-bold text-slate-700"><Star size={12} className="text-orange-500 fill-orange-500" /> {mentor.rating}</span><span>{mentor.students} students</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS CAROUSEL ═══ */}
        <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden shadow-2xl">
          <div className="px-5 mb-16 text-center">
            <h2 className="text-3xl md:text-6xl font-display font-bold text-white tracking-tight mb-4">Don't Take <span className="text-orange-400">Our Word</span></h2>
            <p className="text-slate-400 text-lg">Here's what 10,000+ Nigerian students say.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 animate-scroll-left hover:pause">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="w-[350px] shrink-0 bg-slate-800/80 border border-slate-700/70 p-8 rounded-3xl hover:border-orange-500/50 transition-all">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-orange-400 text-orange-400" />)}</div>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-orange-400">{t.name[0]}</div><div className="text-left"><p className="text-sm font-bold text-white flex items-center gap-1">{t.name} <CheckCircle size={12} className="text-emerald-400" /></p><p className="text-[10px] text-slate-400 uppercase tracking-widest">{t.role} • {t.location}</p></div></div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 animate-scroll-right hover:pause">
              {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map((t, i) => (
                <div key={i} className="w-[350px] shrink-0 bg-slate-800/80 border border-slate-700/70 p-8 rounded-3xl hover:border-orange-500/50 transition-all">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-orange-400 text-orange-400" />)}</div>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-orange-400">{t.name[0]}</div><div className="text-left"><p className="text-sm font-bold text-white flex items-center gap-1">{t.name} <CheckCircle size={12} className="text-emerald-400" /></p><p className="text-[10px] text-slate-400 uppercase tracking-widest">{t.role} • {t.location}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ UNFAIR ADVANTAGE + P.S. ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Your <span className="text-orange-600">Unfair Advantage</span></h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">While everyone else is watching disconnected YouTube videos and paying ₦400,000/year for software — you'll have the complete pipeline, free software, 10,000+ assets, and AI rendering skills that make you 10x faster. In 15 days.</p>
              <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6 text-left shadow-sm">
                <p className="text-slate-800 text-sm leading-relaxed"><strong className="text-slate-900">P.S.</strong> — Right now, AI is creating a divide. Designers who learn the hybrid workflow are charging 3x more. Those who don't are slowly becoming irrelevant. This course closes that gap in 15 days — for ₦37,000. But we won't keep it at this price forever. When the timer hits zero, the price goes up. Don't be the person who comes back tomorrow and pays more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <CallToActionWidget timeLeft={timeLeft} onClick={openCheckout} headline="This Is Your Window." subtext="AI is widening the gap every day. 10,000+ Nigerian students chose to be on the right side. Your move." />

        {/* ═══ FAQ ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Common Questions</h2></div>
            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, i) => (
                <details key={i} className="reveal group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs" open={openFaqIndex === i}>
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === i ? null : i); }}>
                    <span className="text-sm md:text-base font-semibold text-slate-900 pr-6">{faq.question}</span>
                    <ChevronDown size={18} className={`text-slate-500 transition-transform shrink-0 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                  </summary>
                  <div className="px-5 pb-5"><p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LAST PUSH ═══ */}
        <section className="py-16 md:py-24 bg-slate-100/80 border-t border-slate-200">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <div className="reveal">
              <p className="text-red-600 text-xs font-mono uppercase tracking-widest mb-4">⚠️ Price goes up when timer expires</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">You Have Two Options.</h2>
              <p className="text-slate-600 mb-2"><strong className="text-slate-800">Option 1:</strong> Close this tab. Keep doing what you're doing. Watch AI-trained designers pass you.</p>
              <p className="text-slate-600 mb-8"><strong className="text-slate-900">Option 2:</strong> Invest ₦37,000. Learn the complete pipeline in 15 days. Join 10,000+ Nigerian students who chose to adapt.</p>
              <button onClick={openCheckout} className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 hover:scale-[1.03] transition-all inline-flex items-center gap-3 group whitespace-nowrap">
                Choose Option 2 <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 px-6 text-center border-t border-slate-200">
        <p className="text-xs text-slate-500 font-semibold uppercase tracking-[0.2em] mb-4">Avada Design & Architecture • Nigeria 2026</p>
        <div className="flex justify-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest"><span>Privacy</span><span>Terms</span><span>Support</span></div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2.5 transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={openCheckout} className="w-full relative group overflow-hidden text-white rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all h-14 flex items-center px-4" style={{ background: 'linear-gradient(90deg,#f97316,#ea580c,#f97316)' }}>
          <div className="relative z-10 w-full flex items-center justify-between">
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-200">🔥 Promo ends in {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}</span>
              <span className="text-sm font-black uppercase tracking-[0.15em] text-white">Enroll Now</span>
            </div>
            <div className="flex items-center gap-2"><span className="text-xs font-bold text-red-100 line-through opacity-80">₦110,000</span><span className="text-xl font-display font-black text-white">₦37,000</span></div>
          </div>
        </button>
      </div>

      <SocialProofToast />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348000000000?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Avada%20course%20bundle"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-50 right-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all flex items-center justify-center w-14 h-14 ${showStickyBar ? 'bottom-20 md:bottom-6' : 'bottom-6'}`}
        title="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  );
};

export default LandingPage;
