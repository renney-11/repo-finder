"use client";

import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import RepoList from '../components/RepoList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { GitHubRepository } from '../types/github';
import { fetchRepos } from '../utils/fetchRepos';

/**
 * Home page for GitHub Repository Search.
 */
export default function Home() {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filterText, setFilterText] = useState('');

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);
    setRepos([]);
    setFilterText('');
    try {
      const data = await fetchRepos(username);
      if (data.length === 0) {
        setError('This user has no repositories');
      } else {
        setRepos(data);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter in real time, case-insensitive, partial and full matches.
  const filteredRepos = useMemo(() => {
    if (!filterText.trim()) return repos;
    const q = filterText.toLowerCase();
    return repos.filter((r) => r.name.toLowerCase().includes(q));
  }, [repos, filterText]);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub Repository Search</h1>

      {/* Search by username */}
      <SearchBar onSearch={handleSearch} />

      {/* Filter by name (real-time) - only show when repos are loaded */}
      {repos.length > 0 && (
        <FilterBar value={filterText} onChange={(v) => setFilterText(v)} />
      )}

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && repos.length > 0 && filteredRepos.length === 0 && (
        <div className="text-center text-gray-600 py-6">No repositories match your filter.</div>
      )}

      {!loading && !error && filteredRepos.length > 0 && (
        <RepoList repos={filteredRepos} />
      )}
    </main>
  );
}
