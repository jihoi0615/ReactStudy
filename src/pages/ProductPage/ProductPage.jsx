import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";

const ProductPage = () => {
  const { data: products = [], isSuccess, isLoading, isError } = useProducts();
  useEffect(() => {
    if (isSuccess) {
      alert("상품을 성공적으로 불러왔어요!");
    }
  }, [isSuccess]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>상품 데이터를 불러오는데 실패했습니다.</div>;
  return (
    <div className="ProductPage">
      <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
        <ProductList products={products} />
      </Page>
    </div>
  );
};
export default ProductPage;
