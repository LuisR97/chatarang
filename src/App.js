import React, { Component } from 'react';
import './App.css';
import Main from "./Main"

class App extends Component 
{

  constructor()
  {
    super()

    this.state = 
    {
      user: 
      {
        uid: 'Luis',
        displayName: 'Luis',
        email: 'ray@gmail.com',
      },
    }
  }

  render()
  {
    return (
      <div className="App">
        Chatarang
        <Main user = {this.state.user}/>
      </div>
    );
  }
}

export default App;
