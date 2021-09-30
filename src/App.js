import Home from "./Components/Home/Home";
import Subpost from "./Components/Subpost/Subpost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/Subpost/:postId">
        <Subpost></Subpost>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
