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
import HardwareHome from './pages/HardwareHome';
import SoftwareHome from './pages/SoftwareHome';
import Welcome from './pages/Welcome';
import Payment from './pages/PaymentPage';
import Success from './pages/success';
import StockManager from './pages/stockManager';
import AdminPage from './pages/adminPage';
import PaymentAdd from './pages/PaymentAdd';

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
        <Route excat path="/welcome" element={<Welcome />} />
        <Route excat path="/success" element={<Success />} />
        <Route excat path="/PaymentAdd" element={<PaymentAdd />} />        

        <Route excat path ="/adduser" element={<AddUser/>}/>
        <Route excat path ="/edituser/:id" element={<EditUser/>}/>
        <Route excat path ="/viewuser/:id" element={<ViewUser/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
