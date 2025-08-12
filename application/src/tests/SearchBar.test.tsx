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

it('updates input value on change', () => {
  render(<SearchBar onSearch={() => {}} />);
  const input = screen.getByLabelText(/github username/i);
  fireEvent.change(input, { target: { value: 'octocat' } });
  expect(input).toHaveValue('octocat');
});

it('calls onSearch when search button is clicked', () => {
  const onSearch = vi.fn();
  render(<SearchBar onSearch={onSearch} />);
  const input = screen.getByLabelText(/github username/i);
  fireEvent.change(input, { target: { value: 'octocat' } });

  fireEvent.click(screen.getByRole('button', { name: /search/i }));
  expect(onSearch).toHaveBeenCalledWith('octocat');
});
});