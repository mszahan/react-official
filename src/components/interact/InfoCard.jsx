import { useState } from "react";
import { sculptureList } from "./data";

export default function InfoCard () {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index < sculptureList.length -1 ) {
            setIndex(index + 1)
        }

    }

    function handlePreviousClick() {
        if (index !==0) {
            setIndex(index-1)
        }
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <div className="infocard">
            <div className="buttons">
                <button 
                className="btn" 
                onClick={handlePreviousClick}
                disabled={index === 0} 
                >
                    Previous
                </button>

                <button 
                className="btn" 
                onClick={handleNextClick}
                disabled={index === sculptureList.length -1} 
                >
                    Next
                </button>

            </div>

            <div className="content">
                <h2><span>{sculpture.name} by {sculpture.artist} </span></h2>
                <h3>({index + 1} of {sculptureList.length})</h3>

                <button onClick={handleMoreClick} className="btn">
                    {showMore ? 'Hide' : 'Show'} details
                </button>

                {showMore && <p>{sculpture.description}</p>}

            </div>


            <div className="image">
                <img src={sculpture.url} alt={sculpture.alt} />
            </div>





        </div>
    )
}