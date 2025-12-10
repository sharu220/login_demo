import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("demo-site-uname")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
