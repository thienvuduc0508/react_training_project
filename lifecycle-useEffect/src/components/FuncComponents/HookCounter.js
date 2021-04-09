import React, { useEffect, useState } from 'react'

const HookCounter = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    useEffect(() => {
        console.log(`You click by hook ${count} time`)
    }, [count])

    return (
        <div>
            <input type="text" value ={name} onChange={ e => setName(e.target.value) } />
            <button onClick={ () => setCount(count + 1)}> HookCounter clicked {count} time</button>
        </div>
    )
}

export default HookCounter