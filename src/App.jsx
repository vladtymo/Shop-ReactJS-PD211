import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<p>Home Page!</p>} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/details/:id' element={<ProductInfo />} />
        <Route path='/about' element={<p>About Page!</p>} />
      </Route>
    </Routes>
  );
};
export default App;