import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/TicTacToe";
import SearchThink from "./components/SearchThink";
import Nav from "./components/Nav";
import Ui from "./components/ui/Ui";

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/filter" element={<SearchThink/>}/>
                <Route path="/ui" element={<Ui/>}/>
            </Routes>
        </BrowserRouter>
    )
        
}

export default App;