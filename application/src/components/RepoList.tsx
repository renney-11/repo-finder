import React from 'react';
import { GitHubRepository } from '../types/github';

/**
 * Props for the RepoList component.
 */
interface RepoListProps {
  /** Array of GitHub repositories to display. */
  repos: GitHubRepository[];
}

/**
 * Renders a list of repositories in a GitHub-like single-column list view.
 * Each repository shows name, description, language with color indicator, and star count.
 * @param {RepoListProps} props The component props.
 * @return {JSX.Element} A styled list of repository items.
 */
const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {repos.map((repo) => (
        <li key={repo.url} className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline text-lg"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="text-gray-600 mt-1">{repo.description}</p>
              )}
              <div className="mt-3 text-sm text-gray-500 flex items-center gap-4">
                {repo.primaryLanguage && (
                  <span className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: getLanguageColor(repo.primaryLanguage) }}
                      aria-hidden
                    />
                    <span>{repo.primaryLanguage}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 sm:mt-0 sm:ml-6 flex items-center gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{repo.stars}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

/**
 * Returns a color hex code for a given programming language.
 * Used to display language indicators with appropriate colors.
 * @param {string} language The programming language name.
 * @return {string} Hex color code for the language.
 */
function getLanguageColor(language: string) {
  const map: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    Vue: '#41b883',
  };
  return map[language] || '#94a3b8';
}

export default RepoList;
