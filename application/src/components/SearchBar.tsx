import React, { useState } from 'react';

/**
 * Props for the SearchBar component.
 */
interface SearchBarProps {
  /** Callback function called when the search form is submitted. */
  onSearch: (username: string) => void;
}

/**
 * Renders a search input form for entering a GitHub username.
 * Handles form submission and input validation.
 * @param {SearchBarProps} props The component props.
 * @return {JSX.Element} A form with text input and search button.
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  /**
   * Handles form submission by preventing default behavior and calling onSearch.
   * Only submits if input value is not empty after trimming whitespace.
   * @param {React.FormEvent} e The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="GitHub username"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
