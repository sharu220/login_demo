import React from "react";
import { Sidebar } from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex items-center justify-center ">
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
