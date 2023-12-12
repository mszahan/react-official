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

let nId = 3;
const initialArtists = [
    {id:0, name:'Alex'},
    {id: 1, name:'Rebecca'},
    {id:2, name:'Nancy'},
];

function InsList() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);

    function handleClick(){
        const insertAt = 1; // cloud be any index
        const nextArtists = [
            // Items before the insertion point:
            ...artists.slice(0, insertAt),
            // New item:
            {id:nId++, name:name},
            ...artists.slice(insertAt)
        ];

        setArtists(nextArtists);
        setName('')
    }

    return (
        <div className="insert">
            <h1>Inserting the element in array</h1>

            <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text" />

            <button onClick={handleClick}>
                Insert
            </button>

            <ul>
                {artists.map(artist => (
                    <li key={artist.id}> {artist.name} </li>
                ))}
            </ul>
        </div>
    )
}

const initialList = [
    {id: 0, title: 'Reddit'},
    {id: 1, title: 'Facebook'},
    {id: 2, title: 'Twitter'},
    {id: 3, title: 'Linkedin'}
]

function ReverseList() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <div className="reverse">
            <button onClick={handleClick}>
                Reverse
            </button>

            <div className="reverese-conten">
                <ul>
                    {list.map(social => (
                        <li key={social.id}> {social.title} </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const bucketList = [
    {id: 0, title:'Babylon', seen:false},
    {id: 1, title: 'Black Book', seen:false},
    {id: 2, title: 'Legend', seen:true}
];

function BucketList() {
    const [myList, setMyList] = useState(bucketList);
    const [yourList, setYourList] = useState(bucketList);


    function handleToggleMyList(artworkId, nextSeen) {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                return {...artwork, seen:nextSeen};
            } else {
                //
                return artwork;
            }

        }))
    }


    function handleToggleYourList(artworkId, nextSeen) {
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId){
                return {...artwork, seen:nextSeen};
            } else {
                return artwork;
            }
        }))
    }

    return (
        <div className="bucketlist">
            <h1> changing the objecst within the array </h1>
            <ItemList
            artworks={myList}
            onToggle={handleToggleMyList}
            />

            <ItemList
            artworks={yourList}
            onToggle={handleToggleYourList}
            />


        </div>
    )


}

function ItemList({artworks, onToggle}) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label htmlFor="">
                        <input
                        checked={artwork.seen}
                        onChange={e => {
                            onToggle(
                                artwork.id,
                                e.target.checked
                            );
                        }}
                        type="checkbox" 
                        
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}


export default function ArrayObject(){
    return (
        <div className="arrayObject">
            <List/>
            {/* <ShapeEditor/> */}
            <CounterList/>
            <InsList/>
            <ReverseList/>
            <BucketList/>
        </div>
    )
}