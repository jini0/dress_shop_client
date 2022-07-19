import './App.css';
import About from './components/About';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main/index';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Shop from './components/Shop';
import Aside from './include/Aside';
import ScrollToTop from './components/ScrollToTop';
import Join from './components/Join';
import DetailDress from './components/DetailDress';
import Cart from './components/Cart';
import Search from 'antd/lib/transfer/search';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header/>
      <Aside/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/' element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Join/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<DetailDress/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/shop' element={<Search/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
