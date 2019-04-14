import React , {useState} from 'react';
function MenuList(){
  const [data,setData] = useState({hits:[]});

return (
  <ul>
    {data.hits.map(item => (
      <li key={item.id}> 
      <a href ={item.name}></a>
      </li>
    ))}
  </ul>
)
}
export default MenuList;













// import React from 'react'
// import AllMenu from '../Components/AllMenu.js';
// const Menu = () => {
//     return (
//       <div className="App">
//       <div  className ="container">
//       <div className="row ">
//       <div className="col-md-6 ">
// <AllMenu></AllMenu>
// <div className="col-md-6"></div>
//                     {/* <Todoform onAddTodo={this.handleAddTodo}></Todoform> */}
//                   </div>
      
//       {/* {todos} */}
//       </div>
      
//       </div>
      
//                  </div>
//     )
//     }
// export default Menu;