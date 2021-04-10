import React from 'react'

const Post = () => {
    console.log('render Post using React memo');
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat maxime deleniti. Temporibus sit sequi fugiat quod dolor earum excepturi numquam repellat maiores odio aliquam deserunt, sunt quaerat. Consequuntur, expedita?</p>
        </div>
    )
}

// using React.memo
export default React.memo(Post) 
