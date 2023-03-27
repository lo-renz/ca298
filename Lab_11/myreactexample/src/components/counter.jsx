import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={
                ()=>{
                    setCount(count + 1)
                }
            }>Click Me</button>
        </div>
    )
}

export default Counter;