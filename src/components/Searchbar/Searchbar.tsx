import React from 'react';
import { Form } from 'react-bootstrap';
import NavbarButton from '../NavbarButton/NavbarButton';

function SearchBar() {
  return (
    <Form>
      <div className="SearchBar" placeholder='Search'></div>
      <NavbarButton> Search </NavbarButton>
    </Form>
  );
}

export default SearchBar;
