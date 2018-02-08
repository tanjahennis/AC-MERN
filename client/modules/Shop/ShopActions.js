import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';

// Export Actions
export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

// Export Actions
export function fetchProducts() {
  return (dispatch) => {
    return callApi('products').then(res => {
      dispatch(addProducts(res.products));
    });
  };
}
