import './App.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import Layout from './pages/layout';
import Detail from './pages/detail';
import UserPage from './pages/user';
import SearchPage from './pages/search';
import SignupPage from './pages/signup';
import UpdateCart from './pages/updateCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>

        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/search'} element={<SearchPage />}></Route>
          <Route path={'/user'} element={<UserPage />}></Route>
          <Route path={'/detail/:productId'} element={<Detail />}></Route>
          <Route
            path={'update/detail/:orderID'}
            element={<UpdateCart />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
