
import {Route , Routes} from 'react-router'
import './App.css'
import {  AdminDashboard } from './components/AdminDashboard';
import { Admin } from './components/Admin';
import { Home } from './components/Home';
import { Job } from './components/Job';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ="/login" element = {<Login/>}/>
          <Route path ="/jobs" element = {  <Job/>} />
          <Route path ="/admin_dashboard" element = {<AdminDashboard/>}/>
          <Route path ="/admin" element = {<Admin/>}/>

        </Routes>
    </div>
  );
}


export default App;
