import type { Meta, StoryObj } from "@storybook/react";
import RepoList from "../components/RepoList";
import { mockRepos } from "./mockData";

/**
 * Storybook configuration for RepoList component.
 * Shows complete repository list functionality.
 */
const meta: Meta<typeof RepoList> = {
  title: "Components/RepoList",
  component: RepoList,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
};
export default meta;

type Story = StoryObj<typeof RepoList>;

/**
 * Default RepoList story with multiple repositories.
 */
export const Default: Story = {
  args: {
    repos: mockRepos,
  },
};

/**
 * RepoList story showing empty state behavior.
 */
export const EmptyList: Story = {
  args: {
    repos: [],
  },
};
