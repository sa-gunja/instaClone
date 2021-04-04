import { Route, Switch } from "react-router-dom";
import Home from "pages/Home.js";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
