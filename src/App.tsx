
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));

const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
};

export default App;
