
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle, Users, X } from 'lucide-react';

export const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

export const RAW_JOINERS = [
  { name: "Arjun K.", city: "Mumbai", time: "2 mins ago" },
  { name: "Priya M.", city: "Delhi", time: "5 mins ago" },
  { name: "Sneha R.", city: "Bangalore", time: "8 mins ago" },
  { name: "Rahul G.", city: "Pune", time: "12 mins ago" },
  { name: "Ananya P.", city: "Hyderabad", time: "15 mins ago" },
  { name: "Vikram J.", city: "Chennai", time: "18 mins ago" },
  { name: "Meera V.", city: "Jaipur", time: "22 mins ago" },
  { name: "Karan T.", city: "Kolkata", time: "25 mins ago" },
  { name: "Divya S.", city: "Ahmedabad", time: "30 mins ago" },
  { name: "Rohan M.", city: "Noida", time: "33 mins ago" },
];

export const PROBLEM_POINTS = [
  { emoji: "⏰", text: "Still spending 4 hours on a floor plan that graduates from THIS system finish in 40 minutes?" },
  { emoji: "💸", text: "Paying agencies ₹2,50,000 per rendered image — money that should be in YOUR pocket?" },
  { emoji: "📉", text: "Losing ₹15,00,000 projects to competitors who show cinematic walkthroughs while you hand over flat PDFs?" },
  { emoji: "🤖", text: "Watching AI replace designers who don't adapt — while AI-trained designers charge 3x more?" },
  { emoji: "🎓", text: "Graduating with a degree but ZERO portfolio-ready renders — then wondering why nobody calls back?" },
  { emoji: "😤", text: "Watching 50 YouTube tutorials that don't connect — still can't produce a single professional render?" },
];

export const TRANSFORMATION_STORIES = [
  { name: "Priya S.", role: "Freelancer → ₹1,00,000/project", before: "Charging ₹25,000 per project. Pulling all-nighters. Clients ghosting after seeing flat 2D plans.", after: "Tripled her income in 3 months. Clients now pay ₹1,00,000+ without flinching. Goes home at 5pm.", emoji: "💰" },
  { name: "Vikram J.", role: "Student → 3 Job Offers", before: "Zero experience. Applied to 40 jobs: silence. Professors couldn't help with modern tools.", after: "Built a portfolio in 15 days. Got 3 offers before graduation. Professors now ask HIM for tips.", emoji: "🎓" },
  { name: "Rahul G.", role: "Developer → ₹30L Saved/Year", before: "Paying agencies ₹2,50,000 per rendered image. Waiting weeks for deliveries. Zero control.", after: "Team does everything in-house. Saved ₹30,00,000 this year. Renders in hours, not weeks.", emoji: "📈" },
  { name: "Fatima N.", role: "Junior → Hired for AI Skills", before: "Applied to 40 firms with a generic portfolio. Silence. Couldn't even get an interview.", after: "Rebuilt portfolio with AI + rendering skills. 3 offers in 2 weeks. Hired specifically for AI workflow.", emoji: "🤖" },
];

export const CHOOSE_PATH_DATA = [
  { title: 'Land Your Dream Job', description: 'Build a portfolio in 15 days that makes hiring managers stop scrolling. Get hired for your AI + rendering skills, not just your degree.', color: 'from-purple-500/20 to-purple-600/10', emoji: '🎯' },
  { title: 'Start Freelancing', description: 'Charge ₹3,000–₹10,000 per rendered image. ₹80,000–₹4,00,000 per walkthrough. Work from anywhere. Scale to ₹10L/month.', color: 'from-blue-500/20 to-blue-600/10', emoji: '🌍' },
  { title: 'Level Up Your Studio', description: 'Stop outsourcing renders. Train your team on the full pipeline. Double your profit margin this quarter.', color: 'from-orange-500/20 to-orange-600/10', emoji: '🏢' }
];

export const INDUSTRIES = [
  { label: 'Architecture Students', icon: '🎓', hook: 'Graduate with a portfolio that gets callbacks' },
  { label: 'Interior Designers', icon: '🎨', hook: 'Stop losing clients to better presenters' },
  { label: '3D Visualizers', icon: '🖥️', hook: 'Cut render time by 80% with AI' },
  { label: 'Freelancers', icon: '💼', hook: 'Scale to ₹10L/month from anywhere' },
  { label: 'Studio Owners', icon: '🏢', hook: 'Stop outsourcing — keep the profits' },
  { label: 'Real Estate Developers', icon: '🏗️', hook: 'Sell properties before they\'re built' },
];

export const BUSINESS_MODULES = [
  { title: 'Freelance Rendering Services', description: 'Charge ₹3,000–₹10,000 per photorealistic image. One walkthrough = ₹4,00,000. The math is simple.', icon: '🖼️' },
  { title: 'Cinematic Walkthroughs', description: 'Sell ₹80,000–₹4,00,000 video tours that close deals in 60 seconds. Clients fall in love before a single brick is laid.', icon: '🎬' },
  { title: 'In-House Visualization', description: 'Stop bleeding ₹2,50,000/image to agencies. Your team learns the full pipeline. Keep every rupee.', icon: '🏢' },
  { title: 'AI-Powered Concept Generation', description: 'Generate 10 stunning concepts in 10 minutes using FREE AI tools that replace ₹40,000/mo software.', icon: '🤖' },
];

