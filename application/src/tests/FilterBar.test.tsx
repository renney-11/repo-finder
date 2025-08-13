import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../components/FilterBar';
import { vi } from 'vitest';

/**
   * Verifies that the component applies the correct CSS classes for styling.
   */
describe('FilterBar', () => {
  /** @const {!Function} Mock function for onChange callback testing. */
  const mockOnChange = vi.fn();

  /**
   * Clears mock function calls before each test.
   */
  beforeEach(() => {
    mockOnChange.mockClear();
  });

  /**
   * Verifies that the input renders with correct placeholder and accessibility labels.
   */
  it('should render input with placeholder text', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    expect(screen.getByPlaceholderText('Filter repositories by name')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter repositories by name')).toBeInTheDocument();
  });

  /**
   * Tests that the current filter value is displayed in the input.
   */
  it('should display current filter value', () => {
    render(<FilterBar value="react" onChange={mockOnChange} />);
    
    expect(screen.getByDisplayValue('react')).toBeInTheDocument();
  });

  /**
   * Verifies that onChange callback is called when user types in the input.
   */
  it('should call onChange when user types in input', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'javascript' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('javascript');
  });

  /**
   * Tests that clear button appears when there is a filter value.
   */
  it('should show clear button when there is a filter value', () => {
    render(<FilterBar value="test" onChange={mockOnChange} />);
    
    expect(screen.getByLabelText('Clear filter')).toBeInTheDocument();
  });

  /**
   * Verifies that clear button is hidden when filter is empty.
   */
  it('should not show clear button when filter is empty', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    expect(screen.queryByLabelText('Clear filter')).not.toBeInTheDocument();
  });

  /**
   * Tests that clicking clear button calls onChange with empty string.
   */
  it('should clear filter when clear button is clicked', () => {
    render(<FilterBar value="test" onChange={mockOnChange} />);
    
    const clearButton = screen.getByLabelText('Clear filter');
    fireEvent.click(clearButton);
    
    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  /**
   * Verifies that proper accessibility attributes are applied to the input.
   */
  it('should have proper accessibility attributes', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'repo-filter');
    expect(input).toHaveAttribute('aria-label', 'Filter repositories by name');
  });
});
