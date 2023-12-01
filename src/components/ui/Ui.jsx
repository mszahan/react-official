import { Profile } from "./Gallery";
import Gallery from "./Gallery";
import Main from "./SpreadProps";
import Continer from "./PassingChildren";

function Ui () {
    return (
        <div>
            <Gallery/>
            <Profile/>
            <Main/>
            <Continer/>

        </div>
    )
}

export default Ui;