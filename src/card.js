import React from 'react';
let cheatsheet = [];
class Card extends React.Component {
  componentDidMount() {
    fetch('cheatsheet.json')
      .then(response => response.json())
      .then(data => cheatsheet.push(data))
  }

  render() {
  	return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

export default Card;
