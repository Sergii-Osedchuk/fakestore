const Cart = ({items, onIncrement, onDecrement, onDelete}) => {
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
    <div>
      <h2>In You cart</h2>
      <div>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.price} $</p>
              <p><img src={item.image} alt={item.title}/></p>
              <div>
                <button onClick={() => onIncrement(item.id)}>+</button>
                <p>{item.quantity}</p>
                <button onClick={() => onDecrement(item.id)}>-</button>
                <p>Total price {item.price*item.quantity}$</p>
                <p onClick={() => onDelete(item.id)}>Del</p>
              </div>
            </li>
          ))}
        </ul>
        <p>Total quantity {onTotalQuantity()}</p>
        <p>Total amount {onTotal()}</p>
        <p>
          <button>Proceed to checkout</button>
        </p>
      </div>
    </div>
  )
}

export default Cart;