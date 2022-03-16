import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import type { ProductType } from './types/product';
import axios from 'axios';
import {list,remove} from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Product from './pages/Product';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
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
  return (
    <div className="App">
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table>
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
            <Route path='product' element={< ManagerProduct/>}/>
          </Route>

        </Routes>
      </main>
      
    </div>
  )
}

export default App