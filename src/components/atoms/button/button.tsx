import { FC } from 'react';

import { BUTTON_TESTID, ButtonProps } from './button.type';
import { buttonClasses } from './buttonClasses';

const Button: FC<ButtonProps> = ({
  children,
  endIcon,
  startIcon,
  size = 'large',
  color = 'primary',
  variant = 'contained',
  rounded = 'full',
  ...rest
}) => {
  const classNames = buttonClasses({ startIcon, endIcon, size, color, variant, rounded });

  const generateContent = () => (
    <>
      {startIcon && <span data-testid={BUTTON_TESTID.START}>{startIcon}</span>}
      <span data-testid={BUTTON_TESTID.CONTENT} className="w-100">
        {children}
      </span>
      {endIcon && <span data-testid={BUTTON_TESTID.END}>{endIcon}</span>}
    </>
  );

  if ('href' in rest) {
    return (
      <a data-testid={BUTTON_TESTID.ANCHOR} className={classNames} {...rest}>
        {generateContent()}
      </a>
    );
  }

  return (
    <button data-testid={BUTTON_TESTID.BUTTON} className={classNames} {...rest}>
      {generateContent()}
    </button>
  );
};

export default Button;
