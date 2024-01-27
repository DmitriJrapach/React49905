import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProductsByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { id } = useParams();

  const { productsData } = useGetProductsByCategory(id);
  console.log("productsData:", productsData);
  return <ItemListContainer productsData={productsData} />;
};
