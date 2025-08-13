import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "../components/LoadingSpinner";

/**
 * Storybook configuration for LoadingSpinner component.
 * Shows the loading animation in a container.
 */
const meta: Meta<typeof LoadingSpinner> = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

/**
 * Default LoadingSpinner story displayed in a container.
 */
export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center h-40 bg-gray-50 p-4">
      <LoadingSpinner />
    </div>
  ),
};
