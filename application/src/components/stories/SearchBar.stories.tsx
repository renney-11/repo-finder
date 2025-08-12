import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar
};
export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    onSearch: (username: string) => alert(`Searching for ${username}`)
  }
};
