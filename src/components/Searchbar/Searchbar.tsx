import React from 'react';
import { Form } from 'react-bootstrap';
import DefaultButton from '../DefaultButton/DefaultButton';

function SearchBar() {
  return (
    <Form>
      <div className="SearchBar" placeholder='Search'></div>
      <DefaultButton> Search </DefaultButton>
    </Form>
  );
}

export default SearchBar;
