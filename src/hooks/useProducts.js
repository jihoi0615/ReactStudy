// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsAPI";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts, // API 호출
    // key값에 데이터가 캐싱돼있음 -> 그럼 서버말고 자동으로 저장되있던 key 값가져옴
  });
};

export default useProducts;
