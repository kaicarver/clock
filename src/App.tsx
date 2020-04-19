import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          It's Typescript!
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
      <main>
        <WorldClocks />
      </main>
    </div>
  );
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString(props.locale)} on {Intl.DateTimeFormat(props.locale, { timeZone: props.timeZone }).format(props.date)} in {props.timeZone}.</h2>;
}
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
      return (
        <div>
          <FormattedDate date={this.state.date} locale={this.props.locale} timeZone={this.props.timeZone}  />
        </div>
      );
    }
  }
  function WorldClocks() {
    return (
      <div>
        <Clock locale="fr-FR" timeZone="Europe/Paris"/>
        <Clock locale="zh-TW" timeZone="Asia/Taipei"/>
        <Clock locale="ar-EG" timeZone="Africa/Cairo"/>
        <Clock/>
      </div>
    );
  }


export default App;
