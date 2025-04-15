import React from "react";

const Button = ({ styleType, children, onClick }) => {
  let className = "Button";
  if (styleType) {
    className += ` ${styleType}`; // 속성을 받기 위해서는 백틱 앞에 띄어쓰기
    // (Button.brand) => (Button brand)로 인식
    // 에러가 안 날때는 콘솔 찍어서 props에 값 잘 들어갔는지 확인
  }
  return (
    // 위 Button에서 props 열고, <button> 자식에서 인자 받고
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
