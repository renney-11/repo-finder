"use client";

import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import LanguageFilter from "../components/LanguageFilter";
import RepoList from '../components/RepoList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { GitHubRepository } from '../types/github';
import { fetchRepos } from '../utils/fetchRepos';

/**
 * Home page component for GitHub Repository Search application.
 * Provides search functionality for GitHub repositories by username,
 * with filtering capabilities by repository name and programming language.
 * @return {JSX.Element} The rendered home page component.
 */

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filterName, setFilterName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  /**
   * Handles the search for repositories by GitHub username.
   * Fetches repositories and updates component state accordingly.
   * @param {string} username The GitHub username to search for.
   * @return {Promise<void>} Promise that resolves when search is complete.
   */
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

  /**
   * Computes unique list of programming languages from fetched repositories.
   * @type {string[]} Sorted array of unique programming languages.
   */
  const languages = useMemo(() => {
    const langs = repos
      .map((r) => r.primaryLanguage)
      .filter((lang): lang is string => Boolean(lang));
    return Array.from(new Set(langs)).sort();
  }, [repos]);

  /**
   * Filters repositories based on name and selected programming language.
   * @type {GitHubRepository[]} Array of repositories matching filter criteria.
   */
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesName = repo.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const matchesLanguage =
        !selectedLanguage || repo.primaryLanguage === selectedLanguage;
      return matchesName && matchesLanguage;
    });
  }, [repos, filterName, selectedLanguage]);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub Repository Search
      </h1>

      <SearchBar onSearch={handleSearch} />

      {repos.length > 0 && (
        <>
          {/* Name filter input */}
          <input
            type="text"
            placeholder="Filter by name..."
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
          />

          {/* Language filter dropdown */}
          <LanguageFilter
            languages={languages}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={setSelectedLanguage}
          />
        </>
      )}

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && filteredRepos.length > 0 && (
        <RepoList repos={filteredRepos} />
      )}
      {!loading && !error && repos.length > 0 && filteredRepos.length === 0 && (
        <p>No repositories match the selected language.</p>
      )}
    </main>
  );
}
