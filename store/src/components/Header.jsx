import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
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
    </header>
  )
}

export default Header;