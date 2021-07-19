import React, { FunctionComponent } from 'react';

import { LayoutContainer } from './Layout.styles';

const Layout: FunctionComponent = (props) => {
  const { children } = props;

  return <LayoutContainer data-testid="layout">{children}</LayoutContainer>;
};

export default Layout;
