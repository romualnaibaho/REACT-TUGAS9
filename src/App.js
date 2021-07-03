import React, { Component } from "react";
import Navigation from "./Layouts/Navigation";
import Content from "./Layouts/Content";

class App extends Component {
  render(){
    return (
      <div>
          <Navigation/>
          <Content/>
      </div>
    );
  }
}

export default App;
