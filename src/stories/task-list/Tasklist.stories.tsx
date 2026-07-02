import type { Meta, StoryObj } from "@storybook/react-vite";

import { TaskListProvider } from "./task-list-context";
import { TaskList } from "./TaskList";

const meta = {
  title: "Example/TaskList",
  component: TaskList,
  decorators: [
    (Story, context) => {
      return (
        <TaskListProvider tasks={[
          { id: '1', title: 'Task 1', completed: false },
          { id: '2', title: 'Task 2', completed: true },
          { id: '3', title: 'Task 3', completed: false },
        ]}>
          <Story {...context} />
        </TaskListProvider>
      );
    },
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {},
};
