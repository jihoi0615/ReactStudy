import React from "react";
import apiClient from "./apiClient";

export const fetchProducts = async () => {
  const { data } = await apiClient.get("/products");
  const refined = data.products.map((product) => ({
    id: product.id,
    name: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  }));
  return refined;
};
