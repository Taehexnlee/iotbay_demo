import logo from './logo.svg';
import './App.css';
import './config/axiosConfig';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import HardwareHome from './pages/HardwareHome';
import SoftwareHome from './pages/SoftwareHome';
import Welcome from './pages/Welcome';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/hardwareHome" element={<HardwareHome/>}/>
        <Route exact path ="/softwareHome" element={<SoftwareHome/>}/>
        <Route exact path ="/aboutUs" element={<Edit/>}/>
        <Route excat path ="/login" element={<Login/>}/>
        <Route excat path="/welcome" element={<Welcome />} />
        <Route excat path="/edit" element={<Edit />} />

        <Route excat path ="/adduser" element={<AddUser/>}/>
        <Route excat path ="/edituser/:id" element={<EditUser/>}/>
        <Route excat path ="/viewuser/:id" element={<ViewUser/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
