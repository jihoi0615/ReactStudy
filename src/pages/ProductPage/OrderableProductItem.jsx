import ProductItem from "@/components/ProductItem";
import React from "react";

const OrderableProductItem = ({ product }) => {
  const handleClick = () => {
    console.log("장바구니 화면 이동");
  };
  // 1. habdleClick => console.log(추후 장바구니 만들기)
  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductItem;
