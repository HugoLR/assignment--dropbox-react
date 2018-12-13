import React, { Component } from 'react';

import Home from "./Home"
import SideBar from "./SideBar"
import RightBar from "./RightBar"

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="container">
        <SideBar />
        <Home  name = {this.props.name} />
        <RightBar />
      </div>
    );
  }
}

export default App;
