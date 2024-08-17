import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main/Main';
import Home from './Page/Home/Home';
import Menu from './Menu/Menu';


import {  HelmetProvider } from 'react-helmet-async';
import OrderMainpage from './Order/OrderMainpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/order',
        element:<OrderMainpage></OrderMainpage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
<div className='max-w-screen-xl mx-auto'>
<RouterProvider router={router} ></RouterProvider>
</div>
</HelmetProvider>
  </StrictMode>,
)
