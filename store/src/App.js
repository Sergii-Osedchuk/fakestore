import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ErrorPage from './pages/ErrorPage';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <h2>LISA</h2>,
        },
        {
          path: `/products/:productId`,
          element: <ProductDetail />,
        },
        {
          path: '/products',
          element: <Products/>,
        },
        {
          path: '/electronics',
          element: <Products category='electronics'/>,
        },
        {
          path: '/man',
          element: <Products category="men's%20clothing" />
        },
        {
          path: '/woman',
          element: <Products category="women's%20clothing" />
        },{
          path: '/jewellery',
          element: <Products category='jewelery' />
        },
        {
          path: '/contacts',
          element: <Contacts />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
