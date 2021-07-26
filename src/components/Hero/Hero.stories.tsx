import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta;

const Template: Story = (storyArguments) => <Hero {...storyArguments} />;

export const Default = Template.bind({});
