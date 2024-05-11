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
import SoftwareHome from './pages/SoftwareHome';
import Welcome from './pages/Welcome';
import Payment from './pages/PaymentPage';
import Success from './pages/success';
import StockManager from './pages/stockManager';
import AdminPage from './pages/adminPage';
import PaymentAdd from './pages/PaymentAdd';
import View from './pages/View';
import Edit from './pages/Edit';
import Logs from './pages/logs';
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/stockManager" element={<StockManager/>}/>
        <Route exact path ="/adminpage" element={<AdminPage/>}/>
        <Route exact path ="/softwareHome" element={<SoftwareHome/>}/>
        <Route exact path ="/hardwareHome" element={<HardwareHome/>}/>
        <Route exact path ="/PaymentPage" element={<Payment/>}/>
        <Route excat path ="/login" element={<Login/>}/>
        <Route excat path ="/AboutUs" element={<AboutUs/>}/>
        <Route excat path="/welcome" element={<Welcome />} />
        <Route excat path="/success" element={<Success />} />
        <Route excat path="/PaymentAdd" element={<PaymentAdd />} />        
        <Route exact path ="/aboutUs" element={<AboutUs/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/logs" element={<Logs />} />
        <Route exact path="/Cart" element={<Cart />} />


        <Route exact path ="/adduser" element={<AddUser/>}/>
        <Route exact path ="/edituser/:id" element={<EditUser/>}/>
        <Route exact path ="/viewuser/:id" element={<ViewUser/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
