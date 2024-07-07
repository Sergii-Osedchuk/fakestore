import { useState, useEffect } from 'react';
import Item from '../components/Item';
import classes from './Jewellery.module.css';

const Jewellery = () => {
    const [ jewels, setJewels] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res=>res.json())
      .then(json=>setJewels(json));
  }, []);

  return (
    <ul className={classes.goods}>
      {jewels.map(item => <Item 
          key={item.key} 
          title={item.title} 
          price={item.price} 
          image={item.image}
        />)}
    </ul>
  )
}

export default Jewellery;