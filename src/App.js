import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/Route";

import configureStore from "./store";
import Navigation from "./components/navigation";
import Bio from "./components/bio";
import Projects from "./components/projects";
import Skills from "./components/skills";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />
            <br />

            <div className="container">
              <Route path="/" exact render={() => {
                return (<Bio />)
              }} />

              <Route path="/skills/" render={() => {
                return (<Skills />)
              }} />

              <Route path="/projects/" render={() => {
                return (<Projects />)
              }} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
