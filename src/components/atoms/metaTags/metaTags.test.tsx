import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import { describe, expect, it } from 'vitest';
import { metas } from '../../../assets/data/meta.const';
import MetaTags from './metaTags';

describe('Components > Atom > MetaTags', () => {
  describe('Property Page = Home', () => {
    it('Should set all metas', () => {
      const { title, description, keywords, image, url } = metas['home'];
      render(<MetaTags page="home" />);

      const helmet = Helmet.peek();
      console.log(helmet);
      expect(helmet.title).toBe(title);
      expect(helmet.metaTags).toStrictEqual([
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        {
          property: 'og:site_name',
          content: 'Rogério O. Yokoi | Engenheiro de Software Front-End',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        { name: 'twitter:image', content: image },
      ]);
    });
  });
});
