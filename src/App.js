import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/edit" component={Edit} exact />
      </Switch>
    </Router>
  );
}

export default App;
