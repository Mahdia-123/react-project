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
          This page was coded by{" "}
          <a href="https://github.com/Mahdia-123" target="_blank">
            Mahdia Khamoosh
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Mahdia-123/react-project" target="_blank">
            open-sourced o Github
          </a>{" "}
          hosted on{" "}
          <a href="https://lovely-weather-search.netlify.app/ " target="_blank">
            Netlify
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