export const PHASE_DATA = [
  { phase: '01', title: 'AutoCAD Precision Drafting', desc: 'Master shortcuts that cut drafting time by 60%. Plans that builders actually love.' },
  { phase: '02', title: 'SketchUp 3D Modeling', desc: 'Build complex models 5x faster. Organized scenes that never crash.' },
  { phase: '03', title: 'V-Ray Photorealistic Rendering', desc: 'Lighting and materials indistinguishable from real photos. Charge ₹10,000/image.' },
  { phase: '04', title: 'Lumion Cinematic Walkthroughs', desc: 'Movie-quality tours that sell projects in 60 seconds flat.' },
  { phase: '05', title: 'D5 Real-Time Rendering', desc: 'See changes instantly. Present live to clients. Close deals in meetings.' },
  { phase: '06', title: 'AI Architecture Mastery', desc: 'AI handles your rendering. You handle the design. 10x your output with free tools.' },
  { phase: '07', title: '10,000+ Asset Library', desc: 'Drag-and-drop textures and models. Save 10+ hours per project. Included free.' },
  { phase: '08', title: 'Software & Pipeline Setup', desc: 'Every tool installed FREE — no expensive licenses needed. We provide everything.' },
  { phase: '09', title: 'Portfolio & Income System', desc: 'Build 6+ portfolio pieces. Set rates. Land your first ₹80,000+ gig in week one.' }
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

/* ─── FEAR STATS ─── */
export const FEAR_STATS = [
  { stat: '73%', label: 'of architecture grads can\'t produce a single professional render', icon: '📉' },
  { stat: '5x', label: 'more likely to get hired with AI + rendering skills on your portfolio', icon: '🚀' },
  { stat: '₹30L', label: 'average amount studios waste per year outsourcing renders', icon: '💸' },
  { stat: '15 days', label: 'from zero experience to your first paid render — if you start now', icon: '⏳' },
];

/* ─── AI TRUTH BOMBS ─── */
export const AI_TRUTH = [
  { title: 'AI CAN Render', desc: 'AI generates stunning photorealistic images in seconds. It handles lighting, materials, textures, and post-production — things that used to take hours.', verdict: 'TRUE', color: 'green' },
  { title: 'AI CAN\'T Design', desc: 'AI doesn\'t understand structural integrity, clearances, building codes, client requirements, or spatial logic. It makes beautiful images of impossible buildings.', verdict: 'THE PROBLEM', color: 'red' },
  { title: 'The Hybrid Wins', desc: 'YOU design accurately in AutoCAD + SketchUp. AI handles the rendering. Result: 10x faster output, zero compromise on accuracy. This is the future.', verdict: 'THE SOLUTION', color: 'orange' },
];

/* ─── LOGO ─── */
export const Logo = () => (
  <div className="flex flex-col items-center text-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
    <span className="font-display font-bold text-lg tracking-tight leading-none text-white whitespace-nowrap">Avada</span>
    <span className="text-[9px] font-medium uppercase tracking-widest text-zinc-500 whitespace-nowrap mt-1">Design & Architecture</span>
  </div>
);

/* ─── FLIP CLOCK ─── */
const FlipDigit = ({ value }: { value: string }) => (
  <div className="flip-digit-wrapper"><div className="flip-digit"><span>{value}</span></div></div>
);

/* ─── CTA WIDGET ─── */
export const CallToActionWidget = ({ timeLeft, onClick, headline, subtext }: { timeLeft: { h: number; m: number; s: number }; onClick: () => void; headline?: string; subtext?: string }) => {
  const f = (v: number) => v.toString().padStart(2, '0');
  const h = f(timeLeft.h), m = f(timeLeft.m), s = f(timeLeft.s);
  return (
    <div className="relative py-12 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {headline && <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight">{headline}</h3>}
        {subtext && <p className="text-zinc-400 text-sm mb-6">{subtext}</p>}
        {!headline && <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6">🎨 Holi Offer — Price returns to ₹1,999 when timer ends</p>}
        <div className="flex items-center justify-center gap-1 md:gap-2 mb-6">
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={h[0]} /><FlipDigit value={h[1]} /></div><span className="flip-clock-label">HRS</span></div>
          <span className="text-xl md:text-3xl font-bold text-zinc-600 -mt-4">:</span>
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={m[0]} /><FlipDigit value={m[1]} /></div><span className="flip-clock-label">MIN</span></div>
          <span className="text-xl md:text-3xl font-bold text-zinc-600 -mt-4">:</span>
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={s[0]} /><FlipDigit value={s[1]} /></div><span className="flip-clock-label">SEC</span></div>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <span className="text-xl md:text-2xl font-display font-medium text-zinc-600 line-through">₹1,999</span>
            <span className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">₹999</span>
          </div>
          <p className="text-orange-400 font-semibold text-sm mt-2">50% OFF — This price won't last</p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <button onClick={onClick} className="cta-primary w-full text-white px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-[1.03] active:scale-[0.98] premium-stroke" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', boxShadow: '0 6px 20px -4px rgba(249,115,22,0.5), 0 12px 40px -8px rgba(234,88,12,0.3)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span className="text-lg md:text-xl font-display font-bold uppercase tracking-widest relative z-10">Get Instant Access Now</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">
          <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> 7-Day Money-Back</div>
          <div className="w-[1px] h-3 bg-zinc-700"></div>
          <div className="flex items-center gap-1.5"><Zap size={14} className="text-orange-400" /> Instant Access</div>
          <div className="w-[1px] h-3 bg-zinc-700 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-1.5"><Users size={14} className="text-blue-400" /> Software Included Free</div>
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
      <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3 max-w-xs">
        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center shrink-0"><CheckCircle size={16} className="text-green-400" /></div>
        <div>
          <p className="text-sm font-bold text-white">{j.name} from {j.city}</p>
          <p className="text-xs text-zinc-400">just enrolled • {j.time}</p>
        </div>
      </div>
    </div>
  );
};
