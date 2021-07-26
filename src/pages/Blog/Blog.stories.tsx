import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Blog from './Blog';

export default {
  title: 'Pages/Blog',
  component: Blog,
} as Meta;

const Template: Story = (storyArguments) => (
  <Blog
    source={{ compiledSource: 'hello' }}
    frontMatter={{ title: 'hello', description: 'hello', tags: 'hi', date: '2014-', image: 'none' }}
    {...storyArguments}
  />
);

export const Default = Template.bind({});
