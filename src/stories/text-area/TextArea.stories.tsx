import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta = {
  title: "Example/Textarea",
  component: TextArea,
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 140,
  },
};
