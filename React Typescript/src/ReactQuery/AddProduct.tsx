import { useMutation } from "@tanstack/react-query";
import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const AddProduct = () => {
  const [formData, setFormData] = React.useState<Product>({
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "number") {
      let value = Number(e.target.value);
      setFormData({ ...formData, [e.target.name]: value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addProductMutation = useMutation({
    mutationFn: async (newProduct: Product) => {
      await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
    },
  });

  return (
    <div>
      <h1 className="title">Add Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProductMutation.mutate(formData);
        }}
      >
        <input
          type="text"
          placeholder="Enter product title"
          name="title"
          value={formData?.title}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="category"
          value={formData?.category}
          placeholder="Enter product Category"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="description"
          value={formData?.description}
          placeholder="Enter product Description"
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="price"
          value={formData?.price}
          placeholder="Enter product Price"
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="id"
          value={formData?.id}
          placeholder="Enter product id"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="image"
          value={formData?.image}
          placeholder="enter image url"
          onChange={onChangeHandler}
        />
        <button type="submit">
          {addProductMutation.isPending ? "Adding..." : "Add Product"}
        </button>
        {addProductMutation.isSuccess && <div>Product added successfully</div>}
      </form>
    </div>
  );
};

export default AddProduct;
