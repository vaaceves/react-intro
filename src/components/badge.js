import React, {Component} from 'react';

import './styles/badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends Component {
    render() {
        return(
            <div
                className = 'badge'
            >
                <div
                    className = 'badge__header'
                >
                    <img
                        src = {confLogo}
                        alt = 'logo'
                    />
                </div>
                <div
                    className = 'badge__section_name'
                >
                    <img
                        className = 'badge__avatar'
                        src = 'https://www.gravatar.com/avatar?d=identicon'
                        alt = 'avatar'
                    />
                    <h1>Alexis <br/> Aceves</h1>
                </div>
                <div
                    className = 'badge__section_info'
                >
                    <p>Computer Science Engineer</p>
                    <div>@vaaceves</div>
                </div>
                <div
                    className = 'badge__footer'
                >
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge
