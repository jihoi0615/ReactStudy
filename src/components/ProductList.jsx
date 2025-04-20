import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
