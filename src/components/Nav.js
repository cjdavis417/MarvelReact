import React, { Components } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar light bg-light">
        <Link className="navbar-brand" to="">Marvel</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to="/avengers" className="nav-link">Avengers</Link></li>
                <li className="nav-item"><Link to="/villians" className="nav-link">Villians</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav;