import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import toast from "react-hot-toast";

export function DefaultTable() {
  // PRODUCT LIST
  const [products, setProducts] = useState([]);

  // ADD / EDIT MODAL
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // DELETE MODAL
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // FETCH PRODUCTS (FAKE API)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => {
        const cleaned = data.map((item) => ({
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
        }));
        setProducts(cleaned);
      });
  }, []);

  // OPEN EDIT MODAL
  const handleEdit = (product) => {
    setEditId(product.id);
    setTitle(product.title);
    setCategory(product.category);
    setPrice(product.price);
    setOpen(true);
  };

  // OPEN DELETE MODAL
  const confirmDelete = (id) => {
    setDeleteId(id);
    setDeleteOpen(true);
  };

  // DELETE PRODUCT
  const deleteProduct = () => {
    const result = products.filter((item) => item.id !== deleteId);
    setProducts(result);
    setDeleteOpen(false);
    toast.success("Product deleted");
  };

  // ADD / UPDATE PRODUCT
  const saveProduct = () => {
    if (!title || !category || !price) {
      toast.error("All fields are required");
      return;
    }

    if (editId) {
      const updated = products.map((item) =>
        item.id === editId ? { ...item, title, category, price } : item
      );

      setProducts(updated);
      toast.success("Product updated");
    } else {
      const newItem = {
        id: Date.now(),
        title,
        category,
        price,
      };
      setProducts([...products, newItem]);
      toast.success("Product added");
    }

    // reset
    setEditId(null);
    setTitle("");
    setCategory("");
    setPrice("");
    setOpen(false);
  };

  return (
    <div className="w-full">
      {/* ADD PRODUCT BUTTON */}
      <div className="flex justify-end mb-4">
        <Button
          size="sm"
          className="white-blue-600"
          onClick={() => {
            setEditId(null);
            setTitle("");
            setCategory("");
            setPrice("");
            setOpen(true);
          }}
        >
          + Add Product
        </Button>
      </div>

      {/* TABLE WRAPPER (mobile scroll) */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3 capitalize">{item.category}</td>
                <td className="px-4 py-3">${item.price}</td>
                <td className="px-4 py-3 flex gap-3 justify-center">
                  <button
                    className="text-blue-600 font-medium"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="text-red-600 font-medium"
                    onClick={() => confirmDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD / EDIT MODAL */}
      <Dialog open={open} handler={handleOpen} size="sm">
        <DialogHeader>{editId ? "Edit Product" : "Add Product"}</DialogHeader>
        <DialogBody className="space-y-4">
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" onClick={handleOpen}>
            Cancel
          </Button>
          <Button className="bg-blue-600" onClick={saveProduct}>
            {editId ? "Update" : "Add"}
          </Button>
        </DialogFooter>
      </Dialog>

      {/* DELETE CONFIRMATION */}
      <Dialog open={deleteOpen} handler={() => setDeleteOpen(false)} size="xs">
        <DialogHeader>Confirm Delete</DialogHeader>
        <DialogBody>Are you sure you want to delete this product?</DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" onClick={() => setDeleteOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-red-600" onClick={deleteProduct}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
