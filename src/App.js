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

class Timer extends Component {
  render() {
    return(
      <div className='clock-container'>
        <button className='increment'>
          <FontAwesome className="far fa-caret-square-up"/>
        </button>
          <span className='timer-display'>25:00</span>
        <button className='decriment'>
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
        <span>0:00</span>
        <br />
        <button className='action-button'>
          <FontAwesome className="fas fa-stopwatch" />
        </button>
        <button className='action-button'>
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
        <Timer id=''>break</Timer>
        <Timer >session</Timer>
        <Display />
      </div>
    );
  }
}

export default App;
