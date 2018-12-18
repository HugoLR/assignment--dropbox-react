import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <ul>
          <li><i className="fab fa-dropbox"></i></li>
        </ul>
        <ul>
          <li>Profile</li>
          <li>Setting</li>
          <li>Log out</li>
        </ul>
      </div>
    )
  }
}

export default SideBar
