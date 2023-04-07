import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="footer">
          Coded by Hannah Marie Joyce. Open-source code available on GitHub{" "}
          <a
            href="https://github.com/hmariejoyce/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
