import React, { Component } from 'react';
import './Components.css';

class MenuNavbar extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //       itemsMenu:[],
    //     }
    // }
    // componentDidMount(){
    //     fetch('https://raw.githubusercontent.com/melanyvlm/LIM008-fe-burger-queen/developmel/src/menus.json')
    //     .then(res => res.json())
    //     .then(json =>{
    //       this.setState({
    //       itemsMenu:json,
    //       })
    //     });
    //   }
    render(){
        return(

<div className="container-all">
        <div className="container-header orange-color">
        <h1 className="ml-3 mt-3 text-white">BURGER QUEEN // N°PEDIDOS </h1>
     
      </div>
        <nav> 
      </nav>
 </div>
        )
    }
}
export default MenuNavbar;