import React, { Component } from 'react'

import File from './File.js'

class Files extends Component {
  constructor(){
    super();

    this.state = {
      fileName: [],
      fileSize: [],
      total: 0
    }
  }

  addFile = (fileId) => {
    var file = this.props.files.filter((file) => {
      return file.id === fileId
    });
    console.log(file)
    var compressFile = file[0].name
    var compressSize = file[0].size
    this.setState({
      fileName: this.state.fileName.concat(compressFile),
      fileSize: this.state.fileSize.concat(compressSize),
      total: this.state.total + parseInt(compressSize)
    })
  }

  render() {
    return (
      <div className="home-container">
        <div className="main">
          <h3>Recent</h3>
           <ul>
            {
                this.props.files.map((file) =>{
                return (
                  <div>
                    <File nameFile = {file.name} date = {file.added_at} />
                    <button onClick={() => this.addFile(file.id) } >
                      <i className="fa fa-download"></i>
                    </button>
                  </div>
                  )
              })
            }
           </ul>
         </div>
         <div className="state">
            <h2>Compress</h2>
            <p>{this.state.total} Kb</p>
            <ul>
              {this.state.fileName.map((file, index) =>{
                return (
                  <li key={ index }>{file}</li>
                );
              })
          }
          {this.state.fileSize.map((file, index) =>{
            return (
              <li>{file}</li>
            );
          })
        }


            </ul>
         </div>
      </div>
    )
  }
}

export default Files
