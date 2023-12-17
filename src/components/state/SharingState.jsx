import { useState } from "react";


function Panel({title, children, isActive, onShow}) {
    

    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p> {children} </p>
            ) : (
                <button onClick={onShow}>
                    show
                </button>
            )
        }
        </section>
    )
}


export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="accordion">
            <Panel
            title={'About'}
            isActive={activeIndex ===0 }
            onShow={ () => setActiveIndex(0)}
            
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero adipisci nam sit illo repellendus perferendis.
            </Panel>
    
            <Panel
            title={'Etymoloy'}
            isActive={activeIndex ===1 }
            onShow={ () => setActiveIndex(1)}

            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odio quidem ex et, aspernatur deleniti provident officiis labore culpa doloribus facilis!
            </Panel>
        </div>

)
}