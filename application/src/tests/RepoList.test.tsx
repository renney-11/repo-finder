import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoList from '../components/RepoList';

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
});