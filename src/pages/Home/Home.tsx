import { Box } from '@components/Box';
import Button from '@components/Button';
import Text from '@components/Text';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { HomeContainer } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <HomeContainer>
      <Box>
        <Text variant="h1">Home Page</Text>

        <Button
          onClick={() => {
            router.push('/blog/example');
          }}
        >
          Blog
        </Button>
      </Box>
    </HomeContainer>
  );
};

export default Home;
