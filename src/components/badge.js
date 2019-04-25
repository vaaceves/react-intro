import React, {Component} from 'react';

import './styles/badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends Component {
    render() {
        const {
            firstName,
            lastName,
            avatarURL,
            jobTitle,
            twitter
        } = this.props;
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
                    className = 'badge__section-name'
                >
                    <img
                        className = 'badge__avatar'
                        src = {avatarURL}
                        alt = 'avatar'
                    />
                    <h1>{firstName} <br/> {lastName}</h1>
                </div>
                <div
                    className = 'badge__section-info'
                >
                    <p>{jobTitle}</p>
                    <div>@{twitter}</div>
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
