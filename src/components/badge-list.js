import React, {Component} from 'react';

import './styles/badge-list.css';


class BadgeListItem extends Component {
    render() {
        return(
            <div
                className = 'badges-list-item'
            >
                <img
                    className = 'badges-list__avatar'
                    src = {this.props.badge.avatarURL}
                    alt = {`${this.props.badge.first_name} $ {this.props.badge.last_name}`}
                />
                <div>
                    <strong>
                        {this.props.badge.first_name} {this.props.badge.last_name}
                    </strong>
                    <br/>
                    @{this.props.badge.twitter}
                    <br/>
                </div>
            </div>
        )
    }
}

class BadgeList extends Component {
    render() {
        return(
            <div
                className = 'badges-list'
            >
                <ul
                    className = 'list-unstyled'
                >
                    {this.props.badges.map(badge => {
                        return (
                            <li
                                key = {badge.id}
                            >
                                <BadgeListItem
                                    badge = {badge}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BadgeList
