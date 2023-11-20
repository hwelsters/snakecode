import type { Meta, StoryObj } from '@storybook/react'

import Quiz from '@/components/modules/courses/[course]/[section]/[lesson]/quiz'

const meta: Meta<typeof Quiz> = {
  component: Quiz
}

export default meta
type Story = StoryObj<typeof Quiz>

export const Primary: Story = {
  render: () => <Quiz />
}
