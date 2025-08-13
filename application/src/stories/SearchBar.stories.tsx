import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../components/SearchBar";

/**
 * Storybook configuration for SearchBar component.
 * Demonstrates search functionality with interactive callback.
 */
const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
};
export default meta;

type Story = StoryObj<typeof SearchBar>;

/**
 * Default SearchBar story with alert-based search callback for demonstration.
 */
export const Default: Story = {
  args: {
    onSearch: (username: string) => alert(`Searching for ${username}`),
  },
};
