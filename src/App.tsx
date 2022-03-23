import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import type { ProductType } from './types/product';
import axios from 'axios';
import {add, list,remove} from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Product from './pages/Product';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import ProductAdd from './pages/ProductAdd';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  
  useEffect(() => {
     const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
     }
     getProducts();
  },[])

  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    data && setProducts(products.filter(item => item.id !== data.id));
  }
  const onHandleAdd = async (product:ProductType) =>{
    const {data} = await add(product);
    setProducts([...products,product]);
  }
  return (
    <div className="App">
      
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product page</NavLink></li>
          <li><NavLink to="/about">About page</NavLink></li>
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
         

        </ul>
      </header>
      <main>
        <Routes>
        {/* <Route path="/" element={<h2>Home Page</h2>}></Route>
        <Route path="product" element={<h2>Product Page</h2>}></Route>
          <Route path="about" element={<h2>About Page</h2>}></Route> */}
          <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={< Home />} />
          <Route index element={<Product />} />
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
            <Route index element={< Navigate to="dashboard"/>}/>
            <Route path='dashboard' element={< Dashboard/>}/>
            <Route path='product' element={< ManagerProduct data={products}/>}/>
            <Route path='/admin/product/add' element={<ProductAdd onAdd={onHandleAdd}/>} />
          </Route>

        </Routes>
      </main>
      
    </div>
  )
}

export default App