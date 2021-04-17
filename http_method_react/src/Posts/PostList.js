import React, { useEffect, useState } from 'react';
import axios from 'axios';
  
const PostList = () => { 
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      const posts = res.data.slice(0, 5);
      setPosts(posts);
    })
    .catch(err => console.log(err))
  },[])
  
 const addPost = () => {
   const data = {
     "id" : 101,
     "title": "What is Lorem Ipsum",
     "body": "There are many variations of passages of Lorem Ipsum available"
   }
   axios.post(`http://httpbin.org/post`, data).then( (data) => console.log(data)).catch(err => console.log(err))
 }
 const updatePost = () => {
  const data = {
    "id" : 222,
    "title": "Where does it come from",
    "body": "Contrary to popular belief, Lorem Ipsum is not simply random text"
  }
  axios.put(`http://httpbin.org/put`, data).then(data => console.log(data)).catch(err => console.log(err))
 }
 const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        const newPosts = posts.filter(item => item.id !== id);
        setPosts(newPosts);
      }).catch(err => console.log(err))
  }
    return (
      <div>
        <h1>Axios Get, Post, Put, Delete Method</h1>
        <button onClick={addPost}>addPost</button>
        <button onClick={updatePost}>updatePost</button>
        <table>
            <thead>
              <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Action</th>
              </tr>
            </thead> 
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    )
  }
export default PostList;