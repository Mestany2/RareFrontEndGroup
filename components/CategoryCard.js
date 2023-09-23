/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CategoryCard({ CategoryObj }) {
  return (
    <Card className="e-card e-card-horizontal" style={
        { display: 'flex', flexDirection: 'row', width: '14rem', height: '100%', marginBottom: '1.5px' }
        }>
      <Card.Text style={{ height: '100px', textAlign: 'center' }}>
        {CategoryObj?.label}
      </Card.Text>
    </Card>
  );
}

CategoryCard.propTypes = {
  CategoryObj: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default CategoryCard;