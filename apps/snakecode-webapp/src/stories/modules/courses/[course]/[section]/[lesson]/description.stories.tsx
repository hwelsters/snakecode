import type { Meta, StoryObj } from '@storybook/react'

import Description from '@/components/modules/courses/[course]/[section]/[lesson]/description'

const meta: Meta<typeof Description> = {
  component: Description
}

export default meta
type Story = StoryObj<typeof Description>

export const Primary: Story = {
  render: () => <Description />
}
