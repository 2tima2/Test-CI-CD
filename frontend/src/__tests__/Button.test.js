// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('renders button with correct text', () => {
  const { getByText } = render(<Button>Click me</Button>);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick prop when button is clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = getByText('Click me');
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
