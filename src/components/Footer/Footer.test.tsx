import { render } from '@test/library';
import React from 'react';

import Footer from './Footer';

test('Footer Test', () => {
  const { getByTestId, container } = render(<Footer>Hello</Footer>);

  const footerNode = getByTestId('footer');

  expect(footerNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
