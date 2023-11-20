import type { Meta, StoryObj } from '@storybook/react'

import Coding from '@/components/modules/courses/[course]/[section]/[lesson]/coding'

const meta: Meta<typeof Coding> = {
  component: Coding
}

export default meta
type Story = StoryObj<typeof Coding>

export const Primary: Story = {
  render: () => <Coding />
}
