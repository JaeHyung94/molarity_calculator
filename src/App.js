import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home}></Route>
    </HashRouter>
  );
}

export default App;
