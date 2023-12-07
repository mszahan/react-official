import { useState } from "react"
export default function NoState () {

        const [inum, setInum] = useState(0)

    // let initialNum = 0

    function handleClick() {
        // initialNum = initialNum + 1
        setInum(inum + 1)
        console.log(inum)
    }

    return (
        <div>
            <div>
                {inum}
            </div>
            <button onClick={handleClick}>
                increase the number

            </button>
        </div>
    )
}