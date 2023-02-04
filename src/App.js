import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Modals from './pages/Modals';
import ProductModal from './pages/ProductModal';

function App() {
  return (
    <div className="App">
      <Link to="/login">登入</Link> | 
      <Link to="/dashboard">Dashboard</Link> |
      <Link to="/modal/product">Product Modal</Link>
      
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/modal" element={<Modals/> }>
          <Route path='product' element={<ProductModal/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
