import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, CartProvider, ProductProvider } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
