import React from 'react';
import { GitHubRepository } from '../types/github';
import RepoItem from './RepoItem';

interface RepoListProps {
  repos: GitHubRepository[];
}

/**
 * Displays a list of repositories.
 */
const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoItem key={repo.html_url} repo={repo} />
      ))}
    </ul>
  );
};

export default RepoList;