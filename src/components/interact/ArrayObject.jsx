import { useState } from "react";

let nextId = 0;

function List(){
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <div className="list">
            <h1>Todo list with array</h1>

            <div className="form">

                    <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <button 
                    onClick={() => {
                        setArtists([
                            ...artists,
                            {id: nextId++, name:name}
                        ])

                        setName('')
                    }}
                    >
                        Add
                    </button>

                    <ul>
                        {artists.map(artist => (
                            <div>
                            <li key={artist.id}> {artist.name}{' '}
                                <button
                                onClick={() => {
                                    setArtists(
                                        artists.filter(a => a.id !== artist.id)
                                        
                                        )
                                }}
                                >
                                    delete</button>
                            </li>

                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    )
}


let initialShapes = [
    {id:0, type:'circle', x:50, y:100},
    {id:1, type:'square', x:150, y: 100},
    {id:2, type:'circle', x:250, y: 100}
]


function ShapeEditor(){
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                //no change
                return shape;
            } else {
                //reutrn a new circle 50px below
                return {
                    ...shape,
                    y:shape.y + 50,
                }
            }
        })

        setShapes(nextShapes)
        
    }

    return (
        <div className="movingshape">
            <button onClick={handleClick}>
                move circle down!
            </button>
            {
                shapes.map(shape => (
                    <div
                    key={shape.id}
                    style={{
                        backgroundColor: 'blue',
                        position: 'relative',
                        left: shape.x,
                        top:shape.y,
                        borderRadius:
                        shape.type === 'circle'
                        ? '50%' : '',
                        width:20,
                        height:20,
                    }}
                    
                    />
                    

                ))
            }
        </div>
    )
}

let initialCounters = [0, 0, 0];

function CounterList() {
    const [counters, setCounters] = useState(initialCounters);

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i===index){
                return c + 1;
            } else {
                return c;
            }
        })

        setCounters(nextCounters);
    }


    return (
        <div className="counter-list">
            <ul>
                {
                    counters.map((counter, i) => (
                        <li key={i}>
                            {counter} {' '}
                            <button onClick={() => {
                                handleIncrementClick(i);
                            }}>
                                +1
                            </button>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default function ArrayObject(){
    return (
        <div className="arrayObject">
            <List/>
            {/* <ShapeEditor/> */}
            <CounterList/>
        </div>
    )
}