import { NavLink } from "react-router-dom";
import { useState } from 'react';
import classes from './Header.module.css';
import Cart from "./Cart";

const Header = ({items, onIncrement, onDecrement, onDelete}) => {
  const [showCart, setShowCart] = useState(false);

  const onCartHandler = () => {
    setShowCart(!showCart);
  }
  return (
    <header>
      <div>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to='/' className={({isActive}) => 
              isActive ? classes.active : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/man' className={({isActive}) => 
              isActive ? classes.active : undefined}>Men`s clothing</NavLink>
            </li>
            <li>
              <NavLink to='/woman' className={({isActive}) => 
              isActive ? classes.active : undefined}>Women`s clothing</NavLink>
            </li>
            <li>
              <NavLink to='/jewellery' className={({isActive}) => 
              isActive ? classes.active : undefined}>Jewellery</NavLink>
            </li>
            <li>
              <NavLink to='/electronics' className={({isActive}) => 
              isActive ? classes.active : undefined}>Electronics</NavLink>
            </li>
            <li>
              <NavLink to='/contacts' className={({isActive}) => 
              isActive ? classes.active : undefined}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <div onClick = {onCartHandler}>{items.length}</div>
        {showCart && items.length > 0 && <Cart items={items} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete}/>}
      </div>
    </header>
  )
}

export default Header;