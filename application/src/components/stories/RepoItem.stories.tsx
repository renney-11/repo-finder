import type { Meta, StoryObj } from "@storybook/react";
import RepoItem from "../RepoItem";
import { mockRepos } from "./mockData";

const meta: Meta<typeof RepoItem> = {
  title: "Components/RepoItem",
  component: RepoItem,
  parameters: {
    layout: "padded", // Changed from "centered"
  },
  decorators: [
    (Story) => (
      // Wrap in a proper list context to match real usage
      <ul className="max-w-2xl mx-auto space-y-4">
        <Story />
      </ul>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof RepoItem>;

export const WithDescription: Story = {
  args: {
    repo: mockRepos[0]
  }
};

export const WithoutDescription: Story = {
  args: {
    repo: mockRepos[2]
  }
};

// Show multiple items to demonstrate list context
export const InList: Story = {
  render: () => (
    <ul className="max-w-2xl mx-auto space-y-4">
      {mockRepos.slice(0, 3).map((repo, index) => (
        <RepoItem key={index} repo={repo} />
      ))}
    </ul>
  )
};