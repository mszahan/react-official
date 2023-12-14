import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav className="main-nav">
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/filter'> Filter </Link> </li>
                <li> <Link to='/ui'> Ui </Link> </li>
                <li> <Link to='/interact'> Interact </Link> </li>
                <li> <Link to='/todo'> ToDo </Link> </li>
            </ul>
        </nav>
    )
}

export default Nav;