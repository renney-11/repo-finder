import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageFilter from '../components/LanguageFilter';
import { vi } from 'vitest';

describe('LanguageFilter', () => {
  it('renders languages and calls onChange', () => {
    const onChange = vi.fn();
    render(
      <LanguageFilter
        languages={['JavaScript', 'TypeScript']}
        selectedLanguage=""
        onSelectLanguage={onChange}
      />
    );
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'JavaScript' } });
    expect(onChange).toHaveBeenCalled();
  });
});