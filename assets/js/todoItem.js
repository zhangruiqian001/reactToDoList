import React from 'react';

export default class todoItem extends React.Component {
  render() {
    return (
      <li>
      		{this.props.children}
      </li>
    );
  }
}
