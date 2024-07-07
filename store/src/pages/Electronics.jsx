import { useState, useEffect } from 'react';
import Item from '../components/Item';
import classes from './Electronics.module.css';

const Electronics = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res=>res.json())
      .then(json=>setDevices(json));
  }, []);

  return (
    <ul className={classes.goods}>
      {devices.map(item => <Item 
          key={item.key} 
          title={item.title} 
          price={item.price} 
          image={item.image}
        />)}
    </ul>
  )
}

export default Electronics;