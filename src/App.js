
import React , {useState , useEffect} from 'react';
// import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation.js';
import MenuNavbar from './Components/MenuNavbar.js';
import Menu from './Components/Menu.js';
import UserTable from './Components/UserTable.js';
// import Menu from './Components/Menu.js';
const App = () => {
 const [menudata,setMenudata] = useState([]);
 useEffect(() => {
      fetch('https://raw.githubusercontent.com/melanyvlm/LIM008-fe-burger-queen/developmel/src/menus.json')
        .then(res => res.json())
        .then((json) => {
          setMenudata(json);
        });
    });
  /**añade cada elemento del menu */
  const [adding, setAdding] = useState([]);
  const addMenu = (title) => {
    menudata.filter(item => (item.title === title ? setAdding([...adding, item]) : item));
  };

  const deleteUser = (title)=> {
setAdding(adding.filter(item => item.title !== title));
};

return (
     <div className="App">
     <MenuNavbar></MenuNavbar>
     <Navigation></Navigation>
<div>
  <div className="row">
     <div className="col-sm-6">
     <Menu addMenu={addMenu}
        menudata={menudata} >
       </Menu>
      </div>
     <div className="col-sm-6 ">
     <UserTable adding={adding}deleteUser={deleteUser} setAdding={setAdding}
 ></UserTable>
     </div>
   </div>
 </div>
{/* <button className="btn btn-primary m-3" name="breakfast" >Desayuno</button>
        <button className="btn btn-primary m-3" name="dinner" >Almuerzo y/o Cena</button> */}
</div>
    )
}


export default App;
