import type { Meta, StoryObj } from "@storybook/react";
import RepoList from "../RepoList";
import { mockRepos } from "./mockData";

const meta: Meta<typeof RepoList> = {
  title: "Components/RepoList",
  component: RepoList,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" }
  }
};
export default meta;

type Story = StoryObj<typeof RepoList>;

export const Default: Story = {
  args: {
    repos: mockRepos
  }
};

export const EmptyList: Story = {
  args: {
    repos: []
  }
};