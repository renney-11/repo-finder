import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * Test suite for LoadingSpinner component.
 * Verifies spinner rendering, animation classes, and container styling.
 */
describe('LoadingSpinner', () => {
  /**
   * Verifies that loading spinner renders with correct animation class.
   */
  it('should render loading spinner with correct animation class', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });

  /**
   * Tests that spinner has proper accessibility and styling classes applied.
   */
  it('should have proper accessibility and styling classes', () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector('.animate-spin');
    
    expect(spinner).toHaveClass(
      'w-8', 'h-8', 'border-4', 'border-blue-500', 
      'border-t-transparent', 'rounded-full', 'animate-spin'
    );
  });

  /**
   * Verifies that spinner is centered within its container.
   */
  it('should be centered in container', () => {
    const { container } = render(<LoadingSpinner />);
    const containerDiv = container.querySelector('.flex');
    
    expect(containerDiv).toHaveClass('justify-center', 'items-center', 'py-8');
  });
});
