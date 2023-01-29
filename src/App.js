import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Link to="/login">登入</Link>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
