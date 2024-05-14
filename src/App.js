import './App.css';
import './config/axiosConfig';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import HardwareHome from './pages/HardwareHome';
import Welcome from './pages/Welcome';
import AccountPage from './pages/AccountPage';
import Success from './pages/success';
import StockManager from './pages/stockManager';
import AdminPage from './pages/adminPage';
import PaymentAdd from './pages/PaymentAdd';
import View from './pages/View';
import Edit from './pages/Edit';
import Logs from './pages/logs';
import PaymentHistory from './pages/PaymentHistory';
import PaymentDetail from './pages/PaymentDetail';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import EditShipping from './shipping/EditShipping';
import AddShipping from './shipping/AddShipping';
import ViewShipping from './shipping/ViewShipping';
import Address from './pages/Address';
import ShipmentHistory from './pages/shipmentHistory';
import HistoryBranch from './pages/historyBranch';
import AddProduct from "./pages/AddProduct";
import EditOrder from "./pages/EditOrder";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/stockManager" element={<StockManager/>}/>
        <Route exact path ="/adminpage" element={<AdminPage/>}/>
        <Route exact path ="/hardwareHome" element={<HardwareHome/>}/>
        <Route exact path ="/accountPage" element={<AccountPage/>}/>
        <Route excat path ="/login" element={<Login/>}/>
        <Route excat path ="/AboutUs" element={<AboutUs/>}/>
        <Route excat path="/welcome" element={<Welcome/>}/>
        <Route excat path="/success" element={<Success/>}/>
        <Route excat path="/PaymentAdd" element={<PaymentAdd/>}/>        
        <Route exact path ="/aboutUs" element={<AboutUs/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path="/welcome" element={<Welcome/>}/>
        <Route exact path="/view" element={<View/>}/>
        <Route exact path="/edit" element={<Edit/>}/> 
        <Route exact path="/logs" element={<Logs/>}/>
        <Route exact path="/paymentHistory" element={<PaymentHistory/>}/>
        <Route exact path="/paymentDetail" element={<PaymentDetail/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/OrderHistory" element={<OrderHistory/>}/>
        <Route exact path="/historyBranch" element={<HistoryBranch/>}/>
        <Route exact path="/shipmentHistory" element={<ShipmentHistory/>}/>
        <Route exact path="/AddProduct" element={<AddProduct/>}/>

        <Route path="/EditOrder/:orderId/edit" element={<EditOrder />} />

        <Route exact path="/address" element={<Address/>}/>
        <Route exact path='/addaddress' element={<AddShipping/>}/>
        <Route path="/address/view/:id" element={<ViewShipping />}/>
        <Route path="/address/edit/:id" element={<EditShipping />}/>



        <Route exact path ="/adduser" element={<AddUser/>}/>
        <Route exact path ="/edituser/:id" element={<EditUser/>}/>
        <Route exact path ="/viewuser/:id" element={<ViewUser/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
