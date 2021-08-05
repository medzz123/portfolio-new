import React, { FunctionComponent } from 'react';

import { HeaderProps } from './Header.models';
import { HeaderContainer } from './Header.styles';

const Header: FunctionComponent<HeaderProps> = () => {
  return <HeaderContainer data-testid="header">This is the header</HeaderContainer>;
};

export default Header;
