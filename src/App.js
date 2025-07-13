import "./App.css";
import "./weatherapp.css";
import Weatherapp from "./Weatherapp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weatherapp />
        <footer>
          This page was coded by <a href="/">Mahdia Khamoosh</a> and is{" "}
          <a href="/">open-sourced o Github</a> hosted on{" "}
          <a href="/">Netlify</a>
        </footer>
      </header>
    </div>
  );
}

export default App;
