import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// 後台頁面
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCoupons from './pages/admin/AdminCoupons'
import AdminOrders from './pages/admin/AdminOrders';
import Login from './pages/Login';
// 前台頁面
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Products from './pages/front/Products';
import ProductDeatil from './pages/front/ProductDeatil';

// import axios from 'axios';

function App() {
  useEffect(()=>{

    (async ()=>{
      // console.log(process.env.REACT_APP_API_URL,process.env.REACT_APP_API_PATH)
      // const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products/all`)
      // console.log('res',res.data)
      // const {products} = res.data
      // console.log(products)
    })()
  },[])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route path="" element={<Home/>}></Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='product/:id' element={<ProductDeatil/>}></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route path='products' element={<AdminProducts/>}></Route>
          <Route path='coupons' element={<AdminCoupons/>}></Route>
          <Route path='orders' element={<AdminOrders/>}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
