import './App.css';
import Grid from './Grid';

function App() {

  return (
    <>
      <div className="App">
        <h1> Conway's Game of Life </h1>
        <p className = "Credits"><em> Credits to Mathematician <a href = "https://en.wikipedia.org/wiki/John_Horton_Conway"> John Horton Conway </a> </em> </p>
      </div>
      <p className = "Instructions">  Click directly on squares to mark them as active. After you've created your optimal initial configuration, click start. To halt the game and re-configure, click stop. </p>
      <Grid size={20} />
    </>
  );
}

export default App;
