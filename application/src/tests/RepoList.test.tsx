import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoList from '../components/RepoList';
import type { GitHubRepository } from '@/types/github';

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

describe('RepoList', () => {
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

  it('renders empty state when no repos provided', () => {
  render(<RepoList repos={[]} />);
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
});

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

it('renders stars count with icon', () => {
  const { container } = render(<RepoList repos={repos} />);
  expect(screen.getByText('10')).toBeInTheDocument();
  
  // Instead of getAllByRole('img'), query all <svg> elements directly
  const svgs = container.querySelectorAll('svg');
  expect(svgs.length).toBeGreaterThan(0); // should find star SVGs
});


});