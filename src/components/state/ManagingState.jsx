import Form from "./DeclaritiveUi"
import Accordion from "./SharingState"
import FilterableList from "./FilteringData"
import TwoCounter from "./PreResetState"
import { FacnyCounter } from "./PreResetState"
import { SameCounterDiffPos } from "./PreResetState"
import ChatRoom from "./ChatRoom"
import Page from "./ContextHeading"


export default function ManagingState() {
    return (
        <div className="state">
            <Form/>
            <Accordion/>
            <FilterableList/>
            <TwoCounter/>
            <FacnyCounter/>
            <SameCounterDiffPos/>
            <ChatRoom/>
            <Page/>
        </div>
    )
}