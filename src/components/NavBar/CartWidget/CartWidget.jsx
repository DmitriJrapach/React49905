
import React from 'react';
import './CartWidget.css';

const CarWidget = ({ cantidadEnCarrito }) => {
  return (
    <div>
      <img
        src="src/assets/undraw_shopping_app_flsj.svg"
        alt=""
        className="carrito"
      />
      <span className="numero">{cantidadEnCarrito} 0</span>
    </div>
  );
};

export default CarWidget;
