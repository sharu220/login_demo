import React from "react";
import { Sidebar } from "../components/Sidebar";

function Inbox() {
  const messages = [
    {
      id: 1,
      name: "John Doe",
      message: "Your report has been approved.",
      time: "10:45 AM",
    },
    {
      id: 2,
      name: "Admin Team",
      message: "New update available. Please review.",
      time: "09:20 AM",
    },
    {
      id: 3,
      name: "Support",
      message: "Your ticket has been resolved.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
<div className="p-6 bg-gray-100 min-h-screen w-full">
        <h1 className="text-2xl font-bold mb-5">Inbox</h1>

        <div className="bg-white shadow-md rounded-xl divide-y">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition "
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">{msg.name}</h2>
                <span className="text-sm text-gray-500">{msg.time}</span>
              </div>
              <p className="text-gray-600 mt-1">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inbox;
