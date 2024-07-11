import classes from '../components/Item.module.css';
import { useNavigate } from 'react-router-dom';


const Item = ({title, price, image, onAddItem, item}) => {
  const navigate = useNavigate();

  return (
    <div className={classes.good}>
      <img src={image} alt='clothes' onClick={() => navigate(`/products/${item.id}`)}/>
      <p className={classes.price}>{title}</p>
      <p className={classes.price}>{price} $</p>
      <button type='text' className={classes.add} onClick={() => onAddItem(item)}>Add to Cart</button>
    </div>
  )
}

export default Item;