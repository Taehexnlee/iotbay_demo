import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import AboutUs from './pages/AboutUs';
import HardwareHome from './pages/HardwareHome';
import SoftwareHome from './pages/SoftwareHome';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/hardwareHome" element={<HardwareHome/>}/>
        <Route exact path ="/softwareHome" element={<SoftwareHome/>}/>
        <Route exact path ="/aboutUs" element={<AboutUs/>}/>
       
        

        <Route excat path ="/adduser" element={<AddUser/>}/>
        <Route excat path ="/edituser/:id" element={<EditUser/>}/>
        <Route excat path ="/viewuser/:id" element={<ViewUser/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
