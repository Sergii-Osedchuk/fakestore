import styles from './Filter.module.css';
// import icon from '../images/search-icon.png';

const Filter = ({inputValue, onChangeHandler}) => {

  return (
    <div className={styles.wraper}>
      {/* <img src={icon} alt='search icon' className={styles.icon}/> */}
      <label htmlFor="search" className={styles.label}>Find your product</label>
      <input 
        type='text' 
        id='search' 
        value = {inputValue} 
        onChange={onChangeHandler}
        className={styles.input}
      ></input>
    </div>
  )
}

export default Filter;