import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface ChipProps extends PropsWithChildren {
  color?: 'neutral';
  size?: 'xs';
}

const Chip: FC<ChipProps> = ({ children, color = 'neutral', size = 'xs' }) => {
  const setBackgroundColor = clsx({
    'bg-neutral-700': color === 'neutral',
  });

  const setSize = clsx({
    'text-xs px-4 py-1': size === 'xs',
  });

  const classes = clsx('rounded-full text-xs leading-none w-fit', setBackgroundColor, setSize);

  return <span className={classes}>{children}</span>;
};

export default Chip;
