import React from "react";
import Button from "./Button";
import OpenModalButton from "@/components/Modal/OpenModalButton";

const ProductItem = ({ onClick, product }) => {
  const { name, price, thumbnail } = product; // 구조 분해 할당한 후 객체로 사용 가능
  // const handleClick = () => {
  //   //부모에서 화살표 함수로 함수 선언
  //   console.log("버튼이 클릭되었습니다!");
  // };

  return (
    <div className="ProductItem">
      <div className="description">
        <h2>{name}</h2>
        <div>{price}원</div>
        {/* <button className="Button brand">주문하기</button> */}
        {onClick && (
          <Button styleType="brand" onClick={onClick}>
            {/* 자식에게 줄 함수에 콜백함수(부모 함수)로 전달하기 */}
            주문하기
          </Button>
        )}
        {/* <OpenModalButton /> */}
      </div>
      <div className="thumbnail">
        <img src={thumbnail} alt={`${name} ${price}원`}></img>
        {/* <img src="./images/menu-고소한바질파스타.jpg" alt="고소한바질파스타 6,000원" /> */}
      </div>
    </div>
  );
};
// 요구사항: 장바구니로 이동하는 버튼 만들기
// 장바구니로 이동하는 버튼은 다른 로직에 만들기
export default ProductItem;
