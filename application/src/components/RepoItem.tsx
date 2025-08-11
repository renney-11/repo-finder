import React from 'react';
import { GitHubRepository } from '../types/github';

interface RepoItemProps {
  repo: GitHubRepository;
}

/**
 * Displays a single repository's details.
 */
const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <li className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {repo.name}
      </a>
      {repo.description && <p className="text-gray-600 mt-1">{repo.description}</p>}
      {repo.primaryLanguage && <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-200 rounded">{repo.primaryLanguage}</span>}
    </li>
  );
};

export default RepoItem;