import React from 'react'
import './Components.css';

const UserTable = () => (
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>    
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name data</td>
                <td>Username data</td>
                <td>
                    <button className="button usert muted-button">Edit</button>
                    <button className="button usert muted-button">Delete</button>
               </td>
            </tr>
        </tbody>
    </table>
)
export default UserTable