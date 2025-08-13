import React from 'react';
import { GitHubRepository } from '../types/github';

/**
 * Props for the RepoItem component.
 */
interface RepoItemProps {
  /** The GitHub repository data to display. */
  repo: GitHubRepository;
}

/**
 * Displays a single repository's details in a container format.
 * Shows repository name as a clickable link, description, and primary language.
 * @param {RepoItemProps} props The component props.
 * @return {JSX.Element} A styled repository item card.
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
