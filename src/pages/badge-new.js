import React, {Component} from 'react';

import './styles/badge-new.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/navbar';
import Badge from '../components/badge';
import BadgeForm from "../components/badge-form";


class BadgeNew extends Component {
    state = {
        form: {
            first_name: '',
            last_name: '',
            job_title: '',
            twitter: '',
            email: '',
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    render() {
        return(
            <div>
                <Navbar/>
                <div
                    className = 'badgeNew__hero'
                >
                    <img
                        className = 'img-fluid'
                        src = {header}
                        alt = 'logo'
                    />
                </div>
                <div
                    className = 'container'
                >
                    <div
                        className = 'row'
                    >
                        <div
                            className = 'col-6'
                        >
                            <Badge
                                firstName = {this.state.form.first_name}
                                lastName = {this.state.form.last_name}
                                avatarURL = 'https://www.gravatar.com/avatar?d=identicon'
                                jobTitle = {this.state.form.job_title}
                                email = {this.state.form.email}
                                twitter = {this.state.form.twitter}
                            />
                        </div>
                        <div
                            className = 'col-6'
                        >
                            <BadgeForm
                                onChange = {this.handleChange}
                                formValues = {this.state.form}
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew
