import React, { Components } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar light bg-light">
        <a class="navbar-brand" href="#">Marvel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <ul>
                <li>Marvel</li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;