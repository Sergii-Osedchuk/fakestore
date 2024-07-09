import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';

const RootLayout = () => {
  const [items, setItems] = useState([]);

  const onIncrement = (id) => {
    let copyItems = [];

    items.forEach(item => {
      if(item.id === id) {
        item.quantity += 1;
      }
      copyItems.push(item);
    });
    setItems(copyItems);
  };

  const onDecrement = (id) => {
   
  }

  return (
    <>
      <Header items={items} onIncrement={onIncrement} onDecrement={onDecrement}/>
      <main>
        <Outlet context={[items, setItems]}/>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout;