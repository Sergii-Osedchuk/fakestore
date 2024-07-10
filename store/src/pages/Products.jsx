import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Item from '../components/Item';
import classes from './Products.module.css';

const Products = ({category}) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useOutletContext([]);

  const onAddItem = (item) => {
    const newItemIndex = products.findIndex(device => device.id === item.id);

    const newIndex = items.findIndex(item => item.id === products[newItemIndex].id);

    if (newIndex === -1) {
      const newItem = products[newItemIndex];
      newItem.quantity = 1;
      setItems(prev => [...prev, newItem])
    } 
    if(newIndex !== -1) {
      setItems(prev => ([...prev.filter(item => item.id !== prev[newIndex].id), {...prev[newIndex], quantity: prev[newIndex].quantity + 1}]) )
    }
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, [category]);

  return (
    <ul className={classes.goods}>
      {products.map(item => <Item 
          key={item.id} 
          title={item.title}
          price={item.price}
          image={item.image}
          item={item}
          onAddItem={onAddItem}
        />)}
    </ul>
  )
}

export default Products;