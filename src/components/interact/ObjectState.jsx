import { useState } from "react";

function MovingDot () {
    const [position, setPosition] = useState( {
        x:0,
        y:0
    });

    return(
        <div 
        onPointerMove={ e => {
            setPosition({
                x:e.clientX,
                y:e.clientY
            });
        }}
        style={{
            position:'relative',
            width: '100vw',
            height: '100vh',
        }}
        >
            <div style={
                {
                    position:'absolute',
                    backgroundColor:'#124E5F',
                    borderRadius:'50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top:-10,
                    width:20,
                    height:20,
                }
            }>

            </div>

        </div>
    )
}


export default function ObjectState () {
    return (
        <div className="objectstate">
            <MovingDot/>
        </div>
    )
}