import React from "react";
import { Sidebar } from "../components/Sidebar";

function Settings() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-500">Settings</h1>

        <div className="space-y-6 max-w-2xl">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
