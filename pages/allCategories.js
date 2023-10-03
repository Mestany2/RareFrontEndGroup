/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { getCategories } from '../api/categoriesData';
import CategoryTable from '../components/CategoryTable';
import CategoryForm from '../components/CategoryForm';

function CategoryPage() {
  const [categories, setCategory] = useState([]);
  const getTheCategeories = () => {
    getCategories().then(setCategory);
  };
  useEffect(() => {
    getTheCategeories();
    console.warn(categories)
  }, []);
  return (
    <>

      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          // maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>Please Select From A Category Below</h1>
      </div>
       <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        
          <CategoryForm />
      </div> 
      <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {categories?.map((category, filter) => (
          <CategoryTable key={filter} CategoryObj={category} />))}
      </div>
    </>
  );
}
export default CategoryPage;