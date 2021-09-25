import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { HeaderProps } from './Header.models';
import { HeaderContainer, HeaderLink, Logo, Menu } from './Header.styles';

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderContainer data-testid="header">
      <Link href="/">
        <Logo>Medz.</Logo>
      </Link>
      <Menu>
        <Link href="/">
          <HeaderLink>home</HeaderLink>
        </Link>
        <Link href="/projects">
          <HeaderLink>projects</HeaderLink>
        </Link>
        <Link href="/blog">
          <HeaderLink>blog</HeaderLink>
        </Link>
        <Link href="/me">
          <HeaderLink>me</HeaderLink>
        </Link>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
