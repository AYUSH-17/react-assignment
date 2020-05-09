import React, { Component } from 'react';
import './App.css';
import {UserInput,UserOutput} from './User/User.js'

class App extends Component {
  state=
  {
    users:
    [
      {username:'deepti'},
      {username:'Afreen'}
    ]
  }

  switchUsernameHandler=(newUsername)=>{
    this.setState(
      {
        users:
        [
          {username:newUsername},
          {username:'Akshay'}
        ]
      }
    )
  }

  usernameChangeHandler=(event)=>{
    this.setState(
      {
        users:
        [
          {username:'Abhinav'},
          {username:event.target.value}
        ]
      }
    )
  }

  render() {
    const style={
      color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        margin:"auto"
    };

    return (
      <div className="App">
        <button style={style} onClick={()=>this.switchUsernameHandler('Abhinav!!')}>Passing value as Arrow Function</button>
        <br/><br/>
        <button style={style} onClick={this.switchUsernameHandler.bind(this,'Abhinav!')}>Switch button</button>
        <UserOutput username={this.state.users[0].username}
          click={this.switchUsernameHandler.bind(this,'Abhi!')}>
        </UserOutput>
        <UserOutput username={this.state.users[1].username}>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        </UserOutput>
        <UserInput username={this.state.users[1].username}
          changed={this.usernameChangeHandler}>
        </UserInput>
      </div>
    );
  }
}

export default App;
