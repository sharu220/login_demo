import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import ReactPaginate from "react-paginate";

function Inbox() {
  const [message, setMessage] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: `User${item.userId}`,
          title: item.title,
          body: item.body,
        }));
        setMessage(formatted);
      })
      .catch((error) => console.error("Api Error", error));
  }, []);

  // Pagination Logic
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = message.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(message.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % message.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex">
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen w-full mt-14 md:mt-0">
        <h1 className="text-xl md:text-2xl font-bold mb-5">Inbox</h1>

        <div className="bg-white shadow-md rounded-xl divide-y">
          {currentItems.map((msg) => (
            <div
              key={msg.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="font-semibold text-gray-800 text-lg">
                  {msg.title}
                </h2>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">
                  {msg.name}
                </span>
              </div>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {msg.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next ›"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="‹ Prev"
          containerClassName="flex flex-wrap gap-2 mt-6"
          pageClassName="px-3 py-1 border rounded-lg bg-white text-sm"
          activeClassName="bg-blue-500 text-white"
          previousClassName="px-3 py-1 border rounded-lg bg-white text-sm"
          nextClassName="px-3 py-1 border rounded-lg bg-white text-sm"
        />
      </div>
    </div>
  );
}

export default Inbox;
