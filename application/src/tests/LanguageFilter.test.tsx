import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageFilter from '../components/LanguageFilter';
import { vi } from 'vitest';

describe('LanguageFilter', () => {
  const mockLanguages = ['JavaScript', 'TypeScript', 'Python'];
  const mockOnSelectLanguage = vi.fn();

  beforeEach(() => {
    mockOnSelectLanguage.mockClear();
  });

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
