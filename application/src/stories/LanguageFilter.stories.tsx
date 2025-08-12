import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import LanguageFilter from "../components/LanguageFilter";

const languages = ["JavaScript", "TypeScript", "Python"];

const meta: Meta<typeof LanguageFilter> = {
  title: "Components/LanguageFilter",
  component: LanguageFilter,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof LanguageFilter>;

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
