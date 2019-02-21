import React, { Components } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar light bg-light">
        <a class="navbar-brand" href="#">Marvel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><Link to="/avengers" class="nav-link">Avengers</Link></li>
                <li class="nav-item"><Link to="/villians" class="nav-link">Villians</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav;