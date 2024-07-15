import React from 'react';
import { render, screen } from '@testing-library/react';
import TabTree from './TabTree';

test('renders current tabs header', () => {
  render(<TabTree />);
  const linkElement = screen.getByText(/Current Tabs/i);
  expect(linkElement).toBeInTheDocument();
});
