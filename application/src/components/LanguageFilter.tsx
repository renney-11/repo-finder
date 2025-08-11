"use client";

import React from "react";

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}

export default function LanguageFilter({
  languages,
  selectedLanguage,
  onSelectLanguage
}: LanguageFilterProps) {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter by language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="">All languages</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
