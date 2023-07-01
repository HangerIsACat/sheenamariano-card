
import Links from "./components/links.js"
import Title from "./components/title.js"

import "./css/App.css";

function Card() {
  return (
    <div>
      <Title />
      <Links />
    </div>
  );
}

function App() {
  return (
    <div className="App App-container center">
      <Card />
    </div>
  );
}

export default App;
