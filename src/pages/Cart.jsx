import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const { count } = useContext(CartContext);

  const idList = count.map((item) => item.id);

  useEffect(() => {
    const db = getFirestore();
    const fetchProducts = async () => {
      try {
        const productPromises = idList.map(async (id) => {
          const docRef = doc(db, "products", id);
          const docSnapshot = await getDoc(docRef);
          return { id: docSnapshot.id, ...docSnapshot.data() };
        });

        const productData = await Promise.all(productPromises);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (idList.length > 0) {
      fetchProducts();
    }
  }, [count]);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            {product.thumbnail && (
              <img
                src={product.thumbnail}
                alt={`${product.title} thumbnail`}
                className="card-img-top"
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};