import classes from './Cart.module.css';

const Cart = ({items, onIncrement, onDecrement, onDelete, onCartHandler}) => {

  const onTotal = () => {
    let summ = 0;
    items.forEach(item => summ += item.quantity * item.price);

    return summ;
  }

  const onTotalQuantity = () => {
    let quantity = 0;
    items.forEach(item => quantity += item.quantity);

    return quantity;
  }

  return (
    <>
      <div className={classes.modal} onClick={onCartHandler}></div>
      <div className={classes.wraper}>
        <div className={classes.titleWrapper}>
          <h2>You chose this products</h2>
          <button onClick={onCartHandler} className={classes.close}>X</button>
        </div>
        <div>
          <ul className={classes.cart}>
            {items.map(item => (
              <li key={item.id} className={classes.cartItem}>
                <h2 className={classes.title}>{item.title}</h2>
                <p className={classes.price}>Price {item.price}$</p>
                <p><img src={item.image} alt={item.title} className={classes.picture}/></p>
                <div className={classes.buttonWraper}>
                  <button onClick={() => onIncrement(item.id)} className={classes.buttons}>+</button>
                  <p className={classes.quantity}>{item.quantity}</p>
                  <button onClick={() => onDecrement(item.id)} className={classes.buttons}>-</button>
                  <p className={classes.value}>Total value {(item.price*item.quantity).toFixed(2)}$</p>
                  <button onClick={() => onDelete(item.id)} className={classes.delete}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.totalWraper}>
            <div className={classes.total}>
              <p>Total products quantity - {onTotalQuantity()}</p>
              <p>Total price of all products - {(onTotal()).toFixed(2)} $</p>
            </div>
            <p>
              <button className={classes.proceed}>Buy</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;