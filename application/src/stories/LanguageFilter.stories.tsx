import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import LanguageFilter from "../components/LanguageFilter";

/** @const {!Array<string>} Sample programming languages for story examples. */
const languages = ["JavaScript", "TypeScript", "Python"];

/**
 * Storybook configuration for LanguageFilter component.
 * Demonstrates language filtering dropdown functionality.
 */
const meta: Meta<typeof LanguageFilter> = {
  title: "Components/LanguageFilter",
  component: LanguageFilter,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof LanguageFilter>;

/**
 * Default LanguageFilter story with interactive state management.
 */
export const Default: Story = {
  render: () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    return (
      <LanguageFilter
        languages={languages}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
      />
    );
  },
};
