import React, {Component} from 'react';

import './styles/badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends Component {
    render() {
        /*const {
            firstName,
            lastName,
            avatarURL,
            jobTitle,
            twitter
        } = this.props;*/
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
                        src = {this.props.avatarURL}
                        alt = 'avatar'
                    />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div
                    className = 'badge__section-info'
                >
                    <p>{this.props.jobTitle}</p>
                    <div>@{this.props.twitter}</div>
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
