import React, { useEffect, useRef, useState } from 'react'


// su dung useRef de lay gia tri truoc do cua State
const Counter = (props) => {
    const [count, setCount] = useState(0);
    const preCount = useRef(count);
    useEffect( () => {
        preCount.current = count;

    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <React.Fragment>
            <p>Previous State: {preCount.current}</p>
            <p>Current State: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </React.Fragment>
    )
}

export default Counter
