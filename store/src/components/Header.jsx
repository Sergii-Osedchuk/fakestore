import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={({isActive}) => 
            isActive ? classes.active : classes.notActive}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/' className={({isActive}) => 
            isActive ? classes.active : classes.notActive}>Men`s clothing</NavLink>
          </li>
          <li>
            <NavLink to='/' className={({isActive}) => 
            isActive ? classes.active : classes.notActive}>Women`s clothing</NavLink>
          </li>
          <li>
            <NavLink to='/' className={({isActive}) => 
            isActive ? classes.active : classes.notActive}>Jewellery</NavLink>
          </li>
          <li>
            <NavLink to='/' className={({isActive}) => 
            isActive ? classes.active : classes.notActive}>Electronics</NavLink>
          </li>
          <li>
            <NavLink to='/contacts'>Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;