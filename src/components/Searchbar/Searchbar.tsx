import React from 'react';
import useStyles from './styles';
import { Form, FormControl } from 'react-bootstrap';

export default function SearchBar() {
  const classes = useStyles()

  return (
    <Form>
      <FormControl
        className={classes.searchBar}
        type='text'
        placeholder='Search'
      />
    </Form>
  );
}
