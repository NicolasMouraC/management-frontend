import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Header from "../components/Layout/Header";
import { useEffect, useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/auth') {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-full">
      {showHeader && <Header />}
      <div className="h-full flex flex-col justify-center items-center gap-10 sm:px-[40px]">
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
