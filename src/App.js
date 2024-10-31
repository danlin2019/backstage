import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCoupons from './pages/admin/AdminCoupons'
import Login from './pages/Login';
import Modals from './pages/Modals';
// import ProductModal from './components/ProductModal';
// import DeleteModal from './components/DeleteModal';
// import CouponModal from './pages/CouponModal';
// import Message from './components/Message';
import { useEffect } from 'react';
import axios from 'axios';

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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route path='products' element={<AdminProducts/>}></Route>
          <Route path='coupons' element={<AdminCoupons/>}></Route>
        </Route>
        <Route path='/modal' element={<Modals />}>
          {/* <Route path='/components/product' element={<ProductModal />}></Route> */}
          {/* <Route path='delete' element={<DeleteModal />}></Route> */}
          {/* <Route path='coupon' element={<CouponModal />}></Route> */}
        </Route>
        {/* <Route path='/message' element={<Message />} /> */}
      </Routes>
    </div>
  );
}

export default App;
