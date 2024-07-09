const Cart = ({items}) => {
  return (
    <div>
      <h2>In You cart</h2>
      {items.map(item => {
        return (
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.image}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cart;