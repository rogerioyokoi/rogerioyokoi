import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IconProps extends HTMLAttributes<HTMLElement> {
  Component: ReactNode;
  shadow?: boolean;
}

const Icon: FC<IconProps> = ({ Component, className, shadow = true, ...rest }) => {
  const getClassNames = clsx(
    'flex justify-center items-center h-12 w-12 p-3 rounded-full',
    { 'shadow-left': shadow },
    className
  );

  return (
    <div data-testid="icon-container" className={getClassNames} {...rest}>
      {Component}
    </div>
  );
};

export default Icon;
