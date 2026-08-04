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
            <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-orange-200/30 blur-[140px] rounded-full hidden md:block" />
            <div className="absolute top-10 right-1/3 w-[300px] h-[300px] bg-amber-200/20 blur-[120px] rounded-full hidden md:block" />
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
                  src="https://iframe.mediadelivery.net/embed/489113/a214b199-e64a-4eaf-af70-edfbc586e5fd?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
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

        {/* ═══ MONEY & FREE TOOLS TRUTH ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
                <Award size={16} className="text-emerald-700" />
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">UNMISSABLE GUARANTEE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">
                Stop Paying 100s of Dollars For Software.<br />
                <span className="text-orange-600">Get Every Paid Tool 100% Free + ₦500,000 Projects.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                While software companies charge ₦400,000+/year, we give you direct links, free student licenses, and allocate guaranteed ₦500,000 freelance projects upon completion.
              </p>
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
            <div className="reveal text-center mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-slate-900 text-lg font-bold mb-1">🎁 Exclusive Student Perk: <span className="text-orange-600 font-extrabold">₦500,000 Freelance Project Guarantee</span></p>
              <p className="text-slate-600 text-sm">Finish the 15-day training ➔ We assign real client freelance work worth ₦500,000 to your portfolio.</p>
            </div>
          </div>
        </section>

        {/* ═══ ALL-IN-ONE BRIDGE ═══ */}
        <section className="py-16 md:py-24 bg-white border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">SAVE 100s OF DOLLARS • GUARANTEED FREELANCE GIGS</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
              AutoCAD. SketchUp. V-Ray. Lumion. D5. <span className="text-orange-600">Free Tools.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-4">The entire architect's money-making pipeline in one system. Save $400+ on software, learn to design in 15 days, and earn ₦500,000+ on your first gigs.</p>
            <p className="text-sm font-bold text-emerald-700 mb-8 flex items-center justify-center gap-2"><CheckCircle size={16} className="text-emerald-600" /> All software links & free licenses included — you don't pay a single penny for software</p>
            <button onClick={openCheckout} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base hover:bg-slate-800 transition-all inline-flex items-center gap-3 group whitespace-nowrap shadow-lg shadow-slate-900/10">
              Claim ₦37,000 Bundle & Free Software <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>

            {/* Course Preview Video */}
            <div className="w-full max-w-3xl mx-auto mt-10 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900" style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                title="Course preview walkthrough"
                src="https://iframe.mediadelivery.net/embed/494628/81badf78-a3b0-42fa-9f23-9f7213d4185c?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
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

        {/* ═══ MANIFESTO: UNSTOPPABLE EARNING ADVANTAGE ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-10">
              <p className="text-orange-600 text-xs font-mono uppercase tracking-widest mb-3">HOW TO MAKE ₦500,000+ IN YOUR FIRST MONTH</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                "Software Companies Charge $100s. Universities Charge Millions. <span className="text-orange-600">You Get It All For ₦37,000.</span>"
              </h2>
            </div>
            <div className="reveal space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
              <p>Here's the brutal truth: <strong className="text-slate-900">clients don't buy degrees — they buy fast 3D visuals and photorealistic renders.</strong></p>
              <p>The freelancer who delivers 3D renders in 2 hours gets paid <strong className="text-emerald-700 font-bold">₦150,000 per image</strong>. The studio offering 3D walkthroughs closes <strong className="text-emerald-700 font-bold">₦4,000,000 deals</strong>.</p>
              <p>You don't need to spend ₦400,000/year on software licenses. <strong className="text-orange-600">We give you direct download links, free student licenses, and 100% free setups for every single software tool.</strong></p>
              <p>Plus, the moment you complete the 15 days, <strong className="text-slate-900 border-b-2 border-orange-500">we allocate guaranteed ₦500,000 freelance client projects directly to you</strong> so you earn back 13x your enrollment fee immediately.</p>
              <div className="text-slate-900 font-bold text-lg border-l-4 border-orange-500 pl-4 bg-orange-50/80 py-4 rounded-r-2xl">
                ⚡ 100% Free Software Included • Guaranteed ₦500,000 Freelance Project Allocation • 15-Day Mastery Guarantee
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FRICTION GRID ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-3">The Old Way vs. <span className="text-orange-600">This High-Income System</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal bg-red-50/50 border border-red-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center"><X size={20} className="text-red-600" /></div><h3 className="text-xl font-bold text-red-800">The Expensive Old Way</h3></div>
                <ul className="space-y-4">
                  {['Paying $400+/year (₦400,000+) for expensive software licenses', 'Paying ₦1,500,000+ for university courses that don\'t get you hired', '4 hours on a 2D floor plan that clients ignore', 'Handing clients flat PDFs while competitors present 3D video tours', 'Struggling to find paying freelance clients on your own', 'Graduating without a single high-paying client'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm"><X size={14} className="text-red-500 mt-1 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="reveal bg-orange-50/50 border border-orange-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><CheckCircle size={20} className="text-orange-600" /></div><h3 className="text-xl font-bold text-slate-900">With This ₦37,000 System</h3></div>
                <ul className="space-y-4">
                  {['ALL software tools provided 100% FREE (Save $100s today)', 'GUARANTEED ₦500,000 freelance project allocation upon completion', 'Charge ₦50,000–₦150,000 per 3D render image delivered in 2 hours', 'Create ₦4,000,000 cinematic 3D video walkthroughs that close deals', '10,000+ textures, 3D models & prompt vault included 100% free', 'Direct mentor access to get you hired or freelancing immediately'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800 font-medium text-sm"><CheckCircle size={14} className="text-orange-600 mt-1 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FREE SOFTWARE BAIT ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6"><CheckCircle size={16} className="text-emerald-600" /><span className="text-xs font-bold text-emerald-800">SAVE $100s ON SOFTWARE</span></div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">"Software Costs 100s of Dollars..."<br /><span className="text-orange-600">You Get Every Tool 100% Free.</span></h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                That excuse dies today. <strong className="text-slate-900">Every single software in this pipeline is provided for free.</strong> We provide direct download links, free student licenses, and setup guides for SketchUp, AutoCAD, D5, V-Ray, and Lumion. You don't pay a single dollar for software!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {[
                  { icon: <Cpu size={24} />, title: 'Free Software Links', desc: 'Direct links & setup guides for AutoCAD, SketchUp, V-Ray & Lumion. Pay $0.' },
                  { icon: <Sparkles size={24} />, title: '₦500k Freelance Gigs', desc: 'Guaranteed ₦500,000 project allocation handed to you upon 15-day completion.' },
                  { icon: <Award size={24} />, title: 'Lifetime Updates', desc: 'Pay ₦37,000 once. Keep access to all courses, software links & assets forever.' }
                ].map((item, i) => (
                  <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left shadow-2xs">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">{item.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-orange-600 font-black text-base">Your total investment today is just ₦37,000. All software ($400+ value) + ₦500,000 project allocation are included!</p>
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

        {/* ═══ THE MATH: UNBEATABLE RETURN ON INVESTMENT ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">The Math <span className="text-orange-600">Is Unbeatable</span></h2>
              <p className="text-slate-500 text-sm mt-2">Spend ₦37,000 today ➔ Save $400+ on software + Get ₦500,000 guaranteed freelance project allocation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal bg-red-50/40 border border-red-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-6 font-mono uppercase tracking-wider">The Expensive Traditional Way</h3>
                <div className="space-y-4">
                  {[['University Arch-Viz Degree', '₦1,500,000 – ₦4,000,000'], ['Software License Subscriptions', '$400+/year (₦400,000+)'], ['Outsourced Render Fees', '₦2,500,000/video'], ['Finding Freelance Clients', 'Months of zero income'], ['Lost High-Paying Deals', 'Uncountable millions']].map(([l, c], i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200"><span className="text-slate-600 text-sm">{l}</span><span className="text-slate-800 text-sm font-medium">{c}</span></div>
                  ))}
                </div>
              </div>
              <div className="reveal bg-emerald-50/40 border border-emerald-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-700 mb-6 font-mono uppercase tracking-wider">This System (Today Only)</h3>
                <div className="space-y-4">
                  {[['All 6 Complete Mastery Courses', '₦37,000'], ['All 5 Software Links & Setup Guides', '₦0 (100% FREE)'], ['Guaranteed ₦500,000 Freelance Project', '₦0 (INCLUDED FREE)'], ['10,000+ Texture & 3D Model Library', '₦0 (INCLUDED FREE)'], ['Direct Mentor Support & Certificate', '₦0 (INCLUDED FREE)'], ['Lifetime Access + Direct Updates', '₦0 (INCLUDED FREE)']].map(([l, c], i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200"><span className="text-slate-700 text-sm font-medium">{l}</span><span className="text-emerald-700 text-sm font-black">{c}</span></div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-emerald-300"><span className="text-slate-900 font-extrabold text-lg">Total Investment Today</span><span className="text-emerald-700 font-black text-3xl">₦37,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MID-SCROLL CTA ═══ */}
        <CallToActionWidget timeLeft={timeLeft} onClick={openCheckout} headline="Claim Your Free Software & ₦500,000 Project Allocation" subtext="10,000+ Nigerian students already enrolled. Don't pay ₦400,000/year for software when you can get everything for ₦37,000 today." />

        {/* ═══ VALUE STACK ═══ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-3">Everything You Get <span className="text-orange-600">For ₦37,000</span></h2>
              <p className="text-slate-500 text-sm">Save $100s on software + Get allocated ₦500,000 freelance projects instantly</p>
            </div>
            <div className="reveal bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {[
                { name: 'All 6 Architectural & Render Mastery Courses', value: '₦450,000' },
                { name: 'Direct Download Links & Free Licenses for AutoCAD, SketchUp, V-Ray, Lumion & D5', value: '₦400,000 ($400+)' },
                { name: 'Guaranteed ₦500,000 Freelance Client Project Allocation', value: '₦500,000' },
                { name: '10,000+ Textures, 3D Models & Scene Files', value: '₦250,000' },
                { name: 'AI High-Speed Rendering Prompt Vault', value: '₦150,000' },
                { name: '1-on-1 Mentor Job & Client Support', value: '₦200,000' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-3"><CheckCircle size={16} className="text-orange-600 shrink-0" /><span className="text-sm text-slate-800 font-medium">{item.name}</span></div>
                  <span className="text-sm font-bold text-slate-400 line-through">{item.value}</span>
                </div>
              ))}
              <div className="bg-orange-50 border-t border-orange-200 px-6 py-5 flex justify-between items-center">
                <span className="text-slate-900 font-bold">You Pay Today</span>
                <div className="flex items-center gap-3"><span className="text-slate-400 line-through text-sm">₦1,950,000</span><span className="text-3xl font-display font-black text-orange-600">₦37,000</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ UNFAIR ADVANTAGE + P.S. ═══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Your <span className="text-orange-600">Unfair Advantage</span></h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">While others waste ₦400,000/year on software licenses and struggle for clients — you get direct free software setup, 10,000+ assets, and guaranteed ₦500,000 freelance project allocation upon 15-day completion.</p>
              <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6 text-left shadow-sm">
                <p className="text-slate-800 text-sm leading-relaxed"><strong className="text-slate-900">P.S.</strong> — This promotional bundle includes <strong>$400+ in software setup guides & free licenses</strong> + <strong>guaranteed ₦500,000 freelance project allocation</strong> for just ₦37,000. When the timer hits zero, the price goes back to ₦110,000 and free software links will close. Enroll now before you lose this opportunity!</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <CallToActionWidget timeLeft={timeLeft} onClick={openCheckout} headline="Get 100% Free Software & Your ₦500,000 Freelance Project." subtext="10,000+ Nigerian students took action. Your turn to start earning ₦500,000+." />

        {/* ═══ LAST PUSH ═══ */}
        <section className="py-16 md:py-24 bg-slate-100/80 border-t border-slate-200">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <div className="reveal">
              <p className="text-red-600 text-xs font-mono uppercase tracking-widest mb-4">⚠️ Price increases to ₦110,000 when timer expires</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Two Options Stand Before You.</h2>
              <p className="text-slate-600 mb-3"><strong className="text-slate-800">Option 1:</strong> Close this tab. Spend ₦400,000+ on software licenses and struggle to land clients alone.</p>
              <p className="text-slate-600 mb-8"><strong className="text-slate-900">Option 2:</strong> Pay just ₦37,000 today. Get all software 100% FREE, learn the full pipeline in 15 days, and receive guaranteed ₦500,000 freelance project allocation!</p>
              <button onClick={openCheckout} className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 hover:scale-[1.03] transition-all inline-flex items-center gap-3 group whitespace-nowrap">
                Enroll For ₦37,000 & Get Free Software <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
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
