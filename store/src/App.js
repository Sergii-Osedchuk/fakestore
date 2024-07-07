import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Contacts from './pages/Contants';
import Electronics from './pages/Electronics';
import Man from './pages/Man';
import Woman from './pages/Woman';
import Jewellery from './pages/Jewellery';

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
          path: '/electronics',
          element: <Electronics />
        },
        {
          path: '/man',
          element: <Man />
        },
        {
          path: '/woman',
          element: <Woman />
        },{
          path: '/jewellery',
          element: <Jewellery />
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
