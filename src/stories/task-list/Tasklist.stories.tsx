import type { Meta, StoryObj } from "@storybook/react-vite";

import { TaskListProvider } from "./task-list-context";
import { TaskList } from "./TaskList";

const meta = {
  title: "Example/TaskList",
  component: TaskList,
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
      return { tasks }
    }
  ],
  decorators: [
    (Story, context) => {
      return (
        <TaskListProvider tasks={context.loaded.tasks}>
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
