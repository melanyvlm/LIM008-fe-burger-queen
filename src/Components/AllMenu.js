import React, { Component } from 'react';
import Menu from './Menu.js';
import UserTable from './UserTable.js'
import './Components.css';

class AllMenu extends Component{
        render() {
        return (
 <div className="bigcontain">
   <div className="container">
     <div className="row ">
        <div className="col-md-6 col-xs-9 col-lg-6">
        <Menu></Menu>
         </div>     
         <div className="col-md-6  col-xs-9 col-lg-6">
         <UserTable></UserTable>
        </div>
  </div>
</div>
</div>

                )
  }
 }
    export default AllMenu;

   