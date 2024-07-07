import { useState, useEffect } from 'react';
import classes from '../pages/Man.module.css';
import Item from '../components/Item';

const Man = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then(res=>res.json())
      .then(json=>setClothes(json));
  }, []);

  return (
    <div>
      <ul className={classes.goods}>
        {clothes.map(item => <Item 
          key={item.key} 
          title={item.title} 
          price={item.price} 
          image={item.image}
        />)}
      </ul>
    </div>
  )
}

export default Man;