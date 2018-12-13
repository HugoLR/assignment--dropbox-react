import React, { Component } from 'react'


class File extends Component {
  render() {
    return (
      <li className="file__item">
        <div className="grid grid--expanded">
          <div className="grid">
            <span className="file__icon">
              <i className="fa fa-file-text-o"></i>
            </span>
            <p className="file__meta">
              <span className="file__name">{this.props.nameFile}</span> <br />
              <span>{this.props.date}</span>
              <button className="file__button">
                <i className="fa fa-download"></i>
              </button>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default File
