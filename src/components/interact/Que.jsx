import { useState } from "react"

function StateCounter () {
    const [num, setNum] = useState(0);
    function handleClick () {
        setNum(n=> n+1)
        setNum(n=> n+1)
        setNum(n=> n+1)
    }

    return (
        <div className="statecoutner">
            <h1>Updating the state three times within same render</h1>
            <h1> {num} </h1>
            <div>
                <button
                onClick={handleClick}
                className="btn"
                >
                    +3
                </button>
            </div>
        </div>
    )
}




export default function Que() {
    return (
    <div className="que">
        <StateCounter/>

    </div>

    )
}