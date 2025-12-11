import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Title", "Category", "Price", "Actions"];

export function DefaultTable() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // For form fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // For editing: store the product being edited (null means add mode)
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  // Open modal in "Add" mode
  const openAddModal = () => {
    setEditingProduct(null);
    setTitle("");
    setCategory("");
    setPrice("");
    setOpen(true);
  };

  // Open modal in "Edit" mode with prefilled data
  const openEditModal = (product) => {
    setEditingProduct(product);
    setTitle(product.title);
    setCategory(product.category);
    setPrice(product.price);
    setOpen(true);
  };

  // Handle add or edit submit
  const handleSubmit = () => {
    if (!title || !category || !price) {
      alert("Please fill all fields");
      return;
    }

    if (editingProduct) {
      // EDIT existing product with PUT
      fetch(`https://dummyjson.com/products/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          price: parseFloat(price),
        }),
      })
        .then((res) => res.json())
        .then((updatedProduct) => {
          // Update the product in local state
          setProducts((prev) =>
            prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
          );
          setOpen(false);
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to update product");
        });
    } else {
      // ADD new product
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          price: parseFloat(price),
        }),
      })
        .then((res) => res.json())
        .then((newProduct) => {
          setProducts((prev) => [...prev, newProduct]);
          setOpen(false);
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to add product");
        });
    }
  };

  return (
    <div className="p-4">
      {/* Add Product Button */}
      <Button onClick={openAddModal} color="blue" className="mb-4">
        + Add Product
      </Button>

      {/* Modal for Add/Edit */}
      <Dialog open={open} handler={handleOpen} size="sm">
        <DialogHeader>
          {editingProduct ? "Edit Product" : "Add Product"}
        </DialogHeader>

        <DialogBody divider>
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
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
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-2"
          >
            Cancel
          </Button>

          <Button variant="gradient" color="green" onClick={handleSubmit}>
            {editingProduct ? "Update" : "Add"}
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Products Table */}
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => {
              const isLast = index === products.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={p.id}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {p.title}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {p.category}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      ${p.price}
                    </Typography>
                  </td>

                  <td className={`${classes} flex gap-4`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue"
                      className="font-medium cursor-pointer"
                      onClick={() => openEditModal(p)}
                    >
                      Edit
                    </Typography>

                    <Typography
                      as="a"
                      variant="small"
                      color="red"
                      className="font-medium cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
