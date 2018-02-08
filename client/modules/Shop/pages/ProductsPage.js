import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from '../components/ProductListItem/ProductListItem';
import { fetchProducts } from '../ShopActions';

class ProductsPage extends Component {

  componentDidMount() {
    if (!this.props.initialLoadComplete) {
      this.props.dispatch(fetchProducts());
    }
  }

  render() {
    return (
      <div>
        <h1>HELLO</h1>
        {this.props.products.map((product) => (
          <ProductListItem {...product} key={product._id} />
        ))}
      </div>
    );
  }
}

ProductsPage.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    products: state.shop.products,
  };
}

export default connect(mapStateToProps)(ProductsPage);
