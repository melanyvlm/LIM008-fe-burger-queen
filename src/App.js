
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
  // const addMenu = (eachMenu) => {
  //   menudata.find(item => (item.id === id ? setAdding([...adding, item]) : item));
  // };
  // const addMenu = (eachMenu) => {
  //   adding.find(item => (item.id === eachMenu.id ? setAdding([...adding]) : setAdding([{...eachMenu, count:1}, ...adding])));
  // };
  const addMenu = (menu) => {
    if (adding.find(e => e.id === menu.id)) {
      setAdding([...adding]);
    } else {
      setAdding([{ ...menu, count: 1 }, ...adding]);
    }
}
// const totalCost = (menu) => {
//   // console.log(menu);
//   const precio = menu.map(ele => ele.precio * ele.count);
//   const total = precio.reduce((a, b) => a + b, 0);
//   return total;
// };
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
