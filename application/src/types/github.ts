/**
 * GitHub Repository interface based on GitHub REST API v3.
 */
export interface GitHubRepository {
  /** Repository name */
  name: string;
  /** Description of the repository */
  description: string | null;
  /** Primary language of the repository */
  language: string | null;
  /** Repository HTML URL */
  html_url: string;
}
