import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./Callout";

const meta = {
  title: "Example/Callout",
  component: Callout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a accusamus numquam dolore expedita saepe. Aliquam, incidunt quo optio, a, molestiae omnis consectetur dolorem veritatis qui officia corporis. Saepe, laudantium?",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "information", "success", "danger", "warning"],
    },
  },
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: "Primary",
    variant: "primary",
  },
};

export const Information: Story = {
  args: {
    title: "Information",
    variant: "information",
  },
};

export const Success: Story = {
  args: {
    title: "Success",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    title: "Danger",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning",
    variant: "warning",
  },
};
