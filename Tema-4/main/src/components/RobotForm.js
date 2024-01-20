import React, { Component } from 'react';

class RobotForm extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            name: '',
            type: '',
            mass: '',
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleTypeChange = (event) => {
        this.setState({ type: event.target.value });
    };

    handleMassChange = (event) => {
        if (event.target.value > 500) {
            this.setState({ mass: event.target.value });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, type, mass } = this.state;

        const newRobot = {
            name: name,
            type: type,
            mass: mass,
        };

        this.props.onAdd(newRobot);

        this.setState({
            name: '',
            type: '',
            mass: '',
        });
    };

    render() {
        const { name, type, mass } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input placeholder="name" type="text" value={name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <label>Type:</label>
                    <input placeholder="type" type="text" value={type} onChange={this.handleTypeChange} />
                </div>
                <div>
                    <label>Mass:</label>
                    <input placeholder="mass" type="text" value={mass} onChange={this.handleMassChange} />
                </div>
                <button type="submit">add</button>
            </form>
        );
    }
}

export default RobotForm;