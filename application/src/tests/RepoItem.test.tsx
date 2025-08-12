import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoItem from '../components/RepoItem';

const repo = {
  name: 'repo1',
  url: 'https://github.com/user/repo1',
  description: 'A test repo',
  primaryLanguage: 'JavaScript',
  stars: 42,
};

describe('RepoItem', () => {
  it('renders repo name, description, and language', () => {
    render(<RepoItem repo={repo} />);
    expect(screen.getByText('repo1')).toBeInTheDocument();
    expect(screen.getByText('A test repo')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    // No assertion for stars, as RepoItem does not render stars
  });
});