import Button from '@components/Button';
import { H3, P } from '@components/Text';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { HomeContainer } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <HomeContainer>
      <H3>
        Hey! I am Mahedi. I&apos;m a Software Developer, having an awesome time using React, React
        Native & Node Js.
      </H3>

      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>
      <P>Lorem Ipsum is Lorem Ipsum, Lorem Ipsum</P>

      <Button
        onClick={() => {
          router.push('/blog/example');
        }}
      >
        Blog
      </Button>
    </HomeContainer>
  );
};

export default Home;
