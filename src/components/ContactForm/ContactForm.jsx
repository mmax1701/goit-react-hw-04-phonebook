import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.reset();
    };

    handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    reset = () => {
        this.setState({ name: '', number: '',})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be entered in the format: '+99 999 999 99 9'. For example: '02 952 123 45 67'"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                
                <button type="submit" className={css.btn}>Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}