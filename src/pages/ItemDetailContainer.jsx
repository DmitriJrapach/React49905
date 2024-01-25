
// import Card from "react-bootstrap/Card";

// import { useGetProductById } from "../hooks/useProducts";
// import { Link, useParams } from "react-router-dom";
// import ItemCount from "../components/ItemCount";
// export const ItemDetailContainer = () => {

//   const { id } = useParams()

//   const {productData} = useGetProductById("products", id)
  
//   return (
//     <Card key={productData.id} style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={productData.thumbnail} />

//       <Card.Body>
//         <Card.Title>{productData.title}</Card.Title>
//         <Card.Text>{productData.description}</Card.Text>       
//         <div>{productData.price}</div>
//         <ItemCount productId={productData.id} />
//         <Link to={`/update-product/${productData.id}`} >Editor producto</Link>
//       </Card.Body>
//     </Card>
//   );
// };

import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import "./ItemDetailContainer.css";
export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { productData } = useGetProductById("products", id);

  // Verificar si la información del producto está disponible
  if (!productData) {
    return <p>Cargando...</p>;
  }

  return (
   <div className="cards">
     <Card key={productData.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.thumbnail} />

      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>       
        <div>{productData.price}</div>
        <ItemCount productId={productData.id} />
        <Link to={`/update-product/${productData.id}`} >Editor producto</Link>
      </Card.Body>
    </Card>
   </div>
  );
};