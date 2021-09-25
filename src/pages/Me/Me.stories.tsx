import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Me from './Me';

export default {
  title: 'Pages/Me',
  component: Me,
} as Meta;

const Template: Story = (storyArguments) => <Me {...storyArguments} />;

export const Default = Template.bind({});
