import React from 'react';

import './name-search.styles.scss';
class NameSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      currName: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleClick = (e) => {
    console.log(e);
  }

  render(){
    const friends = this.props.data.friends;
    const filteredNames = friends.filter(friend => 
      friend.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    
    return(
      <div>
        <div className="name-search">
        <input 
          type="search" 
          placeholder="Enter a name..."
          onChange={this.handleChange}
        />
        </div>
        <div className="name-list">
          <ul>
          {filteredNames.map(filteredName => {
            return <li onClick={this.handleClick}>{filteredName.name}</li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NameSearch;