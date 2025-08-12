import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('should render loading spinner with correct animation class', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('should have proper accessibility and styling classes', () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector('.animate-spin');
    
    expect(spinner).toHaveClass(
      'w-8', 'h-8', 'border-4', 'border-blue-500', 
      'border-t-transparent', 'rounded-full', 'animate-spin'
    );
  });

  it('should be centered in container', () => {
    const { container } = render(<LoadingSpinner />);
    const containerDiv = container.querySelector('.flex');
    
    expect(containerDiv).toHaveClass('justify-center', 'items-center', 'py-8');
  });
});