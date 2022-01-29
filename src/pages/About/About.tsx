import Link from '@components/Link';
import Text from '@components/Text';
import { NextPage } from 'next';
import React from 'react';

import { AboutContainer, AboutContent } from './About.styles';

const About: NextPage = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <Text variant="h1">About page</Text>

        <Link href="/">Back to home</Link>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
