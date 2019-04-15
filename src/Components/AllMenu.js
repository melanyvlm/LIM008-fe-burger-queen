import React, { Component } from 'react';
import Menu from '../Functions/Menu.js';
class AllMenu extends Component{
        render() {
        return (
 <div className="bigcontain">
   <div className="container">
     <div className="row ">
        <div className="col-md-6 col-xs-9 col-lg-6">
        <Menu></Menu>
         </div>     
     </div>
         <div className="col-md-6  col-xs-9 col-lg-6">
        </div>
  </div>
</div>
                )
  }
 }
    export default AllMenu;

   