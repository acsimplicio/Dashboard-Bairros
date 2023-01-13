import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../Header'

describe('Header component tests', () => {
  it('should contain image', () => {
    render(<Header />);
    const image = screen.getByAltText('Logo Moray');
    expect(image).toBeInTheDocument();
  })
});
