import React, {Component} from 'react';


class BadgeForm extends Component {
    // state = {
    //     first_name: '',
    //     last_name: '',
    //     job_title: '',
    //     twitter: '',
    // }
    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value,
        // });
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }
    render() {
        return(
            <div>
                <h1>New Attendant</h1>
                <form
                    onSubmit = {this.handleSubmit}
                >
                    <div
                        className = 'form-group'
                    >
                        <label>First Name</label>
                        <input
                            className = 'form-control'
                            type = 'text'
                            name = 'first_name'
                            onChange = {this.props.onChange}
                            value = {this.props.formValues.first_name}
                        />
                    </div>
                    <div
                        className = 'form-group'
                    >
                        <label>Last Name</label>
                        <input
                            className = 'form-control'
                            type = 'text'
                            name = 'last_name'
                            onChange = {this.props.onChange}
                            value = {this.props.formValues.last_name}
                        />
                    </div>
                    <div
                        className = 'form-group'
                    >
                        <label>Job Title</label>
                        <input
                            className = 'form-control'
                            type = 'text'
                            name = 'job_title'
                            onChange = {this.props.onChange}
                            value = {this.props.formValues.job_title}
                        />
                    </div>
                    <div
                        className = 'form-group'
                    >
                        <label>Twitter</label>
                        <input
                            className = 'form-control'
                            type = 'text'
                            name = 'twitter'
                            onChange = {this.props.onChange}
                            value = {this.props.formValues.twitter}
                        />
                    </div>
<div
                        className = 'form-group'
                    >
                        <label>Email</label>
                        <input
                            className = 'form-control'
                            type = 'text'
                            name = 'email'
                            onChange = {this.props.onChange}
                            value = {this.props.formValues.email}
                        />
                    </div>

                    <button
                        type = 'button'
                        onClick = {this.handleClick}
                        onChange = {this.handleChange}
                        onSubmit = {this.handleSubmit}
                        className = 'btn btn-primary'
                    >
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm
