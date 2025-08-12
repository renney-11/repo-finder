import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { vi } from 'vitest';

describe('SearchBar', () => {
  it('calls onSearch with the username when form is submitted', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByLabelText(/github username/i);
    fireEvent.change(input, { target: { value: 'octocat' } });
    fireEvent.submit(input.closest('form')!);
    expect(onSearch).toHaveBeenCalledWith('octocat');
  });
});