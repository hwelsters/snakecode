import type { Meta, StoryObj } from "@storybook/react";

import CourseButton from "@/components/modules/courses/[course]/[section]/lesson-button";

const meta: Meta<typeof CourseButton> = {
  component: CourseButton,
};

export default meta;
type Story = StoryObj<typeof CourseButton>;

export const Primary: Story = {
  render: () => <CourseButton title="Basics" href="" type={2} />,
};
