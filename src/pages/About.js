import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";

function About() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email,
        }));
        setMessage(formatted);
      })
      .catch((error) => console.error("Error in API", error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {message.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {message.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-white shadow rounded-lg flex justify-between"
              >
                <span className="font-semibold">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
