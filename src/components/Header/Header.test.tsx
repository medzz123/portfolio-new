import { render } from '@test/library';
import React from 'react';

import Header from './Header';

test('Header Test', () => {
  const { container } = render(<Header>Hello</Header>);

  expect(container).toMatchSnapshot();
});
