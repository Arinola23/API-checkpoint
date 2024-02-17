import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = () => { 
    const [ listOfUsers, setListOfUsers ] = useState([])

    useEffect(() =>{
        const getData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                    setListOfUsers(res.data)
              }
                catch(error){
                    console.log('Error getting data:', error)
                }
        }

        getData()
    }, [])

        return(
            <>
              <div style={{margin: '20px'}}>
              <h1 style={{marginLeft:'20px', color: 'black' }}>List of Users</h1>
               <ul>
                     {/* map through the listofuser using the user as the unpacking array to get individual users using the unique ID */}
                   {listOfUsers.map(user => (
                        <li key ={user.id } style={{ marginBottom : '10px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', listStyle: 'none', background: 'black', color: 'white'}}> 
                            Name: {user.name} <br /> 
                            UserName: {user.username} <br />    
                            Email:{user.email} <br />  
                            Address: {user.address.street} 
                        </li>  
                      ))
                   }
                </ul>
              </div> 
              </>
        )
}

export default UserList;