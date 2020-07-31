import React from 'react';
import { Form } from 'react-bootstrap';
import NavBarButton from '../NavBarButtons/NavBarButton/NavBarButton';

function SearchBar() {
  return (
    <Form>
      <div className="SearchBar" placeholder='Search'></div>
      <NavBarButton> Search </NavBarButton>
    </Form>
  );
}

export default SearchBar;
