import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <Link style={navStyle} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to='/Bigfish'>
                        <li>Bigfish</li>
                    </Link>
                    <Link style={navStyle} to='/Littlefish'>
                        <li>Littlefish</li>
                    </Link>
                </ul>
            </nav>

        </div>
    );
}

export default Nav;
