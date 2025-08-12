import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoItem from '../components/RepoItem';
import type { GitHubRepository } from '@/types/github';

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

  it('renders correctly without description and language', () => {
  const repoNoDescLang: GitHubRepository = {
  name: 'repo2',
  url: 'https://github.com/user/repo2',
  description: null,
  primaryLanguage: null,
  stars: 0,
};
  render(<RepoItem repo={repoNoDescLang} />);
  expect(screen.getByText('repo2')).toBeInTheDocument();
  expect(screen.queryByText('description')).not.toBeInTheDocument();
  expect(screen.queryByText('primaryLanguage')).not.toBeInTheDocument();
});


it('link has correct attributes', () => {
  render(<RepoItem repo={repo} />);
  const link = screen.getByRole('link', { name: 'repo1' });
  expect(link).toHaveAttribute('href', repo.url);
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

});