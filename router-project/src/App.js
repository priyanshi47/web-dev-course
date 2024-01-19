import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [login, setLogin] = useState(false);
  return(
    <div>
<Navbar login = {login} setLogin={setLogin}></Navbar>
<div >


<Routes>
  <Route path="/" element={<Home setLogin={setLogin}/>}></Route>
  <Route path="/login" element={<Login setLogin={setLogin}/>}></Route>
  <Route path="/signup" element={<Signup setLogin={setLogin}/>}></Route>
  <Route path="/dashboard" setLogin={setLogin} element={
    <PrivateRoute login ={login}>
      <Dashboard/>
    </PrivateRoute>
  }></Route>
  <Route path="/contact" setLogin={setLogin} element={<Contact/>}></Route>

<Route path="/about" setLogin={setLogin} element={<About/>}></Route>
</Routes>
</div>
    </div>
  ); 
}

export default App;
