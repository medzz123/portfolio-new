import { render } from '@test/library';
import React from 'react';

import Hero from './Hero';

test('Hero Test', () => {
  const { getByTestId, container } = render(<Hero>Hello</Hero>);

  const heroNode = getByTestId('hero');

  expect(heroNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
