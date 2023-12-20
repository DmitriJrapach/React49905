

import React, {useState} from 'react';
import agregarAlCarrito  from './AgregarCarrito.jsx';
import './ItemCount.css';

function ItemCount ({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    const opcionSuma = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    }

    const opcionResta = () => {
        if (count > 1) {
            setCount (count - 1);
        }
    }  

    const manejoCarrito = () => {
        agregarAlCarrito(count, stock, onAdd);
    }

    return (
        <div >
            <p>
                Cantidad disponible : {stock}
            </p>
            <div>
                <button onClick = {opcionResta} className='botones'>-</button>
                <span>{count}</span>
                <button onClick = {opcionSuma} className='botones'>+</button>
            </div>
            <button onClick = {manejoCarrito} className='botones'>Agregar al carrito</button>
        </div>
            
    )
}

export default ItemCount;