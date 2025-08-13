import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { vi } from 'vitest';

/**
 * Test suite for SearchBar component.
 * Tests form submission, input validation, and search functionality.
 */
describe('SearchBar', () => {
  /**
   * Verifies that onSearch is called with correct username when form is submitted.
   */
  it('calls onSearch with the username when form is submitted', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByLabelText(/github username/i);
    fireEvent.change(input, { target: { value: 'octocat' } });
    fireEvent.submit(input.closest('form')!);
    expect(onSearch).toHaveBeenCalledWith('octocat');
  });

  /**
   * Tests that onSearch is not called when input is empty or contains only whitespace.
   */
  it('does not call onSearch if input is empty or whitespace', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByLabelText(/github username/i);

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(input.closest('form')!);
    expect(onSearch).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(input.closest('form')!);
    expect(onSearch).not.toHaveBeenCalled();
  });

  /**
   * Verifies that input value updates correctly when user types.
   */
  it('updates input value on change', () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByLabelText(/github username/i);
    fireEvent.change(input, { target: { value: 'octocat' } });
    expect(input).toHaveValue('octocat');
  });

  /**
   * Tests that onSearch is called when search button is clicked.
   */
  it('calls onSearch when search button is clicked', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByLabelText(/github username/i);
    fireEvent.change(input, { target: { value: 'octocat' } });

    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(onSearch).toHaveBeenCalledWith('octocat');
  });
});
