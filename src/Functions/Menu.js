import React, { Component } from 'react'
class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/melanyvlm/LIM008-fe-burger-queen/developmel/src/menus.json')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        isLoaded:true,
        items:json,
      })
    });
  }

  render() {
    const {isLoaded,items} = this.state;
    if(!isLoaded){
      return <div>Loading</div>;
    }
    else{
      return (
        <div className="Menu">
    <ul>
      {items.map(item => (
          <div className="card" key={item.id}>
      Name:{item.title} 
              <div>
      Email:{item.food}
               </div>
         </div>
      ))}
    </ul> 
        </div>
      );
    }
  }

}
export default Menu;

{/* <div className="card" style="width: 18rem;">
  <img className="card-img-top" alt="Card image cap">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}







