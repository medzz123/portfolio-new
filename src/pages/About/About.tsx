import Button from '@components/Button';
import Text from '@components/Text';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { AboutContainer, AboutContent } from './About.styles';

const About: NextPage = () => {
  const router = useRouter();

  return (
    <AboutContainer>
      <AboutContent>
        <Text variant="h1">About page</Text>

        <Button
          onClick={() => {
            router.push('/');
          }}
        >
          Back to home
        </Button>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
