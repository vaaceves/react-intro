import React, {Component} from 'react';

import './styles/navbar.css';
import logo from '../images/logo.svg';


class Navbar extends Component {
    render() {
        return(
            <div
                className = 'navbar'
            >
                <div
                    className = 'container-fluid'
                >
                    <a
                        className = 'navbar__brand'
                        href = '/'
                    >
                        <img
                            className = 'navbar__brand-logo'
                            src = {logo}
                            alt = 'logo'
                        />
                        <span className = 'font-weight-light'>Platzi</span>
                        <span className = 'font-weight-bold'>Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar
