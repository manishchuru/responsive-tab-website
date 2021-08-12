import React, { Profiler } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navlink from './Navlink';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/Login';
import News from './Pages/News';
import Profile from './Pages/Profile';
import './Route.css';
import Tabe from './Tabe';
const Navbar = () => {
    return (
        <div>
           <Router className='back'>
           <Navlink/>
           <div className="middle">
           <h1>Save big. Dream bigger.</h1>
           <h4>Save 25% on Creative Cloud and get 20+ apps, including <br /> Photoshop, to make anything you can imagine. Ends Aug 13.</h4>
            <a href=""><h5>See times</h5></a>
            <button className='btn-danger danger'>buy now</button>
           </div>
           <Tabe/>
           <div className="route">
           <Route exact path ='/' component={About}></Route>
           <Route path ='/home' component={Home}></Route>
           <Route path ='/news' component={News}></Route>
           <Route path ='/profile' component={Profile}></Route>
           <Route path ='/login' component={Login}></Route>
           </div>
           </Router> 
        </div>
    );
}

export default Navbar;
