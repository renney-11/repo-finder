import { GitHubRepository } from "../types/github";

/**
 * Mock repository data for testing and Storybook stories.
 * Represents various repository scenarios including different languages,
 * star counts, and description states.
 * @const {!Array<!GitHubRepository>}
 */
export const mockRepos: GitHubRepository[] = [
  {
    name: "repo-finder",
    description: "A tool to find and filter GitHub repositories",
    url: "https://github.com/example/repo-finder",
    primaryLanguage: "TypeScript",
    stars: 42,
  },
  {
    name: "awesome-project",
    description: "An awesome project",
    url: "https://github.com/example/awesome-project",
    primaryLanguage: "JavaScript",
    stars: 100,
  },
  {
    name: "minimal-repo",
    description: "",
    url: "https://github.com/example/minimal-repo",
    primaryLanguage: "Python",
    stars: 5,
  },
];
