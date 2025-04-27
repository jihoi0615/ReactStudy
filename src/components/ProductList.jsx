import ProductItem from "@/components/ProductItem";
import OrderableProductItem from "@/pages/ProductPage/OrderableProductItem";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <OrderableProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
