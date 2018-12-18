import React, { Component } from 'react';

import Home from "./Home"
import SideBar from "./SideBar"


class App extends Component {
  render() {
    return (
      <div className="container">
        <SideBar />
        <Home  name = {this.props.name} />
      </div>
    );
  }
}

export default App;
