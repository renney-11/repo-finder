import React from 'react';

/**
 * Props for the FilterBar component.
 */
interface FilterBarProps {
  /** Current filter text */
  value: string;
  /** Callback function called when the filter text changes. */
  onChange: (value: string) => void;
}

/**
 * Text input component that filters repositories by name in real time.
 * Includes a clear button when text is present and proper accessibility labels.
 * @param {FilterBarProps} props The component props.
 * @return {JSX.Element} A text input with filter functionality.
 */
const FilterBar: React.FC<FilterBarProps> = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <label htmlFor="repo-filter" className="sr-only">
        Filter repositories by name
      </label>
      <div className="relative">
        <input
          id="repo-filter"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Filter repositories by name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Filter repositories by name"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Clear filter"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
