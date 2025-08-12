import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: "Something went wrong",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "Unable to fetch repositories",
  },
};
