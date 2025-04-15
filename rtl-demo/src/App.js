// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={0}/>
      </header>
    </div>
  );
}

export default App;
