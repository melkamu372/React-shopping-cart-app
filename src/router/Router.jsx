import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home'
import Shop from '../pages/store/shop'

const baseUrl = '/';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: baseUrl,
      element:<Home />,
    },
    {
      path: `${baseUrl}/shop`,
      element: <Shop />,
    },
  ]);

  return <div><RouterProvider router={router} /></div>;
};

export default Router;