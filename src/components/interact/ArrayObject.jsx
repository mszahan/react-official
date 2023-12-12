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
                    }}
                    >
                        Add
                    </button>

                    <ul>
                        {artists.map(artist => (
                            <li key={artist.id}> {artist.name} </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}




export default function ArrayObject(){
    return (
        <List/>
    )
}