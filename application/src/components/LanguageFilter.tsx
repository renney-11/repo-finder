"use client";

import React from "react";

/**
 * Props for the LanguageFilter component.
 */
interface LanguageFilterProps {
  /** Array of available programming languages to filter by. */
  languages: string[];
  /** Currently selected language filter value. */
  selectedLanguage: string;
  /** Callback function called when a language is selected. */
  onSelectLanguage: (language: string) => void;
}

/**
 * Dropdown component for filtering repositories by programming language.
 * Displays all available languages with an "All languages" option.
 * @param {LanguageFilterProps} props The component props.
 * @return {JSX.Element} A labeled dropdown for language selection.
 */
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
