import { useState } from "react";

export default function TwoCounter() {
    const [showB, setShowB] = useState(true);

    return (
        <div className="two-counter">
            <h1>Two counter to check the state when one is disappear</h1>
            <div className="counters">
            <Counter/>
            {showB && <Counter/>}
            </div>

            <label>
                <input
                checked={showB}
                onChange={e => setShowB(e.target.checked)}
                type="checkbox"
                />
                Render the second counter
            </label>
        </div>
    )
}

export function FacnyCounter() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div className="fancyCounter">
            <h1>Same component at the same position preserves states</h1>
            <div className="counters">
                {isFancy ? 
                <Counter isFancy={true}/>
                :
                <Counter isFancy={false}/>    
            }
            </div>
            <label>
                <input
                checked={isFancy}
                onChange={e => {setIsFancy(e.target.checked)}}
                type="checkbox"
                />

                Use Fancy Styling
            </label>
        </div>
    )
}


export function SameCounterDiffPos() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div className="fancyCounter">
            <h1>Render the same component in same position with different two logic</h1>
            <div className="counters">
                {isFancy &&
                <Counter
                isFancy={true}
                name={'Alex'}
                />
                }
                  
                {!isFancy &&
                <Counter
                name={'Rebecca'}
                isFancy={false}/>
                }

                    {/* {isPlayerA ? (
                            <Counter key="Taylor" person="Taylor" />
                        ) : (
                            <Counter key="Sarah" person="Sarah" />
                        )}
                                     */}

            </div>
            <label>
                <input
                checked={isFancy}
                onChange={e => {setIsFancy(e.target.checked)}}
                type="checkbox"
                />

                Use Fancy Styling
            </label>
        </div>
    )
}


function Counter({isFancy, name}) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover){
        className += ' hover';
    }

    if (isFancy) {
        className += ' fancy'
    }


    return(
        <div 
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        >   
            <h2>{name}</h2>
            <h1> {score} </h1>
            <button onClick={() => setScore(score+1)}>
                Add one
            </button>

        </div>
    )
}