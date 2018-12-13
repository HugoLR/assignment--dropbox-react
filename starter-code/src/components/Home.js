import React, {Component} from 'react'

import Search from "./Search"
import Files from "./Files"

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Search name = {this.props.name} />
      </div>
    )
  }
}

export default Home;
