import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ProductProvider } from './context/ProductContext';

ReactDOM.render(
  <BrowserRouter>
   <ProductProvider>
    <App />
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
