import classes from '../components/Item.module.css';

const Item = ({title, price, image}) => {
  return (
    <div className={classes.good}>
      <img src={image} alt='clothes'/>
      <p className={classes.price}>{title}</p>
      <p className={classes.price}>{price} $</p>
      <button type='text' className={classes.add}>Add to Cart</button>
    </div>
  )
}

export default Item;