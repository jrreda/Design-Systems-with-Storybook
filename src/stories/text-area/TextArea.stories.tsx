import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

import { userEvent, within, expect } from "@storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");

    await expect(textArea).toBeDisabled();
    await userEvent.type(textArea, "Hellow, World!");
    await expect(textArea).not.toHaveValue();
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");
    const count = canvas.getByTestId("length");

    const inputValue = "Hello, World!";

    await userEvent.type(textArea, inputValue);
    await expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");
    const count = canvas.getByTestId("length");

    const inputValue = "H" + "e".repeat(140) + "y!";

    await userEvent.type(textArea, inputValue);
    await expect(count).toHaveTextContent(inputValue.length.toString());
    await expect(textArea).toHaveAttribute("aria-invalid", "true");
    await expect(textArea).toHaveClass("ring-danger-500");
  },
};
