
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

import AllOrders from './Pages/Dashboard/AllOrders';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Protfolio from './Pages/Portfolio/Portfolio';
import Payment from './Pages/Dashboard/Payment';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>

        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio/' element={<Protfolio></Protfolio>}></Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route index element={<MyProfile></MyProfile>}></Route>

          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='allOrder' element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>


        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
