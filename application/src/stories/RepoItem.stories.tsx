import type { Meta, StoryObj } from "@storybook/react";
import RepoItem from "../components/RepoItem";
import { mockRepos } from "./mockData";

/**
 * Storybook configuration for RepoItem component.
 * Demonstrates individual repository item display in list.
 */
const meta: Meta<typeof RepoItem> = {
  title: "Components/RepoItem",
  component: RepoItem,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <ul className="max-w-2xl mx-auto space-y-4">
        <Story />
      </ul>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof RepoItem>;

/**
 * RepoItem story showing a repository with description and language.
 */
export const WithDescription: Story = {
  args: {
    repo: mockRepos[0],
  },
};

/**
 * RepoItem story showing a repository without description.
 */
export const WithoutDescription: Story = {
  args: {
    repo: mockRepos[2],
  },
};

/**
 * Multiple RepoItem components displayed in a list.
 */
export const InList: Story = {
  render: () => (
    <ul className="max-w-2xl mx-auto space-y-4">
      {mockRepos.slice(0, 3).map((repo, index) => (
        <RepoItem key={index} repo={repo} />
      ))}
    </ul>
  ),
};
