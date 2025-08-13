import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

/**
 * Test suite for ErrorMessage component.
 * Verifies error message rendering, styling, and text display functionality.
 */
describe('ErrorMessage', () => {
  /**
   * Verifies that the component renders the provided error message text.
   */
  it('should render error message with correct text', () => {
    render(<ErrorMessage message="Something went wrong" />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  /**
   * Tests that the component can render different error messages when re-rendered.
   */
  it('should render different error messages', () => {
    const { rerender } = render(<ErrorMessage message="First error" />);
    expect(screen.getByText('First error')).toBeInTheDocument();
    
    rerender(<ErrorMessage message="Second error" />);
    expect(screen.getByText('Second error')).toBeInTheDocument();
  });

  /**
   * Verifies that the component applies the correct CSS classes for styling.
   */
  it('should have correct CSS classes for styling', () => {
    render(<ErrorMessage message="Test error" />);
    const errorElement = screen.getByText('Test error');
    expect(errorElement).toHaveClass('text-center', 'text-red-600', 'font-medium', 'py-4');
  });
});
