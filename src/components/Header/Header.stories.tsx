import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = (storyArguments) => <Header {...storyArguments} />;

export const Default = Template.bind({});
