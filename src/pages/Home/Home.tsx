import Link from '@components/Link';
import { H1 } from '@components/Text';
import { NextPage } from 'next';
import React from 'react';

import { HomeContainer } from './Home.styles';

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <H1>
        Hey! I am Mahedi. I&apos;m a Software Developer,{' '}
        <Link href="/blog">Blog</Link> having an awesome time using React, React
        Native & Node Js.
      </H1>
    </HomeContainer>
  );
};

export default Home;
