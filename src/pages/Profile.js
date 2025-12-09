import React from "react";
import { Sidebar } from "../components/Sidebar";

function Profile() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 bg-gray-100 min-h-screen w-full">

        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        <div className="bg-white shadow-md rounded-2xl p-6 max-w-lg mx-auto">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/120"
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-gray-200 shadow"
            />
            <h2 className="text-xl font-semibold mt-4">Sharan Devadiga</h2>
            <p className="text-gray-600 text-sm">Software Developer</p>
          </div>

          {/* Divider */}
          <div className="my-6 border-t"></div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium text-gray-800">sharan@example.com</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium text-gray-800">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-medium text-gray-800">Mangalore, Karnataka</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="w-full py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
