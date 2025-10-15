import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ShopLocation from './pages/ShopLocation';
import Contact from './pages/Contact';
import RootLayout from './layout/RootLayout';
import ProductLayout from './layout/ProductLayout';
import ProductDetails from './pages/ProductDetails';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="shop-location" element={<ShopLocation />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    ),
    {
      basename: "/snowell-electric", // 👈 This fixes the blank page
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
