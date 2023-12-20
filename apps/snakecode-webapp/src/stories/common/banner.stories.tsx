import type { Meta, StoryObj } from "@storybook/react";

import Banner from "@/components/common/banner";

const meta: Meta<typeof Banner> = {
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  render: () => <Banner />,
};
