import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FilterBar from "../components/FilterBar";

/**
 * Storybook configuration for FilterBar component.
 * Shows interactive filtering functionality with state management.
 */
const meta: Meta<typeof FilterBar> = {
  title: "Components/FilterBar",
  component: FilterBar,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof FilterBar>;

/**
 * Default FilterBar story with empty initial state.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <FilterBar value={value} onChange={setValue} />;
  },
};

/**
 * FilterBar story with pre-filled text to show clear button functionality.
 */
export const WithText: Story = {
  render: () => {
    const [value, setValue] = useState("repo");
    return <FilterBar value={value} onChange={setValue} />;
  },
};
