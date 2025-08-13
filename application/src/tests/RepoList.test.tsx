import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoList from '../components/RepoList';
import type { GitHubRepository } from '@/types/github';

/** @const {!Array<!GitHubRepository>} Mock repositories array for testing. */
const repos = [
  {
    name: 'repo1',
    url: 'https://github.com/user/repo1',
    description: 'First repo',
    primaryLanguage: 'JavaScript',
    stars: 10,
  },
  {
    name: 'repo2',
    url: 'https://github.com/user/repo2',
    description: 'Second repo',
    primaryLanguage: 'TypeScript',
    stars: 20,
  },
];

/**
 * Test suite for RepoList component.
 * Tests repository list rendering, empty states, language colors, and star display.
 */
describe('RepoList', () => {
  /**
   * Verifies that all repository data is rendered correctly in the list.
   */
  it('renders a list of repositories with names and languages', () => {
    render(<RepoList repos={repos} />);
    expect(screen.getByText('repo1')).toBeInTheDocument();
    expect(screen.getByText('repo2')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('First repo')).toBeInTheDocument();
    expect(screen.getByText('Second repo')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
  });

  /**
   * Tests that component renders empty state when no repositories are provided.
   */
  it('renders empty state when no repos provided', () => {
    render(<RepoList repos={[]} />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  /**
   * Verifies that unknown programming languages get default color styling.
   */
  it('shows default color for unknown language', () => {
    const unknownLangRepo: GitHubRepository = {
      name: 'repo2',
      url: 'https://github.com/user/repo2',
      description: null,
      primaryLanguage: "UnknownLang",
      stars: 0,
    };
    render(<RepoList repos={[unknownLangRepo]} />);
    const colorDot = screen.getByText('UnknownLang').previousSibling;
    expect(colorDot).toHaveStyle('background-color: #94a3b8'); // fallback color
  });

  /**
   * Tests that star count is rendered with star icon SVG elements.
   */
  it('renders stars count with icon', () => {
    const { container } = render(<RepoList repos={repos} />);
    expect(screen.getByText('10')).toBeInTheDocument();
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0); // should find star SVGs
  });
});
