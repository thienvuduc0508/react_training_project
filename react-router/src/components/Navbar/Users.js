import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout';
import axios from '../../axios'
import { Link } from 'react-router-dom';
const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
   useEffect(() =>{
       async function getUsers(){
           setLoading(true);
           try {
               const res = await axios.get('/')
               setUsers(res.data);
               setLoading(false)
           } catch (error) {
               setError(error)
               setLoading(false)
           }
       }
    getUsers();
   },[])
     if (error) {
         return <p>Oops, something went wrong...</p>
     }
    //  if (loading) {
    //      return <p>Loading...</p>
    //  }
    //  const clickUser = (id) =>{
    //      props.history.push('/users/' + id)
    //  }
    return (
        <div>
            <Layout>
             {users.map(user => {
                 return (
                     /** Navigating Programmatically */
                    //  <div onClick={() => clickUser(user.id)} key={user.id}>
                    //      <p>{user.name}</p>
                    //  </div>
                     <Link key={user.id} to={'/users/' + user.id}>
                         <p>{user.name}</p>
                     </Link>
                 )
             })}
            </Layout>
        </div>
    )
}

export default Users
