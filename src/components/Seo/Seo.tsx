import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { SeoProps } from './Seo.models';

const Seo: FunctionComponent<SeoProps> = (props) => {
  const {
    title = 'Mahedi Hasan',
    description = 'Personal portfolio',
    type = 'website',
    image = 'https://medzz.dev/social.webp',
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="title" content={title} />

      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content="https://medzz.dev" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@medzz123" />
      <meta property="twitter:title" content={title} />
      <meta name="twitter:site" content="@medzz123" />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href="https://medzz.dev" />
    </Head>
  );
};

export default Seo;
