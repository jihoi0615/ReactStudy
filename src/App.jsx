import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ProductItem from "./components/Productitem";
import Button from "./components/Button";

const fakeProducts = [
  {
    id: "CACDA421",
    name: "해물 계란 라면",
    price: "6000",
    thumbnail: "./images/menu-해물계란라면.jpg",
  },
  {
    id: "CACDA422",
    name: "고소한 바질 파스타",
    price: "7000",
    thumbnail: "./images/menu-고소한바질파스타.jpg",
  },
  {
    id: "CACDA423",
    name: "치즈버거",
    price: "5500",
    thumbnail: "./images/menu-치즈버거.jpg",
  },
  {
    id: "CACDA424",
    name: "후라이드 치킨",
    price: "12000",
    thumbnail: "./images/menu-후라이드치킨.jpg",
  },
  {
    id: "CACDA425",
    name: "불고기 비빔밥",
    price: "8000",
    thumbnail: "./images/menu-불고기비빔밥.jpg",
  },
];

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
              {fakeProducts.map((product) => (
                <li key={product.id}>
                  <ProductItem product={product} />
                </li>
              ))}
              ;
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
