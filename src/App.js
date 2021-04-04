import { Route, Switch } from "react-router-dom";
import MainHeader from "components/MainHeader.js";
import Home from "pages/Home.js";
import Menu from "components/Menu.js";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Menu />
    </div>
  );
}

export default App;
