import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from '../components/ProductListItem/ProductListItem'

class ProductsPage extends Component {
  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <ProductListItem />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps)(ProductsPage);
