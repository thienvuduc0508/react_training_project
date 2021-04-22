import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'

const User = (props) => {
    const [user, setUser] = useState(null);
    useEffect( () => {
        let id = props.match.params.id;
        axios.get('/' + id)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
    },[])

    const detailUser = user ? (
    <div>
        <h4>Full Name: {user.name}</h4>
        <h5>Username: {user.username}</h5>
        <h5>Email: {user.email}</h5>
        <h5>Website: {user.website}</h5>
    </div>
    )
     :  
     (<div>Loading...</div>)
    return ( 
        <div>
            <Layout>
                {detailUser}
            </Layout>
        </div>
    )
}

export default User
