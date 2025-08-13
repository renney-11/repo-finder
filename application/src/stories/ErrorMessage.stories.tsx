import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/ErrorMessage";

/**
 * Storybook configuration for ErrorMessage component.
 * Demonstrates different error message scenarios.
 */
const meta: Meta<typeof ErrorMessage> = {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof ErrorMessage>;


/**
 * Default error message story.
 */
export const Default: Story = {
  args: {
    message: "Something went wrong",
  },
};

/**
 * Custom error message story with a specific repository related error.
 */
export const CustomMessage: Story = {
  args: {
    message: "Unable to fetch repositories",
  },
};
