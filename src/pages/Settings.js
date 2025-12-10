import React from "react";
import { Sidebar } from "../components/Sidebar";

function Settings() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 bg-gray-100 min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Settings</h1>

        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Profile Settings Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Profile Settings
            </h2>

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Save Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Save Profile
              </button>
            </div>
          </div>

          {/* Password Settings */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Change Password
            </h2>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Confirm new password"
                />
              </div>

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-black transition">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
