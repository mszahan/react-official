import ToolBar from "./Event";
import NoState from "./NoState";
import InfoCard from "./InfoCard";

function Interact () {
    return (
        <div className="interact">
            <h1>Adding interactivity</h1>
            <ToolBar/>
            <NoState/>
            <InfoCard/>
        </div>
    )
}

export default Interact;