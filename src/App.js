import React, {Component} from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

var FontAwesome = require('react-fontawesome');

// components:

class Header extends Component {
  render() {
    return(
      <div id='header'>
        <h1 className='text'>番茄时钟</h1>
        <h3 className='text'>Fānqié Shízhōng</h3>
      </div>
    );
  }
}

class BreakTimer extends Component {
  render() {
    return(
      <div 
      id='break-label'
      className='clock-container'>break length
        <button id='break-increment' className='increment'>
          <FontAwesome className="far fa-caret-square-up"/>
        </button>
          <span id='break-length' className='timer-display'>5</span>
        <button 
          id='break-decrement' 
          className='decrement'>
          <FontAwesome className="far fa-caret-square-down" />
        </button>
      </div>
    );
  }
}

class SessionTimer extends Component {
  render() {
    return(
      <div 
      id='session-label' 
      className='clock-container'>
        session length
        <button 
          id='session-increment' 
          className='increment'>
          <FontAwesome className="far fa-caret-square-up"/>
        </button>
          <span id='session-length' className='timer-display'>25</span>
        <button 
          id='session-decrement' 
          className='decriment'>
          <FontAwesome className="far fa-caret-square-down" />
        </button>
      </div>
    );
  }
}


class Display extends Component{
  render() {
    return(
      <div className='display'>
        <h2>time left</h2>
        <br />
        <span id='time-left'>0:00</span>
        <br />
        <button 
          id='start_stop' 
          className='action-button'>
          <FontAwesome className="fas fa-stopwatch" />
        </button>
        <button 
          id='reset'
          className='action-button'>
          <FontAwesome className="fas fa-sync-alt" />
        </button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreakTimer >break</BreakTimer>
        <SessionTimer >session</SessionTimer>
        <Display />
      </div>
    );
  }
}

export default App;
