//import React, { Props } from 'react';
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
        <Home />
      </main>
    </div>
  );
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
      this.state = {};
    }
    render(): JSX.Element | null {
      return null;
    }
}
interface Props {
  readonly user: User
}

interface State {}

export default App;
