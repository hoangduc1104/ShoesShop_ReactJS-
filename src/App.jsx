import './App.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import ExplorePage from './pages/explore';
import Layout from './pages/layout';
import Detail from './pages/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/user'} element={<ExplorePage />}></Route>
          <Route path={'/detail'} element={<Detail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
