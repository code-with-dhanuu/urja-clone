import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/home';
import {Reg} from '../src/component/Career/Registration';
import OurNetwork from '../src/component/Presence/OurNetwork';
import Contact from '../src/component/Contact/Contact'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      
    },
    {
      path:'/reg',
      element:<Reg/>,
    },
    {
      path:'/Ournetwork',
      element:<OurNetwork/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    }
    
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
