import ToolBar from "./Event";
import NoState from "./NoState";
import InfoCard from "./InfoCard";
import SanpShot from "./SnapShot";

function Interact () {
    return (
        <div className="interact">
            <h1>Adding interactivity</h1>
            <ToolBar/>
            <NoState/>
            <InfoCard/>
            <SanpShot/>
        </div>
    )
}

export default Interact;