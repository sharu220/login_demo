import React from "react";
import { Sidebar } from "../components/Sidebar";
import { DefaultTable } from "../components/DefaultTable ";

function Products() {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-1 p-4 md:p-6 w-full">
        <DefaultTable />
      </div>
    </div>
  );
}

export default Products;
