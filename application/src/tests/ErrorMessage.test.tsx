import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage', () => {
  it('should render error message with correct text', () => {
    render(<ErrorMessage message="Something went wrong" />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should render different error messages', () => {
    const { rerender } = render(<ErrorMessage message="First error" />);
    expect(screen.getByText('First error')).toBeInTheDocument();
    
    rerender(<ErrorMessage message="Second error" />);
    expect(screen.getByText('Second error')).toBeInTheDocument();
  });

  it('should have correct CSS classes for styling', () => {
    render(<ErrorMessage message="Test error" />);
    const errorElement = screen.getByText('Test error');
    expect(errorElement).toHaveClass('text-center', 'text-red-600', 'font-medium', 'py-4');
  });
});