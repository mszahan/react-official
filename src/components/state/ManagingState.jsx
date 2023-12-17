import Form from "./DeclaritiveUi"
import Accordion from "./SharingState"
import FilterableList from "./FilteringData"
import TwoCounter from "./PreResetState"
import { FacnyCounter } from "./PreResetState"


export default function ManagingState() {
    return (
        <div className="state">
            <Form/>
            <Accordion/>
            <FilterableList/>
            <TwoCounter/>
            <FacnyCounter/>
        </div>
    )
}