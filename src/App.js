import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Layout from './pages/components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Market from './pages/Market';
import Registration from './pages/Registration';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='market' element={<Market/>}></Route>
    <Route path='cart' element={<Cart/>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='registration' element={<Registration/>}></Route>
    <Route path='account' element={<Account/>}></Route>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;