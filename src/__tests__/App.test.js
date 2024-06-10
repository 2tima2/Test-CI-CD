// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders counter with initial count of zero', () => {
  const { getByText } = render(<App />);
  const counterElement = getByText(/Count: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments counter when the button is clicked', () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText('Increment');
  fireEvent.click(incrementButton);
  const counterElement = getByText(/Count: 1/i);
  expect(counterElement).toBeInTheDocument();
});
