import './App.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import Layout from './pages/layout';
import Detail from './pages/detail';
import UserPage from './pages/user';
import SearchPage from './pages/search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/search'} element={<SearchPage />}></Route>
          <Route path={'/user'} element={<UserPage />}></Route>
          <Route path={'/detail'} element={<Detail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
