import {
    BrowserRouter as Router,

    Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:teamIid">
          <TeamDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;