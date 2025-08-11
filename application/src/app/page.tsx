"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { GitHubRepository } from "../types/github";
import { fetchRepos } from "../utils/fetchRepos";

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);
    setRepos([]);
    try {
      const data = await fetchRepos(username);
      if (data.length === 0) {
        setError("This user has no repositories");
      } else {
        setRepos(data);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub Repository Search
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && repos.length > 0 && <RepoList repos={repos} />}
    </main>
  );
}
