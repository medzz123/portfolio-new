import Button from '@components/Button';
import Hero from '@components/Hero';
import { H1 } from '@components/Text';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { HomeContainer } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <HomeContainer>
      <Hero expand={true}>
        <H1>
          Hey! I am Mahedi. I&apos;m a Software Developer, having an awesome time using React, React
          Native & Node Js.
        </H1>

        <Button
          onClick={() => {
            router.push('/blog/example');
          }}
        >
          Blog
        </Button>
      </Hero>
    </HomeContainer>
  );
};

export default Home;
