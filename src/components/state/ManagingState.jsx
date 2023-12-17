import Form from "./DeclaritiveUi"
import Accordion from "./SharingState"
import FilterableList from "./FilteringData"


export default function ManagingState() {
    return (
        <div className="state">
            <Form/>
            <Accordion/>
            <FilterableList/>
        </div>
    )
}