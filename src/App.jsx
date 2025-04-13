import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ProductItem from "./components/Productitem";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="ProductPage">
      <div className="Page">
        <header>
          <Title>메뉴 목록</Title>
        </header>
        <main>
          <ul>
            <li>
              <ProductItem name="고소한 바질 파스타" price="6,000원"></ProductItem>
              <ProductItem name="김밥이 고소한 천국" price="6,000원"></ProductItem>
              <Button styleType="brand">주문하기</Button>
              <Button styleType="brand-solid">주문하기</Button>
            </li>
          </ul>
        </main>
        <footer>
          <Navbar />
        </footer>
      </div>
    </div>
  );
};

export default App;
