// import React, { Component } from 'react'
import './Components.css';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React , {useState} from 'react';
/**Siguiendo a Tania de react Hooks */


const Menu = ({addMenu, menudata}) => {
// const usingData = reuseData();
const[change, setChange] = useState('breakfast');

  return (
<div className="menu">
<div className="row">

 {/* <Form inline >
      <Button className="button-one usert">COMEDOR</Button>
      <Button className="button-two usert">COCINA</Button>
    </Form>  */}
   <div className="col-6">
                <button type="button" onClick={() => setChange('breaskfast')}>DESAYUNO</button>
                </div> 
                <div className="col-6">
          <button type="button" onClick={() => setChange('dinner')}>ALMUERZO Y CENA</button>
          </div>
      </div>
      <div >
           {menudata.filter(compare => (compare.food === change)).map(item => (
          <div onClick={() => addMenu(item)}>
          <div >
      <div className="card ">{`${item.title}`}</div>   
<div className="card-body">
    {/* <h5 className="card-title">{`${item.title}`} */}
      <span>s/.{`${item.price}`} </span>
    {/* </h5> */}
    {/* <p className="card-text">{`${item.price}`}</p> */}
     </div>
{/* </div> */}
           
          </div >
          </div>
        ))}
</div>
  </div>
  )

}

Menu.propTypes = {
  addMenu: PropTypes.func.isRequired,
  menudata:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Menu;




/* <div className="card" style="width: 18rem;">
  <img className="card-img-top" alt="Card image cap">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */









// class Menu extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       itemsMenu:[],
//     }
//   }
//   componentDidMount(){
//     fetch('https://raw.githubusercontent.com/melanyvlm/LIM008-fe-burger-queen/developmel/src/menus.json')
//     .then(res => res.json())
//     .then(json =>{
//       this.setState({
//       itemsMenu:json,
//       })
//     });
//   }
//   handleSubmit = (e) =>  {
//     e.preventDefault();
//    this.props.onAddMenu(this.state);
// console.log('sendig the data ..')
//   }



//   render() {
//  const menus = this.state.itemsMenu.map((menu,i) => {
// return(
//   <div className="col-md-4">
//   <div  className="col-md-4">
//   <form onSubmit={this.handleSubmit}>
//    <button type="submit" class="btn btn-warning" >
//   {menu.title}<p>s/.{menu.price}</p></button>
//   </form>
//   </div>
//   </div>
// )
//  })

//  return(
//    /**Podria crear un componente para cada menu(o tarea)siguiendo el ejemplo del menu  */
//   <div className="container">
//   <div className="row mt-4">
//     {menus}
//       </div>
//       </div>
//  )
//   }
// }
  // export default Menu;


/* <div className="card" style="width: 18rem;">
  <img className="card-img-top" alt="Card image cap">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */







