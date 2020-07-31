import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders welcome to swapp link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/welcome to swapp/i);
  expect(linkElement).toBeInTheDocument();
});
