import './App.css';
import Grid from './Grid';

function App() {

  return (
    <>
      <div className="App">
        <h1> Conway's Game of Life </h1>
        <p className = "Credits"> <em> Credits to Mathematician <a href = "https://en.wikipedia.org/wiki/John_Horton_Conway"> John Horton Conway </a> </em> </p>
      </div>
      <Grid size={20} />
    </>
  );
}

export default App;
