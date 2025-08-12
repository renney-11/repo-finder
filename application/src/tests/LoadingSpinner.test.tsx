import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner', () => {
    const { container } = render(<LoadingSpinner />);
    // Check for the spinner by className
    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });
});