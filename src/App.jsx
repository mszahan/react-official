import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/TicTacToe";
import SearchThink from "./components/SearchThink";
import Nav from "./components/Nav";

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/filter" element={<SearchThink/>}/>
            </Routes>
        </BrowserRouter>
    )
        
}

export default App;