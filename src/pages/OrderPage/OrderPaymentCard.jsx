import Card from "@/components/Card";
import React from "react";

const OrderPaymentCard = ({ order }) => {
  const { totalPrice, paymentMethod, productPrice, deliveryPrice, discountPrice } = order;
  return (
    <Card
      header={
        <>
          총 결제금액: {totalPrice}원
          <br />
          결제 방법: {paymentMethod}
        </>
      }
      data={[
        { term: "메뉴가격", description: `${productPrice}원` },
        { term: "배달료", description: `${deliveryPrice}원` }, // 템플릿 리터럴: 더 최신 문법
        { term: "할인금액", description: <>{discountPrice}원</> },
      ]}
    />
  );
};

export default OrderPaymentCard;
