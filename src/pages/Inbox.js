import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";

function Inbox() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const formated = data.map((item) => ({
          id: item.id,
          name: `User${item.userId}`,
          message: item.body,
          time: "Just Now",
        }));  
        setMessage(formated);
      })
      .catch((error) => console.error("Api Error", error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen w-full ">
        <h1 className="text-2xl font-bold mb-5">Inbox</h1>

        <div className="bg-white shadow-md rounded-xl divide-y">
          {message.map((msg) => (
            <div
              key={msg.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition "
            >
              <h2 className="font-semibold text-gray-800">{msg.name}</h2>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{msg.message}</span>
                <p className="text-sm text-gray-500">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inbox;
