import "./App.css";
import Avatars from "./Avatars/Avatars";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail/CharacterDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Avatars />
          </Route>
          <Route exact path="/character/:id">
            <CharacterDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
