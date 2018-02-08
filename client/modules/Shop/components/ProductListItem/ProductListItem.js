import React, { Component } from 'react';

class ProductListItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.dateAdded}</p>
      </div>
    );
  }
}

export default ProductListItem;
