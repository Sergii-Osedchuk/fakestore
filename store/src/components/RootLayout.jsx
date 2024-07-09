import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';

const RootLayout = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <Header items={items}/>
      <main>
        <Outlet context={[items, setItems]}/>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout;