
import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {

  // Setear titulo de pagina
  useEffect(() => {
    document.title = "Mi tienda online - Home";
  })

    const { productsData } = useGetProducts(10);


  return (
    <ItemListContainer productsData={productsData} />
  )
}
