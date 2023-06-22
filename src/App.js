import { useEffect, useState } from 'react';
import './App.css';

import { getCategories} from './fetcher';

import { BrowserRouter ,Route,Routes } from 'react-router-dom';

import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
import OrderComfirmation from './components/OrderComfirmation';
import SearchResults from './components/SearchResults';

function App() {
  const [categories,setCategories]=useState({errorMessage:'',data:[]})
 
 
  useEffect(()=>{
    const fetchData = async ()=>{
      
      const responseObject=await getCategories()
      setCategories(responseObject)
    }
   fetchData()
  },[])






  

  

  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout categories={categories} />}>

        <Route index element={<Home />} />

      <Route path='/basket' element={<Basket />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/categories/:categoryId/products/:productId' element={<ProductDetail />}/>
      <Route path='/orderconfirmation' element={< OrderComfirmation />}/> 
      <Route path='/categories/:categoryId' element={<Category />}/>
      <Route path='/search' element={<SearchResults />} />
      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
