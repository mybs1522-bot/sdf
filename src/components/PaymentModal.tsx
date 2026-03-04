
import React, { useState, useEffect } from 'react';
import { X, Check, Loader2, Timer, Mail, ShieldCheck, ArrowRight, Download, Phone } from 'lucide-react';
import { Course } from '../types';
import { COURSES, PRICING_PLANS } from '../constants';
import { submitPhoneNumber } from '../services/mockBackend';

// --- CONFIGURATION ---
const RAZORPAY_KEY_ID = 'rzp_live_Wh4xEHePkQXqRO';

declare global {
    interface Window {
        Razorpay?: new (options: any) => any;
    }
}

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialCourse?: Course | null;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
    const [viewState, setViewState] = useState<'LOADING' | 'FORM' | 'PROCESSING' | 'SUCCESS'>('LOADING');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState({ h: 2, m: 14, s: 30 });

    useEffect(() => {
        if (isOpen) {
            resetModal();
        }
    }, [isOpen]);

    const resetModal = () => {
        setViewState('LOADING');
        setEmail('');
        setPhone('');
        setErrorMessage(null);
        setTimeout(() => { setViewState('FORM'); }, 600);
    };

    useEffect(() => {
        if (!isOpen) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isOpen]);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    const handleRazorpayPay = async () => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError(true);
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        const cleanPhone = phone.replace(/\s/g, '');
        if (!cleanPhone || !/^\+?\d{10,13}$/.test(cleanPhone)) {
            setPhoneError(true);
            setErrorMessage("Please enter a valid mobile number.");
            return;
        }
        setEmailError(false);
        setPhoneError(false);
        setErrorMessage(null);

        if (!window.Razorpay) {
            setErrorMessage("Payment gateway failed to load. Please refresh the page.");
            return;
        }

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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md transition-opacity duration-300" onClick={onClose} />

            <div className="relative w-full max-w-[1000px] bg-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[680px] animate-[popScale_0.3s_cubic-bezier(0.16,1,0.3,1)]">

                {/* SIDEBAR (Desktop) */}
                <div className="hidden md:flex w-[42%] bg-gray-900 text-white p-10 flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-8 text-brand-success bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                            <ShieldCheck size={14} className="text-brand-success" /> <span className="text-[10px] font-bold uppercase tracking-widest text-white">Secure Payment</span>
                        </div>

                        <h2 className="text-3xl font-display font-bold leading-tight mb-2 tracking-tight">Download Your<br />6 Courses Now</h2>
                        <div className="text-sm font-medium text-gray-400 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Instant download. Keep forever. Start earning more today.
                        </div>

                        <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-white/10">
                            <span className="text-5xl font-black text-white tracking-tighter">₹999</span>
                            <span className="text-xl text-gray-500 line-through font-medium">₹1,999</span>
                        </div>

                        <div className="space-y-5">
                            {[
                                'Download all 6 courses instantly',
                                '70+ hours of premium training',
                                '10,000+ textures & 3D models included',
                                'Start earning ₹1,50,000+/month more'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-200">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-primary/20">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 pt-6">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <p className="text-sm text-gray-300 italic mb-3">"I was skeptical, but 60 days later I went from ₹60,000/month to ₹3,50,000/month in freelance income. Best ₹999 I've ever spent."</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center text-xs font-bold">VJ</div>
                                <span className="text-xs font-bold text-white">Vikram J., Architect — Hyderabad</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 bg-white flex flex-col relative h-full">
                    <div className="px-6 md:px-8 py-4 md:py-5 border-b border-gray-100 flex items-center justify-between shrink-0 z-20 bg-white">
                        <div className="flex flex-col">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-none mb-1">Secure Checkout</h3>
                            <div className="md:hidden flex items-center gap-1.5 bg-brand-success/10 px-2 py-0.5 rounded-full w-fit">
                                <ShieldCheck size={12} className="text-brand-success" />
                                <span className="text-[10px] font-black uppercase tracking-wider text-brand-success">Secure Payment</span>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors"><X size={20} /></button>
                    </div>

                    <div className="flex-1 px-6 md:px-8 py-6 overflow-y-auto custom-scrollbar">
                        {(viewState === 'FORM' || viewState === 'PROCESSING') && (
                            <div className="space-y-6">
                                {/* Mobile Only Download Banner */}
                                <div className="md:hidden text-[11px] font-black text-brand-primary uppercase tracking-[0.25em] mb-4 text-center bg-brand-primary/5 py-3 rounded-xl border border-brand-primary/10 shadow-sm">
                                    ⚡ Download All 6 Courses + 10,000 Assets Instantly
                                </div>

                                {/* Summary Block */}
                                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Order Summary</span>
                                        <div className="flex items-center gap-2 text-xs font-bold text-brand-primary bg-brand-primary/5 px-3 py-1.5 rounded-lg border border-brand-primary/20 shadow-sm">
                                            <Timer size={16} className="animate-pulse" />
                                            <span className="font-mono tabular-nums tracking-widest text-sm">
                                                {formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        {COURSES.map((c) => (
                                            <div key={c.id} className="flex items-center gap-2 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                                                    <img src={c.imageUrl} className="w-full h-full object-cover" alt={c.title} />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-[10px] font-bold text-gray-900 leading-tight truncate">{c.title}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Secure Delivery Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(false); setErrorMessage(null); }} placeholder="name@example.com" className={`block w-full pl-12 pr-4 py-4 bg-gray-50 border-2 text-sm font-bold rounded-xl focus:border-brand-primary focus:bg-white outline-none transition-all ${emailError ? 'border-red-500 bg-red-50' : 'border-gray-100'}`} />
                                    </div>
                                </div>

                                {/* Mobile Number Input */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Mobile Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value); setPhoneError(false); setErrorMessage(null); }} placeholder="+91 98765 43210" className={`block w-full pl-12 pr-4 py-4 bg-gray-50 border-2 text-sm font-bold rounded-xl focus:border-brand-primary focus:bg-white outline-none transition-all ${phoneError ? 'border-red-500 bg-red-50' : 'border-gray-100'}`} />
                                    </div>
                                </div>

                                {/* Error */}
                                {errorMessage && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">
                                        ⚠ {errorMessage}
                                    </div>
                                )}
                            </div>
                        )}

                        {viewState === 'SUCCESS' && (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-4">
                                    <Check size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                                <p className="text-gray-500 text-sm">Redirecting to your courses...</p>
                                <Loader2 className="animate-spin text-brand-primary mt-4" size={24} />
                            </div>
                        )}
                    </div>

                    {/* Footer Button */}
                    {(viewState === 'FORM' || viewState === 'PROCESSING') && (
                        <div className="p-6 md:p-8 border-t border-gray-100 bg-white shrink-0">
                            <button onClick={handleRazorpayPay} disabled={viewState === 'PROCESSING'} className="w-full py-3 sm:py-4 bg-brand-primary text-white rounded-xl font-black text-sm sm:text-lg uppercase tracking-widest sm:tracking-[0.2em] shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 sm:gap-3 transition-all active:scale-[0.98]">
                                {viewState === 'PROCESSING' ? <Loader2 className="animate-spin" /> : <><Download size={18} className="sm:w-5 sm:h-5" /> Download Courses • ₹999</>}
                            </button>
                            <p className="text-center text-[10px] text-red-500 font-bold mt-3 uppercase tracking-widest">🎨 Holi Offer — Price returns to ₹1,999 when timer ends</p>
                            <div className="flex items-center justify-center gap-4 mt-4 opacity-50">
                                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5"><ShieldCheck size={12} className="text-brand-success" /> 256-Bit SSL Secured Checkout</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
