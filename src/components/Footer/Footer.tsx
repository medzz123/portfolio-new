import React, { FunctionComponent } from 'react';

import { FooterContainer, InnerFooter } from './Footer.styles';

const Footer: FunctionComponent = () => {
  return (
    <FooterContainer data-testid="footer">
      <InnerFooter>
        <h3>Some footer shenanigans</h3>
      </InnerFooter>
    </FooterContainer>
  );
};

export default Footer;
