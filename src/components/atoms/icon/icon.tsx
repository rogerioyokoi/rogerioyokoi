import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IconProps extends HTMLAttributes<HTMLElement> {
  Component: ReactNode;
}

const Icon: FC<IconProps> = ({ Component, className, ...rest }) => {
  const getClassNames = clsx('flex justify-center items-center h-12 w-12 p-3 rounded-full shadow-left', className);

  return (
    <div data-testid="icon-container" className={getClassNames} {...rest}>
      {Component}
    </div>
  );
};

export default Icon;
