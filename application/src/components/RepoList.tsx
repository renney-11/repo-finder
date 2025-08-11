import React from 'react';
import { GitHubRepository } from '../types/github';
import { Star } from "lucide-react";

interface RepoListProps {
  repos: GitHubRepository[];
}

/**
 * Displays a list of repositories.
 */
const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {repos.map((repo) => (
        <li key={repo.name} className="py-4">
          {/* Top: Repo name + description */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="text-gray-600 mt-1">{repo.description}</p>
              )}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-2 sm:mt-0 text-gray-700">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span>{repo.stars}</span>
            </div>
          </div>

          {/* Bottom metadata row */}
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            {repo.primaryLanguage && (
              <span className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: getLanguageColor(repo.primaryLanguage),
                  }}
                ></span>
                {repo.primaryLanguage}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

/**
 * Returns a GitHub-like color for the given language.
 * For production, you might want a full map of language colors from GitHub's linguist.
 */
function getLanguageColor(language: string) {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    Vue: "#41b883",
  };
  return colors[language] || "#ccc";
}

export default RepoList;