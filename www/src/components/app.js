import { Router } from "preact-router";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";

const App = () => (
  <div id="app">
    <Header />
    <section>
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </section>
  </div>
);

export default App;
