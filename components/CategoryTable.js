import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

function CategoryTable({ CategoryObj }) {
  return (
    <div className="triptable">
      <Table>
        <thead className="mb-3 text-white">
          <tr>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="mb-3 text-white">
          <tr>
            {/* <td>Categories:</td> */}
            <td>{CategoryObj?.label}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

CategoryTable.propTypes = {
  CategoryObj: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default CategoryTable;
