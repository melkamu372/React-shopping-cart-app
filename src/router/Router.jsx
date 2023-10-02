import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home';
import Shop from '../pages/store/shop';
import Navbar from '../components/Navbar'

const baseUrl = "/";
const Router = () => {
  const router = createBrowserRouter([
    {
      path:baseUrl,
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop /> },
      ],
    },
  ])

  return <div>
    <RouterProvider router={router} />
    </div>;
};

export default Router;