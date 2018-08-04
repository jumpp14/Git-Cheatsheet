import React from 'react';
import Command from './command.js';
import './styles.css';

const Header = (props) =>
  <div className="card-header">{props.header}</div>
  
const headers = [];

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cheatsheet: []
    }
  }

  componentDidMount() {
    fetch('cheatsheet.json')
      .then(response => response.json())
      .then(data => this.setState({cheatsheet: data}))
  }

  renderCard(header){
    return (
      <div className="card">
        <Header header={header} />
        {this.state.cheatsheet.map(item => (
          item.category === header? <Command command={item.command} description={item.description}/>: null))}
      </div>)}

  getHeaders(headers,item) {
    if(!headers.includes(item.category)){
      headers.push(item.category);
    }
  }

  render() {
    this.state.cheatsheet.map(item => this.getHeaders(headers, item));
    return( 
    <div className="container-fluid">
      <div className="card-columns">
          {headers.map(header => this.renderCard(header))}
      </div>
    </div>
    );
  }
}

export default Board;