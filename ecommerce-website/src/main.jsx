import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Shop from './shop/Shop';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from './home/Home';
import Blog from './blog/Blog';
import SingleProduct from './shop/SingleProduct';
import CartPage from './shop/CartPage';
import About from '../src/about/About';
import SingleBlog from './blog/SingleBlog';
import Contact from './contactPage/Contact';
import AuthProvider from "../src/contexts/AuthProvider";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';







const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
       path: '/',
       element: <Home/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "shop/:id",
        element: <SingleProduct/>
      },
      {
        path: "/cart-page",
        element: <PrivateRoute> <CartPage/></PrivateRoute>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      }
    ]
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "sign-up",
    element: <SignUp/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  
)
