import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/TicTacToe";
import SearchThink from "./components/SearchThink";
import Nav from "./components/Nav";
import Ui from "./components/ui/Ui";
import Interact from "./components/interact/Interact";

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/filter" element={<SearchThink/>}/>
                <Route path="/ui" element={<Ui/>}/>
                <Route path="/interact" element={<Interact/>}/>
            </Routes>
        </BrowserRouter>
    )
        
}

export default App;