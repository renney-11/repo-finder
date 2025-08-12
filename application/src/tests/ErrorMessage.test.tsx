import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage', () => {
  it('renders error message', () => {
    render(<ErrorMessage message="Something went wrong" />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});