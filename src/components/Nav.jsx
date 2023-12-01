import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav className="main-nav">
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/filter'> Filter </Link> </li>
            </ul>
        </nav>
    )
}

export default Nav;