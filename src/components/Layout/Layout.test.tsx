import { render } from '@test/library';
import React from 'react';

import Layout from './Layout';

test('Layout Test', () => {
  const { container } = render(<Layout>Hello</Layout>);

  expect(container).toMatchSnapshot();
});
