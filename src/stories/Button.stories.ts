import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  args: {
    children: 'Button',
    variant: "primary",
    size: "medium",
    disabled: false
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    size: {
      control: 'select'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive'
  }
}

export const Small: Story = {
  args: {
    size: "small"
  }
}

export const Large: Story = {
  args: {
    size: "large"
  }
}

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: "dark"
    }
  }
}
