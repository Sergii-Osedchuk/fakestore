import { useState, useEffect } from 'react';
import classes from './Woman.module.css';
import Item from '../components/Item';

const Woman = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then(res=>res.json())
      .then(json=>setClothes(json));
  }, []);

  return (
    <ul className={classes.goods}>
      {clothes.map(item => 
        <Item 
          key={item.key} 
          title={item.title} 
          price={item.price} 
          image={item.image}
        />
      )}
    </ul>
  )
}

export default Woman;