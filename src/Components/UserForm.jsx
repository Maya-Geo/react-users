import React, { Component } from 'react';
import './Form.css'

class UserForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                email: "",
                number: ""
            }
        }
    
        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }
    
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addUser(this.state);
            this.setState({
                name: "",
                email: "",
                number: ""
            })
        }
    
    
    render() {
        return (
            <div style = {{textAlign: "center"}}>
                 <form onSubmit={this.handleSubmit}>  
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <br></br>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <br></br>
                <div className="form-control">
                    <label htmlFor="number">Number</label>
                    <input
                        type="number"
                        name="number"
                        value={this.state.gen}
                        onChange={this.handleChange}
                    />
                </div>
                <br></br>
                <div className="form-control">
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        );
    }
}

export default UserForm;
