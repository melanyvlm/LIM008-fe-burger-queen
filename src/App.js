import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation.js';
import MenuNavbar from './Components/MenuNavbar.js';
import AllMenu from './Components/AllMenu.js'

class App extends Component {
      render(){
            return (
                  <div className="App">
                  <MenuNavbar></MenuNavbar>
<Navigation></Navigation>

{/* <button className="btn btn-primary m-3" name="breakfast" >Desayuno</button>
        <button className="btn btn-primary m-3" name="dinner" >Almuerzo y/o Cena</button> */}
        <AllMenu></AllMenu>
 {/* <Menu></Menu> */}

</div>
  
            )
      }
}


export default App;
