import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoItem from '../components/RepoItem';
import type { GitHubRepository } from '@/types/github';

/** @const {!GitHubRepository} Mock repository data for testing. */
const repo = {
  name: 'repo1',
  url: 'https://github.com/user/repo1',
  description: 'A test repo',
  primaryLanguage: 'JavaScript',
  stars: 42,
};

/**
 * Test suite for RepoItem component.
 * Tests repository data rendering, optional fields, and link attributes.
 */
describe('RepoItem', () => {
  /**
   * Verifies that repo name, description, and language are rendered correctly.
   */
  it('renders repo name, description, and language', () => {
    render(<RepoItem repo={repo} />);
    expect(screen.getByText('repo1')).toBeInTheDocument();
    expect(screen.getByText('A test repo')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  /**
   * Tests that component renders correctly when description and language are null.
   */
  it('renders correctly without description and language', () => {
    /** @const {!GitHubRepository} Repository without description and language. */
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

  /**
   * Verifies that repository link has correct attributes for external navigation.
   */
  it('link has correct attributes', () => {
    render(<RepoItem repo={repo} />);
    const link = screen.getByRole('link', { name: 'repo1' });
    expect(link).toHaveAttribute('href', repo.url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
