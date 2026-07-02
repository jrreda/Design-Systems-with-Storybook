import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  args: {
    label: "Input",
    placeholder: "Enter text",
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Label of the input",
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Placeholder text of the input",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the input",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Marks the input as required",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;


export const Default: Story = {
  args: {
    label: "Input Label"
  },
};
