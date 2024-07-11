import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [items, setItems] = useOutletContext([]);

  let { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [productId]);

  const onAddItem = () => {
    const newItems = [];

    items.forEach(item => {
      if (item.id === product.id) {
        item.quantity += 1;
      }
      newItems.push(item);
    }
    );
    if (items.filter(item => item.id !== product.id).length === items.length){
      newItems.push({...product, quantity: 1})
    }
    setItems(newItems)
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <h2>{product.description}</h2>
      <p>{product.category}</p>
      <p>{product.price}$</p>
      <button onClick={onAddItem}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
