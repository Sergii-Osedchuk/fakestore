import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';

const RootLayout = () => {
  const [items, setItems] = useState([]);

  const onIncrement = (id) => {
    let newItems = [];

    items.forEach(item => {
      if(item.id === id) {
        item.quantity += 1;
      }
      newItems.push(item);
    });
    setItems(newItems);
  };

  const onDecrement = (id) => {
    let newItems = [];

    items.forEach(item => {
      if(item.id === id) {
        item.quantity -= 1;
      }
      newItems.push(item);
    });
    newItems = newItems.filter(item => item.quantity !== 0);
    setItems(newItems);
  } 

  const onDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <>
      <Header 
        items={items} 
        onIncrement={onIncrement} 
        onDecrement={onDecrement} 
        onDelete={onDelete}
      />
      <main>
        <Outlet context={[items, setItems]}/>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout;