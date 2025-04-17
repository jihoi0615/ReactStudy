import React, { useEffect, useState } from "react";
import axios from "axios";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";

const ProductPage = () => {
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
      <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
        <ProductList products={products} />
      </Page>
    </div>
  );
};
export default ProductPage;
