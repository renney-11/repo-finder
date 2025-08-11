/**
 * GitHub Repository interface based on GitHub REST API v3.
 */
export interface GitHubRepository {
  /** Repository name */
  name: string;
  /** Description of the repository */
  description: string | null;
  /** Primary language of the repository */
  primaryLanguage: string | null;
  /** Repository HTML URL */
  stars: number;
  url: string;
}
