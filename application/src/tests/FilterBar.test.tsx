import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../components/FilterBar';
import { vi } from 'vitest';

describe('FilterBar', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should render input with placeholder text', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    expect(screen.getByPlaceholderText('Filter repositories by name')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter repositories by name')).toBeInTheDocument();
  });

  it('should display current filter value', () => {
    render(<FilterBar value="react" onChange={mockOnChange} />);
    
    expect(screen.getByDisplayValue('react')).toBeInTheDocument();
  });

  it('should call onChange when user types in input', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'javascript' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('javascript');
  });

  it('should show clear button when there is a filter value', () => {
    render(<FilterBar value="test" onChange={mockOnChange} />);
    
    expect(screen.getByLabelText('Clear filter')).toBeInTheDocument();
  });

  it('should not show clear button when filter is empty', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    expect(screen.queryByLabelText('Clear filter')).not.toBeInTheDocument();
  });

  it('should clear filter when clear button is clicked', () => {
    render(<FilterBar value="test" onChange={mockOnChange} />);
    
    const clearButton = screen.getByLabelText('Clear filter');
    fireEvent.click(clearButton);
    
    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  it('should have proper accessibility attributes', () => {
    render(<FilterBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'repo-filter');
    expect(input).toHaveAttribute('aria-label', 'Filter repositories by name');
  });
});