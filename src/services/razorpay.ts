import { PricingPlan } from "../types";

export const SELAR_CHECKOUT_URL = 'https://selar.com/73518502d1';

export const openSelarCheckout = ({
  email,
  name,
  currency = 'NGN',
  baseUrl = SELAR_CHECKOUT_URL
}: {
  email: string;
  name?: string;
  currency?: string;
  baseUrl?: string;
}) => {
  const params = new URLSearchParams();
  params.set('quickcheckout', '1');
  if (email) params.set('email', email);
  if (name) params.set('fullname', name);
  if (currency) params.set('currency', currency);

  const checkoutUrl = `${baseUrl}?${params.toString()}`;
  if (typeof window !== 'undefined') {
    window.location.href = checkoutUrl;
  }
};

export const openRazorpayCheckout = (
  plan: PricingPlan,
  phoneNumber: string,
  onSuccess: (paymentId: string) => void,
  onFailure: (error: any) => void
) => {
  openSelarCheckout({ email: '', baseUrl: SELAR_CHECKOUT_URL });
};
