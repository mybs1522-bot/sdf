import { PricingPlan } from "../types";

// REPLACE THIS WITH YOUR ACTUAL RAZORPAY KEY ID FROM DASHBOARD
const RAZORPAY_KEY_ID = 'rzp_live_Wh4xEHePkQXqRO';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: {
    address?: string;
  };
  theme: {
    color: string;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => any;
  }
}

export const openRazorpayCheckout = (
  plan: PricingPlan,
  phoneNumber: string,
  onSuccess: (paymentId: string) => void,
  onFailure: (error: any) => void
) => {
  if (!window.Razorpay) {
    alert('Razorpay SDK failed to load. Please check your internet connection.');
    onFailure('SDK_NOT_LOADED');
    return;
  }

  // Convert price string (e.g., "₹999") to paise
  const numericPrice = parseInt(plan.price.replace(/[^0-9]/g, ''), 10);
  const amountInPaise = numericPrice * 100;

  const options: RazorpayOptions = {
    key: RAZORPAY_KEY_ID,
    amount: amountInPaise,
    currency: "INR",
    name: "Avada",
    description: `${plan.duration} All-Access Bundle`,
    image: "https://via.placeholder.com/150/f97316/FFFFFF?text=AV",
    handler: function (response: any) {
      console.log("Payment Successful", response);
      onSuccess(response.razorpay_payment_id);
    },
    prefill: {
      contact: phoneNumber,
      name: "Avada Student",
      email: "student@example.com"
    },
    theme: {
      color: "#ea580c"
    }
  };

  try {
    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
      console.error("Payment Failed", response.error);
      onFailure(response.error);
    });
    rzp1.open();
  } catch (error) {
    console.error("Razorpay Error", error);
    onFailure(error);
  }
};
