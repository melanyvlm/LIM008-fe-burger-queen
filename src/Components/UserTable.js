import React , {useState} from 'react';
// import './Components.css';
import PropTypes from 'prop-types';
const UserTable = ({menudata,adding,setAdding ,deleteUser}) => {
  const addItems = (it , user) => {
    user.count += 1;
    setAdding([...it]);
  };
  // const deleteItems = () => {
    
  // }
  return(
<table>
       <thead> 
        <tr className="thead">
          <th>Producto</th>
          <th>Precio</th>
          <th>Opción</th>
        </tr> 
      </thead>
      <tbody>
        {adding.length > 0 ? (
        adding.map(user => (
            <>
            <tr key={user.id}>
            <button type="button" onClick={() => addItems(adding, user)}> +</button>
            <td>{user.title}</td>
            <span>s/.{user.price * user.count}</span>
            {/* <span>{user.count}</span> */}
            {/* {user.count} */}
            <button>-</button>
            <td>s/.{user.price}</td>
            <td>
              <button type="button" className="button muted-button" onClick={() => deleteUser(user.title)}>Delete</button>
            </td>
          </tr>
        
          </>
          
       
          
            ))
        
        ) : (
          <tr>
            <td colSpan={3}>Añade un pedido !</td>
          </tr>
        )}
            <>
                 <tr class="total">
        <td>TOTAL</td>
        <td>S/.0.00</td>      <button>Enviar a cocina</button>


      </tr>

            </>
              {/* <>
                 <tr class="total">
        <td>TOTAL</td>
        <td>S/.0.00</td>
      </tr>
            </> */}

      </tbody>
    </table>


  )
    
          };
UserTable.propTypes = {
  menudata:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  addItems:PropTypes.func.isRequired,
  adding:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setAdding: PropTypes.func.isRequired,
  deleteUser:PropTypes.func.isRequired,
};
  export default UserTable
          
//  <tr class="total">
//  <td>TOTAL</td>
//  <td>S/. {{total}}.00</td>
// </tr>