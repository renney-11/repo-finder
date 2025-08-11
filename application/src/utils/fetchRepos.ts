import { GitHubRepository } from "../types/github";

export async function fetchRepos(username: string): Promise<GitHubRepository[]> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) throw new Error("GitHub token not found. Add NEXT_PUBLIC_GITHUB_TOKEN to .env.local");

  const query = `
    query ($username: String!) {
      user(login: $username) {
        repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            name
            description
            primaryLanguage { name }
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
    language: repo.primaryLanguage?.name || null, // renamed to match type
    html_url: repo.url, // renamed to match type
  }));
}
