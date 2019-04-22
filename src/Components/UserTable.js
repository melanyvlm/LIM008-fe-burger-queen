import React  from 'react';
// import './Components.css';
const UserTable = props => (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          {/* <th>Actions</th> */}
        </tr>
      </thead>
      <tbody>
        {props.adding.length > 0 ? (
          props.adding.map(user => (
            <tr key={user.id}>
            {/* <i class="fas fa-minus"></i> */}
              <td>{user.title}</td>
              <td>s/.{user.price}</td>
              <td>
              <button type ="button"className="button muted-button" onClick ={() => props.deleteUser(user.id)} >Delete</button>
              {/* <button type="button" onClick={() => setChange('breaskfast')}>DESAYUNO</button> */}

              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Añade un pedido !</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  
  export default UserTable
