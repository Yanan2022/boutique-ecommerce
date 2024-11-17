import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import { About, Commande, Contact, Home, Login, MainLayout, Panier, Register, Shop } from './pages';

function App() {

  const routers = useMemo(() => createBrowserRouter([
    {
      path: '/',
      element: (
        <MainLayout />
      ),
      errorElement: <div>Page non trouvée</div>,
      children: [
        {
          path:'',
          element: <Home />,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'about',
          element:<About />,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'shop',
          element:<Shop/>,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'panier',
          element:<Panier />,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'commande',
          element:<Commande />,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'contactez-nous',
          element:<Contact />,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'login',
          element:<Login />,
          errorElement:<div>Page non trouvée</div>,
        },
        {
          path:'register',
          element:<Register />,
          errorElement:<div>Page non trouvée</div>,
        }
      ],
    },

  ]), []);

  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
