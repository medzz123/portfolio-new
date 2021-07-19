import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Layout from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story = (storyArguments) => <Layout {...storyArguments} />;

export const Default = Template.bind({});
