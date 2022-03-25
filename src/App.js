import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import "./App.css";
import "./App.less";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
