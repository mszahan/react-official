import { useState } from "react";


function Panel({title, children}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p> {children} </p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                    show
                </button>
            )
        }
        </section>
    )
}


export default function Accordion() {

    return (
        <div className="accordion">
            <Panel title={'About'}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero adipisci nam sit illo repellendus perferendis.
            </Panel>
    
            <Panel title={'Etymoloy'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odio quidem ex et, aspernatur deleniti provident officiis labore culpa doloribus facilis!
            </Panel>
        </div>

)
}