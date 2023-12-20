
import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount"; 
import agregarAlCarrito from '../components/ItemCount/AgregarCarrito.jsx';

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { productData } = useGetProductById(productId);

  return (
    <div >
    <Card key={productData.id} style={{ width: "18rem", margin: 10 }} className="cards">
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
          <div>{productData.price}</div>
        <ItemCount stock={15} initial={1} onAdd={agregarAlCarrito}/>  
      </Card.Body>
    </Card>
    </div>
  );
};
