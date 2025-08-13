import { GitHubRepository } from "../types/github";

/**
 * Fetches repositories for a given GitHub username using GitHub GraphQL API.
 * Retrieves the 20 most recently created repositories with their metadata.
 * @param {string} username The GitHub username to fetch repositories for.
 * @return {Promise<!Array<!GitHubRepository>>} Promise resolving to array of repositories.
 * @throws {Error} When GitHub token is missing or API request fails.
 */
export async function fetchRepos(username: string): Promise<GitHubRepository[]> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) throw new Error("GitHub token not found. Add NEXT_PUBLIC_GITHUB_TOKEN to .env.local");

  /** @const {string} GraphQL query to fetch user repositories with metadata. */
  const query = `
  query ($username: String!) {
    user(login: $username) {
      repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          name
          description
          primaryLanguage { name }
          stargazerCount
          url
        }
      }
    }
  }
`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  const json = await res.json();
  if (!res.ok || json.errors) {
    throw new Error(json.errors?.[0]?.message || "Failed to fetch repositories");
  }

  return json.data.user.repositories.nodes.map((repo: any) => ({
    name: repo.name,
  description: repo.description,
  primaryLanguage: repo.primaryLanguage?.name || null,
  stars: repo.stargazerCount,
  url: repo.url,
  }));
}
