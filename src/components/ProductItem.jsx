import React from "react";
import Button from "./Button";

const ProductItem = ({ name, price }) => {
  return (
    <div className="ProductItem">
      <div className="description">
        <h2>{name}</h2>
        <div>{price}</div>
        {/* <button className="Button brand">주문하기</button> */}
        <Button styleType="brand">주문하기</Button>
      </div>
      <div className="thumbnail">
        <img src="./images/menu-고소한바질파스타.jpg" alt="고소한바질파스타 6,000원" />
      </div>
    </div>
  );
};

export default ProductItem;
