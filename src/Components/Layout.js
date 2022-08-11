import React from "react";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <AppBar />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
