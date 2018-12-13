import React, {Component} from "react";

import Files from "./Files"

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files : this.props.name,
      open : false,
    };
  }

  searchByName = (e) => {
    var query = e.target.value.toLowerCase();

    var coincidences = this.props.name.filter(function(file){
      var fileInLowerCase = file.name.toLowerCase();

      return fileInLowerCase.includes(query);
    });

    this.setState({
      files :coincidences
    });
  }

  render(){
    return(
      <div>
        <input onChange={this.searchByName} type="search" placeholder="Search" />
        <Files files={this.state.files} />
      </div>
    )
  }
}

export default Search;
