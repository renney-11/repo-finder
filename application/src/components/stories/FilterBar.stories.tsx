import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FilterBar from "../FilterBar";

const meta: Meta<typeof FilterBar> = {
  title: "Components/FilterBar",
  component: FilterBar,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <FilterBar value={value} onChange={setValue} />;
  },
};

export const WithText: Story = {
  render: () => {
    const [value, setValue] = useState("repo");
    return <FilterBar value={value} onChange={setValue} />;
  },
};
