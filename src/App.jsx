import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ProductItem from "./components/Productitem";
import Button from "./components/Button";
import axios from "axios";

// const fakeProducts = [
//   {
//     id: "CACDA421",
//     name: "해물 계란 라면",
//     price: "6000",
//     thumbnail: "./images/menu-해물계란라면.jpg",
//   },
//   {
//     id: "CACDA422",
//     name: "고소한 바질 파스타",
//     price: "7000",
//     thumbnail: "./images/menu-고소한바질파스타.jpg",
//   },
//   {
//     id: "CACDA423",
//     name: "치즈버거",
//     price: "5500",
//     thumbnail: "./images/menu-치즈버거.jpg",
//   },
//   {
//     id: "CACDA424",
//     name: "후라이드 치킨",
//     price: "12000",
//     thumbnail: "./images/menu-후라이드치킨.jpg",
//   },
//   {
//     id: "CACDA425",
//     name: "불고기 비빔밥",
//     price: "8000",
//     thumbnail: "./images/menu-불고기비빔밥.jpg",
//   },
// ];

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const refined = res.data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        }));
        setProducts(refined);
      })
      .catch((err) => {
        console.error("상품 데이터를 불러오는데 실패했습니다.", err);
      });
  }, []);

  return (
    <div className="ProductPage">
      <div className="Page">
        <header>
          <Title>메뉴 목록</Title>
        </header>
        <main>
          <ul>
            <li>
              {products.map(
                (
                  product // jsx에서는 리턴값 무조건 (소괄호) 사용
                ) => (
                  <li key={product.id}>
                    <ProductItem product={product} />
                  </li>
                )
              )}
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
