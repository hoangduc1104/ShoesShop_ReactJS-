import './App.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import ExplorePage from './pages/explore';
import Layout from './pages/layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>

      <Route element={<Layout />}>
        <Route path={'/'} element={<HomePage />}></Route>
        <Route path={'/detail'} element={<ExplorePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
