import logo from './logo.svg';
import './App.css';

function App() {
  return (
<body>
<h1 style = {{color:"red"}}>Test</h1>
<p>Text</p>
</body>
  );
}

function Default()
{
  return(
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
        <p>Test</p>
      </header>
    </div>
  );
}
export default App;
