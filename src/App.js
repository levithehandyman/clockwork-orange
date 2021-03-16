import React, {Component} from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

var FontAwesome = require('react-fontawesome');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      break: 5,
      timer: 1500,
      timerLabel: 'Session',
      timerState: 'stopped'
    }
    this.timerID = undefined;
  }

  sessionAdjust = (value) => {
    let newSession = this.state.session + parseInt(value);
    if (newSession > 0 && newSession < 61) {
      this.setState({
        session: newSession,
        timer: newSession * 60
      });
    }
  }

  
  breakAdjust = (value) => {
    let newBreak = this.state.break + parseInt(value);
    if (newBreak > 0 && newBreak < 61) {
      this.setState({
        break: newBreak
      });
    }
  }
  
  startStop = () => {
    if (this.state.timerState === 'stopped') {
      this.timerID = setInterval(this.countdown, 1000);
      this.setState({
        timerState: 'playing'
      });
    } else {
      clearInterval(this.timerID);
      this.setState({
        timerState: 'stopped'
      });
    }
  }
  
  countDown = () => {
    let timer = this.state.timer - 1;
    this.setState({
      timer: timer
    });
    if (timer === 0) {
      //this.audioBeep.play()
    };
    if (timer < 0) {
      if (this.state.timerLabel === 'Session') {
        this.setState({
          timerLabel: 'Break',
          timer: this.state.break * 60
        });
      } else {
        this.setState({
          timerLabel: 'Session',
          timer: this.state.session * 60
        });
      }
    }
  }
  
  resetTimer = () => {
    this.setState({
      session: 25,
      break: 5,
      timer: 1500,
      timerLabel: 'Session',
      timerState: 'stopped'
    });
    clearInterval(this.timerID);
    this.timerID = undefined;
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
  
  secondsIntoClock = () => {
    let minutes = Math.floor(this.state.timer/ 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  
/*class Header extends Component {
  render() {
    return(
      
    );
  }
}

class BreakTimer extends Component {
  render() {
    return(
      
    );
  }
}

class SessionTimer extends Component {
  render() {
    return(
      
    );
  }
}


class Display extends Component{
  render() {
    return(
      
    )
  }
}*/

  

  render() {
    return (
      <div>
        {/*Header*/}
        <div id='header'>
        <h1 className='text'>番茄时钟</h1>
        <h3 className='text'>Fānqié Shízhōng</h3>
      </div>

        {/*<BreakTimer >break</BreakTimer>
        
        need to add onClicks to this 
        
        */}
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

    
        {/*<SessionTimer >session</SessionTimer>*/}
      <div 
      id='session-label' 
      className='clock-container'>
        session length
        <button 
          id='session-increment' 
          className='increment'
          onClick={() => this.sessionAdjust('1')}>
          <FontAwesome className="far fa-caret-square-up"/>
        </button>
          <span id='session-length' className='timer-display'>25</span>
        <button 
          id='session-decrement' 
          className='decrement'
          onClick={() => this.sessionAdjust('-1')}>
          <FontAwesome className="far fa-caret-square-down" />
        </button>
      </div>

        {/*<Display />*/}
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
    </div>
    );
  }
}

export default App;
