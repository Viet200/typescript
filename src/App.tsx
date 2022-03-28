import { useEffect, useState } from 'react'
import type { ProductType } from './types/product';
import axios from 'axios';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Product from './pages/Product';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import ManagerProduct from './pages/ManagerProduct';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { UserType } from './types/users';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    data && setProducts(products.filter(item => item.id !== data.id));
  }
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, product]);
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map((item) => (item.id == data.id ? data : item)));

    }
    const onHandleSignup = async (signup:UserType)=>{
      const {data}= await Add(signup);
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
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={< Home />} />
            <Route index element={<Product />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>}/>
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<ManagerProduct data={products} />} />
            <Route path="product/add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path="product/:id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />}/>
          </Route>

        </Routes>
      </main>

    </div>
  )
}

export default App;