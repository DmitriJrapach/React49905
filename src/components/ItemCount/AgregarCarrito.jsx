
const agregarAlCarrito = (count, stock, onAdd) => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };
  
  export default agregarAlCarrito;