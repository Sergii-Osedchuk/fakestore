import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Contacts from './pages/Contants';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <h2>LISA</h2>
        },
        {
          path: '/products',
          element: <h2>LISA is my daughter</h2>
        },
        {
          path: '/contacts',
          element: <Contacts />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
