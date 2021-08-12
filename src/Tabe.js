import React from 'react';
import "./tabs.css"
import Tabdata  from './Tabdata';
const Tabe = () => {
    return (
        <div className="container mt-3">
  <h2>Toggleable Tabs</h2>
  <br />
  {/* Nav tabs */}
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#menu3">Menu 3</a>
  </li>
  </ul>
  {/* Tab panes */}
  <div className="tab-content">
    <div id="home" className="container tab-pane active menu1 "><br />
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      {
        Tabdata.map((value)=>{
           return <div className='menuimage ' >
           <img src={value.img}  alt={value.image}  />
           <p>{value.id}</p>
           </div> 
        })
    }
      </div>
    <div id="menu1" className="container tab-pane fade menu2"><br />
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      {
        Tabdata.map((value)=>{
           return <div className='menuimage' >
           <img src={value.img}  alt={value.image}  />
           <p>{value.id}</p>
           </div> 
        })
    }
      </div>
    <div id="menu2" className="container tab-pane fade menu3 "><br />
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      {
        Tabdata.map((value)=>{
           return <div className='menuimage' >
           <img src={value.img}  alt={value.image}  />
           <p>{value.id}</p>
           </div> 
        })
    }
      </div>
    <div id="menu3" className="container tab-pane fade  menulast" ><br />
      <h3>Menu 3profile</h3>
    {
        Tabdata.map((value)=>{
           return <div className='menuimage' >
           <img src={value.img}  alt={value.image}  />
           <p>{value.id}</p>
           </div> 
        })
    }
      </div>
  </div>
</div>

    );
}

export default Tabe;
