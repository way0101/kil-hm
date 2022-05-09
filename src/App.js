import './App.css';
import { Routes, Route,} from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react'
import PrivateRoute from './route/PrivateRoute'



//1. 전체상품페이지, 로그인 상품상세페이지
//2. 전체상품페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//3. 상품디테일을 눌렀으나, 로그인이 안되었을 경우 로그인 페이지로 간다.
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일페이지를 볼수없다, 다시 로그인 페이지가 보인다.
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false) // true면 로그인이 됨 false면 로그인이 안됨..

  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
