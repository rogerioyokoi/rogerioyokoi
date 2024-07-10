import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface HeadlineProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  level: 'display' | 'headline' | 'title' | 'label' | 'body';
  size?: 'large' | 'medium' | 'small';
  children: ReactNode;
  className?: string;
}

const Headline: FC<HeadlineProps> = ({ as: Tag = 'h1', level, size = 'medium', children, className }) => {
  const baseStyles = 'font-sans leading-tight';

  const levelStyles = {
    display: {
      large: 'text-6xl font-bold',
      medium: 'text-5xl font-bold',
      small: 'text-4xl font-bold',
    },
    headline: {
      large: 'text-3xl font-semibold',
      medium: 'text-2xl font-semibold',
      small: 'text-xl font-semibold',
    },
    title: {
      large: 'text-lg font-medium',
      medium: 'text-base font-medium',
      small: 'text-sm font-medium',
    },
    label: {
      large: 'text-sm font-medium',
      medium: 'text-xs font-medium',
      small: 'text-xs font-regular',
    },
    body: {
      large: 'text-base font-regular',
      medium: 'text-sm font-regular',
      small: 'text-xs font-regular',
    },
  };

  const styles = clsx(baseStyles, levelStyles[level][size], className);

  return <Tag className={styles}>{children}</Tag>;
};

export default Headline;
