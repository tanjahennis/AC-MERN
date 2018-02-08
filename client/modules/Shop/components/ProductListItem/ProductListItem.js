import React, { Component } from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

class ProductListItem extends Component {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  render() {
    return (
      <div>
        <h1><FormattedMessage id="productName" />: {this.props.name}</h1>
        <p><FormattedMessage id="dateAdded" /><span>: </span>
        <FormattedDate
          value={this.props.dateAdded}
          day='2-digit'
          month='long'
          year='numeric' /></p>
      </div>
    );
  }
}

export default ProductListItem;
