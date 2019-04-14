import React, { Component } from 'react';
import './App.css';
import Navigation from './Functions/Navigation';
import MenuNavbar from './Functions/MenuNavbar';
import Menu from './Functions/Menu.js';
// import UserTable from '../src/tables/UserTable.js';
// var ReactBootstrap = require('react-bootstrap');
// var MenuItem = ReactBootstrap.MenuItem;

class App extends Component {
      render(){
            return (
                  <div className="App">
                  <MenuNavbar></MenuNavbar>
<Navigation></Navigation>

{/* <button className="btn btn-primary m-3" name="breakfast" >Desayuno</button>
        <button className="btn btn-primary m-3" name="dinner" >Almuerzo y/o Cena</button> */}
 <Menu></Menu>

</div>
  
            )
      }
}


export default App;
