import Seo from '@components/Seo';
import ThemeSwitch from '@components/ThemeSwitch';
import environment from '@lib/environment';
import { pageView } from '@lib/gtag';
import { IdProvider } from '@radix-ui/react-id';
import { darkTheme, globalStyles } from '@theme/config';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import React, { Fragment } from 'react';

if (!environment.isDebugBuild) {
  Router.events.on('routeChangeComplete', (url: string) => pageView(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <Fragment>
      <Seo />
      <IdProvider>
        <ThemeProvider
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="system"
        >
          <Component {...pageProps} />

          <ThemeSwitch />
        </ThemeProvider>
      </IdProvider>
    </Fragment>
  );
};

export default MyApp;
