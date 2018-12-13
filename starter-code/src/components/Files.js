import React, { Component } from 'react'

import File from './File.js'

class Files extends Component {
  construc
  render() {
    return (
      <React.Fragment>
        <h3>Recent</h3>
         <ul>
          {
              this.props.files.map(function(file){
              return <File nameFile = {file.name}
                      date = {file.added_at} />

            })
          }
         </ul>
      </React.Fragment>
    )
  }
}

export default Files
