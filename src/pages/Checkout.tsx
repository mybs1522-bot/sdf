
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';
import { submitPhoneNumber } from '../services/mockBackend';

// --- CONFIGURATION ---
const RAZORPAY_KEY_ID = 'rzp_live_Wh4xEHePkQXqRO';

declare global { interface Window { Razorpay?: new (options: any) => any; } }

/* ═══ Inline SVG Icons ═══ */
const IC = {
    Check: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={c}><polyline points="20 6 9 17 4 12" /></svg>,
    ArrowL: ({ s = 16, ...p }: { s?: number } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>,
    ArrowR: ({ s = 16, ...p }: { s?: number } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
    Shield: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
    Lock: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    Mail: ({ s = 18, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
    Loader: ({ s = 22, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`animate-spin ${c}`}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>,
    Download: ({ s = 18, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    User: ({ s = 16, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    Star: ({ s = 12, ...p }: { s?: number } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={1}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    Clock: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    Sparkles: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" /></svg>,
    Heart: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
    Zap: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    Award: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
    BookOpen: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
    Users: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    BadgeCheck: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.77 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" /><path d="m9 12 2 2 4-4" /></svg>,
    CheckCircle2: ({ s = 14, c = "", ...p }: { s?: number; c?: string } & React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={c}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>,
};

/* ═══ Animated Number ═══ */
const AnimatedNumber: React.FC<{ target: number; prefix?: string }> = ({ target, prefix = '' }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const start = performance.now();
        const step = (ts: number) => { const p = Math.min((ts - start) / 1200, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
    }, [target]);
    return <span>{prefix}{count.toLocaleString()}</span>;
};

/* ═══ Checkout Testimonials ═══ */
const CHECKOUT_TESTIMONIALS = [
    { name: 'Arjun K.', role: 'Architecture Student', location: 'Mumbai', content: 'Went from zero SketchUp knowledge to delivering a full walk-through for my thesis in 3 weeks. The project-based approach is unmatched.' },
    { name: 'Priya M.', role: 'Interior Designer', location: 'Bangalore', content: 'Was paying agencies ₹50,000 per render. Now I produce better 3D walkthroughs myself. Paid for itself on the first project.' },
    { name: 'Vikram J.', role: 'Freelance Architect', location: 'Hyderabad', content: 'I was skeptical, but 60 days later I went from ₹60,000/month to ₹3,50,000/month in freelance income. Best ₹999 I\'ve ever spent.' },
    { name: 'Sneha R.', role: 'Real Estate Developer', location: 'Pune', content: 'The V-Ray + Lumion courses alone are worth 100x the price. My property renders now look magazine-quality.' },
    { name: 'Rohan M.', role: 'Design Student', location: 'Delhi', content: 'The AI rendering module blew my mind. I produce photorealistic concepts in minutes now. My professors think I hired a studio.' },
    { name: 'Fatima N.', role: 'Junior Architect', location: 'Jaipur', content: 'Finally understand the full pipeline from AutoCAD drafting to cinematic renders. Got my first freelance client within 2 weeks.' },
];

/* ═══════════════════════════════════════════════════════════════════════ */
export const Checkout = () => {
    const navigate = useNavigate();
    const [viewState, setViewState] = useState<'LOADING' | 'FORM' | 'PROCESSING' | 'SUCCESS'>('LOADING');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState({ h: 2, m: 14, s: 30 });
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const emailInputRef = useRef<HTMLInputElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const fmt = (v: number) => v.toString().padStart(2, '0');

    useEffect(() => { requestAnimationFrame(() => setIsVisible(true)); }, []);
    useEffect(() => { window.scrollTo(0, 0); }, []);

    useEffect(() => { setViewState('LOADING'); setTimeout(() => setViewState('FORM'), 500); }, []);

    // Timer
    useEffect(() => {
        const calc = () => { const D = (3 * 60 * 60 * 1000) + (36 * 60 * 1000) + (20 * 1000); const r = D - (Date.now() % D); setTimeLeft({ h: Math.floor((r / (1000 * 60 * 60)) % 24), m: Math.floor((r / (1000 * 60)) % 60), s: Math.floor((r / 1000) % 60) }); };
        const t = setInterval(calc, 1000); calc();
        return () => clearInterval(t);
    }, []);

    // Testimonial rotation
    useEffect(() => {
        const t = setInterval(() => setActiveTestimonial(p => (p + 1) % CHECKOUT_TESTIMONIALS.length), 6000);
        return () => clearInterval(t);
    }, []);

    // Gallery autoslide
    useEffect(() => {
        const interval = setInterval(() => {
            if (galleryRef.current) {
                const isEnd = galleryRef.current.scrollLeft + galleryRef.current.clientWidth >= galleryRef.current.scrollWidth - 10;
                if (isEnd) galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                else galleryRef.current.scrollBy({ left: 160, behavior: 'smooth' });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const validateEmail = (): boolean => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError(true);
            if (emailInputRef.current) { emailInputRef.current.style.animation = 'shakeX 0.4s ease'; setTimeout(() => { if (emailInputRef.current) emailInputRef.current.style.animation = ''; }, 400); }
            return false;
        }
        setEmailError(false); return true;
    };

    const handleRazorpayPay = async () => {
        if (!validateEmail()) return;
        const cleanPhone = phone.replace(/\s/g, '');
        if (!cleanPhone || !/^\+?\d{10,13}$/.test(cleanPhone)) {
            setPhoneError(true);
            setErrorMessage("Please enter a valid mobile number.");
            return;
        }
        setPhoneError(false);
        if (!window.Razorpay) {
            setErrorMessage("Payment gateway failed to load. Please refresh the page.");
            return;
        }
        setErrorMessage(null);

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: 99900, // ₹999 in paise
            currency: "INR",
            name: "Avada",
            description: "Complete Bundle — All 6 Courses",
            image: "https://via.placeholder.com/150/f97316/FFFFFF?text=AV",
            handler: function (response: any) {
                console.log("Payment Successful", response);
                setViewState('SUCCESS');
                submitPhoneNumber(email, 'razorpay-success');

                // Trigger order confirmation email silently
                try {
                    fetch("https://dhufnozehayzjlsmnvdl.supabase.co/functions/v1/send-order-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, orderId: response.razorpay_payment_id })
                    }).catch(err => console.error("Email trigger failed:", err));
                } catch (e) { }

                setTimeout(() => { window.location.href = "https://architect.systeme.io/courses"; }, 2000);
            },
            prefill: {
                name: name,
                email: email,
                contact: phone.replace(/\s/g, ''),
            },
            theme: {
                color: "#ea580c"
            },
            modal: {
                ondismiss: function () {
                    setViewState('FORM');
                }
            }
        };

        try {
            setViewState('PROCESSING');
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response: any) {
                console.error("Payment Failed", response.error);
                setErrorMessage(response.error?.description || "Payment failed. Please try again.");
                setViewState('FORM');
            });
            rzp.open();
        } catch (error: any) {
            console.error("Razorpay Error", error);
            setErrorMessage("Payment gateway error. Please try again.");
            setViewState('FORM');
        }
    };

    /* ═══ LOADING ═══ */
    if (viewState === 'LOADING') return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999]" style={{ background: '#FDFAF6' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.05em', color: '#f97316', animation: 'pulseSoft 2s infinite' }}>AVADA</div>
            <div className="w-24 h-0.5 mt-4 rounded overflow-hidden" style={{ background: '#e2e8f0' }}><div className="w-full h-full" style={{ background: '#f97316', animation: 'slide 1.5s infinite ease-in-out', transformOrigin: 'left' }} /></div>
        </div>
    );

    /* ═══ SUCCESS ═══ */
    if (viewState === 'SUCCESS') return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#FDFAF6' }}>
            <div className="text-center max-w-md" style={{ animation: 'popScale 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', boxShadow: '0 0 30px rgba(249,115,22,0.3)' }}><IC.Check s={36} c="text-white" /></div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk'", color: '#1e293b' }}>Payment Successful!</h2>
                <p className="text-sm" style={{ color: '#64748b' }}>Redirecting to your courses...</p>
                <IC.Loader s={20} c="text-orange-500 mx-auto mt-4" />
            </div>
        </div>
    );

    /* ═══ MAIN LAYOUT ═══ */
    return (
        <div className={`checkout-page min-h-screen bg-gradient-to-br from-[#FDFAF6] via-white to-[#F8F5F0] transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

            {/* === AMBIENT BACKGROUND === */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/40 to-amber-50/30 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/30 to-emerald-50/20 rounded-full blur-[100px]" />
            </div>

            {/* === STICKY HEADER === */}
            <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100/60 shadow-[0_1px_20px_rgba(0,0,0,0.03)]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 grid grid-cols-3 items-center">
                    <div className="flex justify-start">
                        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors group">
                            <IC.ArrowL s={16} /><span className="hidden sm:inline">Back</span>
                        </button>
                    </div>
                    <div className="flex justify-center whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            <span className="font-display font-black text-lg tracking-tight text-gray-900 uppercase" style={{ fontFamily: "'Space Grotesk'" }}>AVADA</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Secure Checkout</span>
                        </div>
                    </div>
                    <div className="flex justify-end" />
                </div>
            </div>

            {/* === BREADCRUMB === */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 hidden lg:block">
                <div className="flex items-center justify-center gap-3 text-xs font-semibold">
                    <span className="text-gray-400 flex items-center gap-1"><IC.CheckCircle2 s={12} c="text-emerald-500" /> Cart</span>
                    <span className="text-gray-300">›</span>
                    <span className="text-gray-900 flex items-center gap-1"><div className="w-5 h-5 bg-gray-900 text-white rounded-full flex items-center justify-center text-[10px] font-black">2</div> Checkout</span>
                    <span className="text-gray-300">›</span>
                    <span className="text-gray-300 flex items-center gap-1"><IC.Download s={12} /> Access</span>
                </div>
            </div>

            {/* === MAIN LAYOUT === */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-10">

                {/* ═══ TOP SECTION: Hero + Courses (mobile only, ultra-compact) ═══ */}
                <div className={`text-center lg:text-left mb-3 lg:mb-0 lg:hidden transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="mb-2">
                        <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-orange-100 mb-1">
                            <IC.Sparkles s={10} />50% OFF — Limited
                        </div>
                        <h1 className="text-xl font-black text-gray-900 leading-[1.15] tracking-tight" style={{ fontFamily: "'Space Grotesk'" }}>
                            Start Designing & Rendering Today
                        </h1>
                    </div>
                    <div ref={galleryRef} className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                        {COURSES.map(c => (
                            <div key={c.id} className="flex-shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-gray-200 text-[9px] font-bold text-gray-600" style={{ scrollSnapAlign: 'start' }}>
                                <img src={c.imageUrl} className="w-5 h-5 rounded object-cover" alt={c.title} />{c.title.split(' ').slice(0, 2).join(' ')}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══ 2-COLUMN (desktop) / stacked (mobile) ═══ */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* ═══ LEFT COLUMN: Desktop hero + courses + testimonials + guarantee ═══ */}
                    <div className={`flex-1 lg:max-w-[58%] space-y-8 text-center lg:text-left order-2 lg:order-1 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                        {/* Hero (Desktop only) */}
                        <div className="hidden lg:block space-y-4">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-600 text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-orange-100 shadow-sm">
                                <IC.Sparkles s={13} c="animate-pulse" /><span>50% OFF — Limited Bundle</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-[1.1] tracking-tight" style={{ fontFamily: "'Space Grotesk'" }}>
                                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Start Designing &<br />Rendering Today</span>
                            </h1>
                            <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                                6 complete courses — from AutoCAD to AI rendering. Everything you need to produce cinematic walkthroughs and win ₹15,00,000 projects.
                            </p>
                        </div>

                        {/* Courses Gallery (Desktop) */}
                        <div className="hidden lg:block">
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-400">Courses Included</p>
                            <div className="grid grid-cols-3 gap-2.5">
                                {COURSES.map((c, i) => (
                                    <div key={c.id} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100" style={{ animation: `fadeSlideUp 0.4s ease-out ${0.06 * i}s both` }}>
                                        <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-gray-100"><img src={c.imageUrl} className="w-full h-full object-cover" alt={c.title} /></div>
                                        <span className="text-xs font-bold leading-tight line-clamp-2 text-gray-600">{c.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[0.15em] flex items-center gap-2 justify-center lg:justify-start">
                                <IC.Heart s={15} c="text-red-400" /> What students are saying
                            </h3>
                            <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: '180px' }}>
                                {CHECKOUT_TESTIMONIALS.map((t, i) => (
                                    <div key={i} className={`transition-all duration-500 ease-in-out ${i === activeTestimonial ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute inset-0'}`}>
                                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                            <div className="flex gap-1 mb-4 justify-center lg:justify-start">{[...Array(5)].map((_, j) => <IC.Star key={j} s={14} style={{ color: '#f59e0b' }} />)}</div>
                                            <p className="text-gray-700 text-sm leading-relaxed italic mb-4">"{t.content}"</p>
                                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm shadow-md">{t.name[0]}</div>
                                                <div className="text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-bold text-gray-900">{t.name}</span>
                                                        <div className="flex items-center gap-1 bg-green-50 text-green-600 text-[8px] font-black uppercase px-1.5 py-0.5 rounded border border-green-100"><IC.CheckCircle2 s={8} /> Verified</div>
                                                    </div>
                                                    <span className="text-[11px] text-gray-400 font-semibold">{t.role} • {t.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center gap-1.5 flex-wrap">
                                {CHECKOUT_TESTIMONIALS.map((_, i) => (
                                    <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-5 bg-gray-900' : 'w-1.5 bg-gray-200 hover:bg-gray-300'}`} />
                                ))}
                            </div>
                        </div>

                        {/* Guarantee */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 bg-gradient-to-r from-emerald-50/80 to-green-50/50 rounded-2xl border border-emerald-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0"><IC.Shield s={22} c="text-emerald-600" /></div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">7-Day Money-Back Guarantee</h4>
                                <p className="text-xs text-gray-500 leading-relaxed mt-1">If the courses don't transform your design workflow, we'll refund you — no questions asked.</p>
                            </div>
                        </div>
                    </div>

                    {/* ═══ RIGHT COLUMN: PAYMENT FORM (STICKY) ═══ */}
                    <div className={`w-full lg:w-[42%] lg:max-w-[420px] order-1 lg:order-2 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="lg:sticky lg:top-20">

                            <div className="bg-white rounded-t-3xl border border-gray-100/80 shadow-[0_8px_60px_rgba(0,0,0,0.06)] overflow-hidden">
                                {/* What You Get */}
                                <div className="px-4 py-3 lg:px-6 lg:py-5 border-b border-gray-100 bg-white">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-2 lg:mb-3 flex items-center gap-2">
                                        <IC.Zap s={13} c="text-orange-500" /> What You Get
                                    </h3>
                                    {/* Desktop: full list */}
                                    <div className="hidden lg:block space-y-2">
                                        {[
                                            { label: '6 Complete Architecture Courses', icon: IC.BookOpen },
                                            { label: '70+ Hours of Training', value: '₹1,50,000+', icon: IC.Award },
                                            { label: '10,000+ Textures & 3D Models', value: '₹41,000', icon: IC.Users },
                                            { label: 'Mentor Support & Certificate', value: '₹16,000', icon: IC.BadgeCheck },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between py-1.5">
                                                <div className="flex items-center gap-2.5">
                                                    <item.icon s={13} c="text-orange-500" />
                                                    <span className="text-[13px] font-medium text-gray-700">{item.label}</span>
                                                </div>
                                                {item.value && <span className="text-xs font-medium text-gray-400 line-through">{item.value}</span>}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Mobile: compact 2-col grid */}
                                    <div className="lg:hidden grid grid-cols-2 gap-x-3 gap-y-1">
                                        {[
                                            { label: '6 Courses', icon: IC.BookOpen },
                                            { label: '70+ Hours', icon: IC.Award },
                                            { label: '10K+ Assets', icon: IC.Users },
                                            { label: 'Certificate', icon: IC.BadgeCheck },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-1.5 py-1">
                                                <item.icon s={11} c="text-orange-500" />
                                                <span className="text-[11px] font-medium text-gray-600">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Summary — Liquid Glass Glow */}
                                <div className="relative overflow-hidden rounded-xl mx-1 my-1" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 40%, #f97316 70%, #fb923c 100%)' }}>
                                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.05) 50%, transparent 65%)', }} />
                                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
                                    <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)' }} />

                                    <div className="relative z-10 px-5 py-4 text-white text-center">
                                        <div className="flex items-center justify-center gap-2 mb-3 text-xs font-semibold text-white/80">
                                            <IC.Clock s={12} c="text-white" />
                                            <span>Offer ends in</span>
                                            <span className="font-mono font-black text-white text-sm px-2.5 py-0.5 rounded-md" style={{ background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(4px)' }}>{fmt(timeLeft.h)}:{fmt(timeLeft.m)}:{fmt(timeLeft.s)}</span>
                                        </div>
                                        <div className="flex items-baseline justify-center gap-2.5">
                                            <span className="text-3xl lg:text-4xl font-black drop-shadow-sm">₹999</span>
                                            <span className="text-base lg:text-lg text-white/50 line-through">₹1,999</span>
                                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>Save 50%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Form */}
                                <div className="px-5 py-4 lg:px-6 lg:py-5 space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 block text-gray-500">Name</label>
                                        <div className="relative">
                                            <IC.User s={15} c="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                                                className="block w-full pl-10 pr-4 py-3 text-sm rounded-lg outline-none transition-all bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 block text-gray-500">Contact E-mail</label>
                                        <div className="relative">
                                            <IC.Mail s={15} c={`absolute left-3.5 top-1/2 -translate-y-1/2 ${emailError ? 'text-red-500' : 'text-gray-400'}`} />
                                            <input ref={emailInputRef} type="email" value={email}
                                                onChange={e => { setEmail(e.target.value); setEmailError(false); setErrorMessage(null); }}
                                                placeholder={emailError ? 'Enter valid email' : 'name@example.com'}
                                                className={`block w-full pl-10 pr-4 py-3 text-sm rounded-lg outline-none transition-all ${emailError ? 'bg-red-50 border border-red-500 text-red-600' : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'}`} />
                                        </div>
                                    </div>

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 block text-gray-500">Mobile Number</label>
                                        <div className="relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${phoneError ? 'text-red-500' : 'text-gray-400'}`}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            <input type="tel" value={phone}
                                                onChange={e => { setPhone(e.target.value); setPhoneError(false); setErrorMessage(null); }}
                                                placeholder={phoneError ? 'Enter valid number' : '+91 98765 43210'}
                                                className={`block w-full pl-10 pr-4 py-3 text-sm rounded-lg outline-none transition-all ${phoneError ? 'bg-red-50 border border-red-500 text-red-600' : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'}`} />
                                        </div>
                                    </div>

                                    {/* Error */}
                                    {errorMessage && (
                                        <div className="p-3.5 rounded-xl flex items-start gap-3 bg-red-50 border border-red-200" style={{ animation: 'shakeX 0.4s ease' }}>
                                            <span className="text-red-400 mt-0.5 text-sm">⚠</span>
                                            <div>
                                                <p className="text-sm font-bold text-red-600">{errorMessage}</p>
                                                <button onClick={() => setErrorMessage(null)} className="text-xs mt-1 underline text-red-400">Dismiss</button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <div className="px-5 py-4 lg:px-6 border-t border-gray-100">
                                    <button onClick={handleRazorpayPay} disabled={viewState === 'PROCESSING'}
                                        className="w-full py-4 rounded-lg text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 hover:bg-orange-600 bg-orange-500 shadow-md">
                                        {viewState === 'PROCESSING' ? <IC.Loader s={18} c="text-white" /> : <><span>Get Instant Access — ₹999</span><IC.Download s={16} /></>}
                                    </button>
                                    <p className="text-center text-[10px] font-medium mt-2 text-gray-500">🎨 Holi Offer — Price returns to ₹1,999 when timer ends</p>
                                    <div className="flex items-center justify-center gap-4 mt-2">
                                        <div className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-gray-400"><IC.Shield s={9} c="text-orange-500" /> 7-Day Refund</div>
                                        <div className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-gray-400"><IC.Lock s={9} c="text-orange-500" /> 256-Bit SSL</div>
                                        <div className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-gray-400"><IC.Clock s={9} c="text-orange-500" /> Instant Access</div>
                                    </div>
                                    {/* Payment Method Badges */}
                                    <div className="flex flex-wrap items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-100">
                                        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Pay via</span>
                                        <span className="px-2 py-0.5 rounded bg-green-50 border border-green-200 text-[9px] font-bold text-green-600">UPI</span>
                                        <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[9px] font-bold text-blue-600">Cards</span>
                                        <span className="px-2 py-0.5 rounded bg-purple-50 border border-purple-200 text-[9px] font-bold text-purple-600">Net Banking</span>
                                        <span className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[9px] font-bold text-amber-600">EMI</span>
                                    </div>
                                </div>

                                {/* Footer Social Proof */}
                                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-50 rounded-b-3xl">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="flex -space-x-2">
                                            {['AK', 'PM', 'VJ'].map((initials, i) => (
                                                <div key={i} className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold shadow-sm ${i === 0 ? 'bg-orange-200 text-orange-700' : i === 1 ? 'bg-gray-300 text-gray-700' : 'bg-gray-900 text-white'}`}>{initials}</div>
                                            ))}
                                        </div>
                                        <div className="text-[11px]">
                                            <span className="font-bold text-gray-900"><AnimatedNumber target={23847} /> students</span>
                                            <span className="text-gray-400 ml-1">enrolled across India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Guarantee below card (desktop) */}
                            <div className="hidden lg:flex items-center justify-center gap-2 mt-5 text-[11px] font-semibold text-gray-400">
                                <IC.Shield s={13} c="text-emerald-500" /><span>7-day money-back guarantee • No questions asked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* === BOTTOM TRUST BAR (Mobile) === */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-4px_30px_rgba(0,0,0,0.05)]">
                <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 shrink-0">
                        <IC.Shield s={16} c="text-emerald-500" />
                        <div>
                            <div className="text-[11px] font-bold text-gray-900">Money-Back Guarantee</div>
                            <div className="text-[9px] text-gray-400 font-semibold">7 days • No risk</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400"><IC.Lock s={10} /> <IC.Shield s={10} /></div>
                </div>
            </div>
            <div className="lg:hidden h-20" />

            <style>{`
                @keyframes shakeX { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 50%{transform:translateX(6px)} 75%{transform:translateX(-3px)} }
                @keyframes pulseSoft { 0%,100%{opacity:1} 50%{opacity:0.5} }
                @keyframes slide { 0%{transform:translateX(-100%)} 50%{transform:translateX(0)} 100%{transform:translateX(100%)} }
                @keyframes popScale { from{transform:scale(0.8);opacity:0} to{transform:scale(1);opacity:1} }
                @keyframes fadeSlideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
                .checkout-page input::placeholder { opacity: 0.5; }
                .checkout-page *::-webkit-scrollbar { display: none; }
                .checkout-page * { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};
