import { useState } from "react";

export default function SanpShot() {
    const [num, setNum] = useState(0);

    return (
        <div>
            <h1> {num} </h1>
            <button onClick={() => {
                setNum(num + 1);
                setNum(num + 1);
                setNum(num + 1);
            }}>
                +3
            </button>
        </div>
    )
}