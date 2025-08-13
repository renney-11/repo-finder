import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageFilter from '../components/LanguageFilter';
import { vi } from 'vitest';

/**
 * Test suite for LanguageFilter component.
 * Tests dropdown functionality, language selection, and empty state handling.
 */
describe('LanguageFilter', () => {
  /** @const {!Array<string>} Mock languages array for testing. */
  const mockLanguages = ['JavaScript', 'TypeScript', 'Python'];
  /** @const {!Function} Mock function for onSelectLanguage callback testing. */
  const mockOnSelectLanguage = vi.fn();

  /**
   * Clears mock function calls before each test.
   */
  beforeEach(() => {
    mockOnSelectLanguage.mockClear();
  });

  /**
   * Verifies that all languages render in dropdown with "All languages" default option.
   */
  it('should render all languages in dropdown with "All languages" option', () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage=""
        onSelectLanguage={mockOnSelectLanguage}
      />
    );

    expect(screen.getByText('All languages')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  /**
   * Tests that onSelectLanguage callback is called when language is selected.
   */
  it('should call onSelectLanguage when language is selected', () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage=""
        onSelectLanguage={mockOnSelectLanguage}
      />
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'JavaScript' } });
    expect(mockOnSelectLanguage).toHaveBeenCalledWith('JavaScript');
  });

  /**
   * Verifies that selected language is displayed as current value in dropdown.
   */
  it('should display selected language as current value', () => {
    render(
      <LanguageFilter
        languages={mockLanguages}
        selectedLanguage="TypeScript"
        onSelectLanguage={mockOnSelectLanguage}
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('TypeScript');
  });

  /**
   * Tests that component handles empty languages array.
   */
  it('should handle empty languages array', () => {
    render(
      <LanguageFilter
        languages={[]}
        selectedLanguage=""
        onSelectLanguage={mockOnSelectLanguage}
      />
    );

    expect(screen.getByText('All languages')).toBeInTheDocument();
    // Should only have "All languages" option
    expect(screen.getByRole('combobox').children).toHaveLength(1);
  });
});
