
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"; 
import agregarAlCarrito from '../ItemCount/AgregarCarrito.jsx';
import './ItemListContainer.css';

const ItemListContainer = ({ productsData }) => {
  return (
      <div  className="cards">
        {productsData.map((products) => {
          return (
            <Card key={products.id} style={{ width: "18rem", margin: 10 }} >
              <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                {products.description}
                </Card.Text>
                <div>{products.price}</div>
                <ItemCount stock={15} initial={1} onAdd={agregarAlCarrito}/>              
              </Card.Body>
            </Card>
          );
        })}
      </div>
  );
};

export default ItemListContainer;
