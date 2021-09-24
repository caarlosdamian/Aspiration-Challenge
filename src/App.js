import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Router>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
}

export default App;
