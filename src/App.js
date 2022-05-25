
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';

import MyOrders from './Pages/Dashboard/MyOrders';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/Dashboard/Users';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          {/* <Route path='review' element={<Reviews></Reviews>}></Route> */}
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>


        </Route>

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
