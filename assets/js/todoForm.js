import React from 'react';

export default class todoForm extends React.Component {
  render() {
    return (
    	<form>
        	<input type="text" placeholder="Content" />
        	<input type="submit" value="Post" />
      	</form>
    );
  }
}
