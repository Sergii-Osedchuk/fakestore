import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Item from '../components/Item';
import classes from './Electronics.module.css';

const Electronics = () => {
  const [devices, setDevices] = useState([]);
  const [items, setItems] = useOutletContext([]);

  const onAddItem = (item) => {
    const newItemIndex = devices.findIndex(device => device.id === item.id);

    const newIndex = items.findIndex(item => item.id === devices[newItemIndex].id);

    if (newIndex === -1) {
      const newItem = devices[newItemIndex];
      newItem.quantity = 1;
      setItems(prev => [...prev, newItem])
    } 
    if(newIndex !== -1) {
      setItems(prev => ([...prev.filter(item => item.id !== prev[newIndex].id), {...prev[newIndex], quantity: prev[newIndex].quantity + 1}]) )
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res => res.json())
      .then(json => setDevices(json));
  }, []);

  return (
    <ul className={classes.goods}>
      {devices.map(item => <Item 
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

export default Electronics;