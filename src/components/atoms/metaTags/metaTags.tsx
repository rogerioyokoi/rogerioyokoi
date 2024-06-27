import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { metas, Page } from '../../../assets/data/meta.const';

interface MetaTagsProps {
  page: Page;
}

const MetaTags: FC<MetaTagsProps> = ({ page }) => {
  const { title, description, keywords, image, url } = metas[page];

  return (
    <Helmet>
      {/* SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags para compartilhamento em redes sociais */}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Rogério O. Yokoi | Engenheiro de Software Front-End" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default MetaTags;
