import clsx from 'clsx';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    customProp?: string;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
  };

const Button: FC<ButtonProps> = ({ children, endIcon, startIcon, size = 'large', color = 'primary', ...rest }) => {
  const getTextClasses = clsx({
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    'text-lg': size === 'large',
  });

  const getColorClassNames = clsx({
    'bg-amber-400 hover:bg-amber-600 text-slate-900': color === 'primary',
    'bg-blue-400 hover:bg-blue-600': color === 'secondary',
  });

  const getClassNames = clsx(
    'flex items-center gap-4 rounded-full transition-colors ease-in-out duration-300 font-medium',
    {
      'pl-6': !startIcon && size === 'large',
      'pr-6': !endIcon && size === 'large',
    },
    getTextClasses,
    getColorClassNames
  );

  if ('href' in rest) {
    return (
      <a data-testid="button-anchor" className={getClassNames} {...rest}>
        {startIcon} {children} {endIcon}
      </a>
    );
  }

  return (
    <button data-testid="button-type" className={getClassNames} {...rest}>
      {startIcon} {children} {endIcon}
    </button>
  );
};

export default Button;
