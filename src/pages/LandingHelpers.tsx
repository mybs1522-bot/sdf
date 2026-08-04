import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle, Users, X } from 'lucide-react';

export const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

export const RAW_JOINERS = [
  { name: "Babatunde A.", city: "Lagos", time: "2 mins ago" },
  { name: "Chidiebere O.", city: "Abuja", time: "5 mins ago" },
  { name: "Ngozi E.", city: "Port Harcourt", time: "8 mins ago" },
  { name: "Emeka K.", city: "Ibadan", time: "12 mins ago" },
  { name: "Folake B.", city: "Lekki, Lagos", time: "15 mins ago" },
  { name: "Amina Y.", city: "Kano", time: "18 mins ago" },
  { name: "Oluwaseun M.", city: "Enugu", time: "22 mins ago" },
  { name: "Chioma N.", city: "Victoria Island", time: "25 mins ago" },
  { name: "Tunde S.", city: "Abeokuta", time: "30 mins ago" },
  { name: "Blessing A.", city: "Calabar", time: "33 mins ago" },
];

export const FEAR_STATS = [
  { stat: '$100s', label: 'Saved on software licenses — every tool included 100% FREE', icon: '🎁' },
  { stat: '₦500,000', label: 'Guaranteed freelance project allocation for every student', icon: '💼' },
  { stat: '₦150,000', label: 'Average earning per single 3D render created in 2 hours', icon: '💰' },
  { stat: '15 Days', label: 'From zero experience to high-earning freelancer or hired designer', icon: '⚡' },
];

export const PROBLEM_POINTS = [
  { emoji: "💸", text: "Paying 100s of dollars (₦400,000+/year) for expensive software that we give you 100% FREE?" },
  { emoji: "😭", text: "Missing out on guaranteed ₦500,000 freelance projects handed directly to trained students?" },
  { emoji: "⏰", text: "Still spending 4 hours on a floor plan that graduates from THIS system finish in 40 minutes?" },
  { emoji: "📉", text: "Losing ₦15,000,000 projects to competitors who show 3D walkthroughs while you hand over flat PDFs?" },
  { emoji: "🎓", text: "Graduating with a degree but ZERO high-paying clients — wondering why nobody calls back?" },
  { emoji: "😤", text: "Watching 50 YouTube tutorials that don't connect — still can't land a single ₦100,000 gig?" },
];

export const TRANSFORMATION_STORIES = [
  { name: "Chioma N.", role: "Freelancer → ₦1,000,000/project", before: "Paying ₦400k/yr for software. Charging ₦150k per project. Pulling all-nighters.", after: "Got all software 100% free. Received ₦500,000 freelance project allocation on Day 15. Tripled income.", emoji: "💰" },
  { name: "Emeka K.", role: "Student → 3 Job Offers", before: "Zero money for expensive software licenses. Applied to 40 jobs with silence.", after: "Used free software links provided in course. Built portfolio in 15 days. 3 offers in Lagos.", emoji: "🎓" },
  { name: "Femi A.", role: "Developer → ₦30M Saved/Year", before: "Paying agencies ₦2,500,000 per rendered video. Waiting weeks for deliveries.", after: "Team does everything in-house using free software provided. Saved ₦30,000,000 this year.", emoji: "📈" },
  { name: "Amina Y.", role: "Junior → Hired for High-Speed Rendering", before: "Applied to 40 firms with a generic portfolio. Silence.", after: "Rebuilt portfolio with high-speed rendering skills. Hired at ₦600,000/month starting salary.", emoji: "🚀" },
];

export const CHOOSE_PATH_DATA = [
  { title: 'Land High-Paying Jobs', description: 'Build a portfolio in 15 days that makes hiring managers stop scrolling. Get hired for ₦500,000+ monthly starting salaries.', color: 'from-purple-500/10 to-purple-600/5', emoji: '🎯' },
  { title: 'Start Freelancing Today', description: 'Get guaranteed ₦500,000 freelance project allocation. Charge ₦50,000–₦150,000 per render. Scale to ₦5M/month.', color: 'from-blue-500/10 to-blue-600/5', emoji: '🌍' },
  { title: 'Save $100s on Tools', description: 'Stop paying $400+/year for software. Get every single tool, license, and 10,000+ assets 100% FREE forever.', color: 'from-orange-500/10 to-orange-600/5', emoji: '🏢' }
];

export const INDUSTRIES = [
  { label: 'Architecture Students', icon: '🎓', hook: 'Get free software + ₦500k guaranteed gigs' },
  { label: 'Interior Designers', icon: '🎨', hook: 'Charge ₦150k per 3D render image' },
  { label: '3D Visualizers', icon: '🖥️', hook: 'Deliver in 2 hours instead of 2 weeks' },
  { label: 'Freelancers', icon: '💼', hook: 'Scale to ₦5,000,000/month from anywhere' },
  { label: 'Studio Owners', icon: '🏢', hook: 'Stop paying $100s for software licenses' },
  { label: 'Real Estate Developers', icon: '🏗️', hook: 'Sell properties 10x faster with 3D tours' },
];

