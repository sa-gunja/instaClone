import { Route, Switch } from "react-router-dom";
import Home from "pages/Home.js";
import Login from "pages/Login.js";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
