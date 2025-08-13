/**
 * GitHub Repository interface based on GitHub REST API.
 * Represents the essential data structure for repository information
 * used throughout the application.
 */
export interface GitHubRepository {
  /** Repository name */
  name: string;
  /** Description of the repository */
  description: string | null;
  /** Primary programming language of the repository */
  primaryLanguage: string | null;
  /** Number of stars the repository has received */
  stars: number;
  /** HTML URL for external linking */
  url: string;
}
