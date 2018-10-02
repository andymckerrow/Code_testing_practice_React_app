import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }
  
  omSubmitted = e => {
    e.preventDefault()

    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  render() {
    const { firstName, lastName, email, phoneNumber } = this.state
    return (
      <form onSubmit={this.onSubmitted}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required value={firstName} onChange={e => this.setState({ firstName: e.target.value})} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required value={lastName} onChange={e => this.setState({ lastName: e.target.value})} />
        </div>
        <div> 
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required value={email} onChange={e => this.setState({email: e.target.value})} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" required value={phoneNumber} onChange={e => this.setState({phoneNumber: e.target.value})} />
        </div>
        <div>
          <button id="contact button" type ="submit">Contact</button>
        </div>
        
        </form>
    )
  }
}

export default App;