export const BUSINESS_MODULES = [
  { title: 'Freelance Rendering Services', description: 'Charge ₦50,000–₦150,000 per 3D render image. One video walkthrough = ₦4,000,000. Keep 100% profit.', icon: '🖼️' },
  { title: 'Guaranteed ₦500,000 Projects', description: 'We assign real client freelance projects worth ₦500,000 directly to you upon completing the 15 days.', icon: '🎬' },
  { title: 'Save $100s on Software', description: 'Stop bleeding ₦400,000/year to software companies. Get direct links & free licenses for every tool.', icon: '🏢' },
  { title: 'High-Speed Rendering', description: 'Generate 10 photorealistic renders in 10 minutes. Replace expensive ₦2,500,000 agency costs.', icon: '⚡' },
];

export const PHASE_DATA = [
  { phase: '01', title: 'AutoCAD Precision Drafting', desc: 'Draft floor plans 5x faster. AutoCAD provided 100% FREE.' },
  { phase: '02', title: 'SketchUp 3D Modeling', desc: 'Build 3D models in minutes. SketchUp provided 100% FREE.' },
  { phase: '03', title: 'V-Ray Photorealistic Renders', desc: 'Charge ₦150,000 per 3D image. V-Ray free student license included.' },
  { phase: '04', title: 'Lumion Cinematic Walkthroughs', desc: 'Movie-quality tours that sell ₦4,000,000 projects in 60 seconds.' },
  { phase: '05', title: 'D5 Real-Time Rendering', desc: 'Present live to clients. Close deals in meetings on the spot.' },
  { phase: '06', title: '100% FREE Software Setup', desc: 'Direct links & setup for all tools ($400+ saved). Pay ₦0 for licenses.' },
  { phase: '07', title: '10,000+ Premium Asset Pack', desc: 'Textures, 3D models, and ready scenes included 100% free.' },
  { phase: '08', title: '₦500,000 Freelance Allocation', desc: 'Get assigned your first guaranteed ₦500,000 client project.' },
  { phase: '09', title: 'High-Income Portfolio System', desc: 'Build 6+ client-ready pieces. Land ₦500,000+ gigs in Week 1.' }
];

export const PAGE_PREVIEWS_ROW1 = [
  '/renders/RENDER-1.jpg',
  '/renders/RENDER-2.jpg',
  '/renders/RENDER-3.jpg',
  '/renders/RENDER-4.jpg',
  '/renders/RENDER-5.jpg',
  '/renders/RENDER-6.jpg',
  '/renders/RENDER-7.jpg',
  '/renders/RENDER-8.jpg',
  '/renders/RENDER-9.jpg',
  '/renders/RENDER-10.jpg',
  '/renders/RENDER-11.jpg',
  '/renders/RENDER-12.jpg',
  '/renders/RENDER-13.jpg',
];
export const PAGE_PREVIEWS_ROW2 = [
  '/renders/RENDER-14.jpg',
  '/renders/RENDER-15.jpg',
  '/renders/RENDER-16.jpg',
  '/renders/RENDER-17.jpg',
  '/renders/RENDER-18.jpg',
  '/renders/RENDER-19.jpg',
  '/renders/RENDER-20.jpg',
  '/renders/RENDER-21.jpg',
  '/renders/RENDER-22.jpg',
  '/renders/RENDER-23.jpg',
  '/renders/RENDER-24.jpg',
  '/renders/RENDER-25.jpg',
];

/* ─── MONEY & FREE TOOLS REALITY ─── */
export const AI_TRUTH = [
  { 
    title: 'PAID TOOLS FOR FREE ($100s Saved)', 
    desc: 'Software companies charge 100s of dollars (₦400,000+/yr) for AutoCAD, SketchUp, V-Ray & Lumion. We give you direct links, free student licenses, and setup guides so you pay ₦0 for tools.', 
    verdict: '100% FREE TOOLS', 
    color: 'green' 
  },
  { 
    title: 'GUARANTEED ₦500,000 FREELANCE PROJECTS', 
    desc: 'Don\'t worry about finding clients. When you complete the 15-day training, we hand you real client freelance projects worth up to ₦500,000 NGN directly.', 
    verdict: 'GUARANTEED GIGS', 
    color: 'orange' 
  },
  { 
    title: 'HIGH-PAYING FREELANCE & JOBS', 
    desc: 'Charge ₦50,000–₦150,000 per 3D render or ₦800,000–₦4,000,000 per walkthrough. Finish in hours and get paid fast without endless revisions.', 
    verdict: 'HIGH EARNINGS', 
    color: 'green' 
  },
];

/* ─── LOGO ─── */
export const Logo = () => (
  <div className="flex flex-col items-center text-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
    <span className="font-display font-bold text-xl tracking-tight leading-none text-slate-900 whitespace-nowrap">Avada</span>
    <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 whitespace-nowrap mt-1">Design & Architecture</span>
  </div>
);

