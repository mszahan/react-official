import ToolBar from "./Event";
import NoState from "./NoState";
import InfoCard from "./InfoCard";
import SanpShot from "./SnapShot";
import Que from "./Que";
import ObjectState from "./ObjectState";

function Interact () {
    return (
        <div className="interact">
            <h1>Adding interactivity</h1>
            <ToolBar/>
            <NoState/>
            <InfoCard/>
            <SanpShot/>
            <Que/>
            <ObjectState/>
        </div>
    )
}

export default Interact;