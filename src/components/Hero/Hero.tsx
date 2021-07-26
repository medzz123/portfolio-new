import { Box } from '@components/Box';
import Layout from '@components/Layout';
import { H1, P } from '@components/Text';
import React, { FunctionComponent } from 'react';

import { HeroProps } from './Hero.models';
import { CustomContainer, HeroContainer } from './Hero.styles';

const Hero: FunctionComponent<HeroProps> = (props) => {
  const { expand, children, title, image, description, date } = props;

  return (
    <HeroContainer expand={expand} data-testid="hero">
      <Layout>
        {children ?? (
          <CustomContainer>
            <H1 align="center">{title}</H1>
            <P align="center">{date}</P>
            <P align="center">{description}</P>
            <Box css={{ mb: '$80' }} />
            <img src={image} width="100%" alt="Showcase" css={{ borderRadius: '$8' }} />
          </CustomContainer>
        )}
      </Layout>
    </HeroContainer>
  );
};

export default Hero;
