import React from "react";
import PropTypes from "prop-types";

const ProductTable = (props) => {
  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((product) => (
          <tr>
            <td> {product.name} </td>
            <td> {product.category}</td>
            <td> {product.price}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

/*ProductTable.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
    })
  ),
};*/
export default ProductTable;