/* ─── FLIP CLOCK ─── */
const FlipDigit = ({ value }: { value: string }) => (
  <div className="flip-digit-wrapper"><div className="flip-digit"><span>{value}</span></div></div>
);

/* ─── ANIMATED PRICE CUT ─── */
export const AnimatedPriceCut: React.FC<{ originalPrice?: string; discountedPrice?: string; darkTheme?: boolean }> = ({
  originalPrice = '₦110,000',
  discountedPrice = '₦37,000',
  darkTheme = true
}) => {
  const [slashed, setSlashed] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSlashed(true), 350);
    const t2 = setTimeout(() => setShowPrice(true), 850);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 py-2 flex-wrap">
      {/* Original Price with animated cutting line */}
      <div className="relative inline-flex items-center px-2 py-0.5">
        <span className={`text-xl md:text-3xl font-display font-bold transition-all duration-500 ${slashed ? (darkTheme ? 'text-slate-500' : 'text-slate-400') : (darkTheme ? 'text-white' : 'text-slate-800')}`}>
          {originalPrice}
        </span>
        {/* Cutting Line Animation */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] md:h-[4px] bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.9)] transition-all duration-700 ease-out"
          style={{ width: slashed ? '100%' : '0%' }}
        />
      </div>

      {/* Discounted Price popping in after cut */}
      <div className={`transition-all duration-600 transform ${showPrice ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-3'}`}>
        <span className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter drop-shadow-lg">
          {discountedPrice}
        </span>
      </div>
    </div>
  );
};

/* ─── CTA WIDGET ─── */
export const CallToActionWidget = ({ timeLeft, onClick, headline, subtext }: { timeLeft: { h: number; m: number; s: number }; onClick: () => void; headline?: string; subtext?: string }) => {
  const f = (v: number) => v.toString().padStart(2, '0');
  const h = f(timeLeft.h), m = f(timeLeft.m), s = f(timeLeft.s);
  return (
    <div className="relative py-12 md:py-20 px-6 overflow-hidden bg-slate-900 text-white rounded-3xl my-8 mx-4 sm:mx-auto max-w-5xl shadow-2xl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {headline && <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 tracking-tight">{headline}</h3>}
        {subtext && <p className="text-slate-300 text-sm md:text-base mb-6">{subtext}</p>}
        {!headline && <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-6">🔥 Flash Promo — Price returns to ₦110,000 when timer ends</p>}
        <div className="flex items-center justify-center gap-1 md:gap-2 mb-6">
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={h[0]} /><FlipDigit value={h[1]} /></div><span className="flip-clock-label">HRS</span></div>
          <span className="text-xl md:text-3xl font-bold text-slate-500 -mt-4">:</span>
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={m[0]} /><FlipDigit value={m[1]} /></div><span className="flip-clock-label">MIN</span></div>
          <span className="text-xl md:text-3xl font-bold text-slate-500 -mt-4">:</span>
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={s[0]} /><FlipDigit value={s[1]} /></div><span className="flip-clock-label">SEC</span></div>
        </div>
        <div className="mb-6">
          <AnimatedPriceCut originalPrice="₦110,000" discountedPrice="₦37,000" />
        </div>
        <div className="w-full max-w-md mx-auto">
          <button onClick={onClick} className="cta-primary w-full text-white px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-[1.03] active:scale-[0.98] premium-stroke" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', boxShadow: '0 6px 20px -4px rgba(249,115,22,0.5), 0 12px 40px -8px rgba(234,88,12,0.3)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span className="text-lg md:text-xl font-display font-bold uppercase tracking-widest relative z-10">Get Instant Access Now — ₦37,000</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 md:gap-8 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
          <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> 7-Day Money-Back</div>
          <div className="w-[1px] h-3 bg-slate-700"></div>
          <div className="flex items-center gap-1.5"><Zap size={14} className="text-orange-400" /> Instant Access</div>
          <div className="w-[1px] h-3 bg-slate-700 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-1.5"><Users size={14} className="text-blue-400" /> Free Software Included</div>
        </div>
      </div>
    </div>
  );
};

/* ─── SOCIAL PROOF TOAST ─── */
export const SocialProofToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const show = () => { setVisible(true); setTimeout(() => { setVisible(false); setTimeout(() => setIdx(p => (p + 1) % RAW_JOINERS.length), 500); }, 4000); };
    const t1 = setTimeout(show, 6000);
    const t2 = setInterval(show, 15000);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, []);
  const j = RAW_JOINERS[idx];
  return (
    <div className={`fixed bottom-20 left-4 z-[70] transition-all duration-500 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3 max-w-xs text-slate-900">
        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0"><CheckCircle size={16} className="text-emerald-600" /></div>
        <div>
          <p className="text-sm font-bold text-slate-900">{j.name} from {j.city}</p>
          <p className="text-xs text-slate-500">just enrolled • {j.time}</p>
        </div>
      </div>
    </div>
  );
};
