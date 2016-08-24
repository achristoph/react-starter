import React from 'react';
import CategoryRow from './product_category_row';
import ProductRow from './product_row';

export default ({products, filterText, inStockOnly}) => {
  let rows = [], lastCategory = null;

  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase()) || (!product.stocked && inStockOnly)) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(<CategoryRow category={product.category} key={product.category}/>);
    }

    rows.push(<ProductRow product={product} key={product.name}/>);
    lastCategory = product.category;

  });

  if (rows.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  } else {
    return <p>Nothing... ¯\_(o_o)_/¯</p>;
  }
}
