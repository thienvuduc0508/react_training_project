import React, { useEffect, useState } from 'react'

const HookInterval = (props) => {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        //clean up
        return () => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            <h1>HookInterval : {count}</h1>
        </div>
    )
}

export default HookInterval
