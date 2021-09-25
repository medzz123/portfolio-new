import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story = (storyArguments) => <Footer {...storyArguments} />;

export const Default = Template.bind({});
