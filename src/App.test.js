import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders generate button', () => {
  render(<App />);
  const linkElement = screen.getByText(/generate/i);
  expect(linkElement).toBeInTheDocument();
});
