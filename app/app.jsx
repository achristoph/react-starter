import React, { Component } from 'react';
import {render} from 'react-dom';
import FilterableProductTable from './components/filterable_product_table';
import './css/normalize.css';
import './css/skeleton.css';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <FilterableProductTable/>
    );
  }
}
render(<App />, document.getElementById('app'));
