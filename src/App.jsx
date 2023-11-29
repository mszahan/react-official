import Game from "./components/TicTacToe";
import SearchThink from "./components/SearchThink";

const App = () => {
    return (
        <div className="app">
            <h1>Tic Tac Toe</h1>
            <Game/>
            <hr />
            <h1>Thinking in React</h1>
            <SearchThink/>
        </div>
    )
}

export default App;