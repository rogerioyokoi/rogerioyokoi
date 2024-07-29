import { FC } from 'react';

import { headerClasses } from './header.classes';
import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({ shadow, fixed, color = 'white', justifyContent = 'justify-between', children }) => (
  <header data-testid="header" className={headerClasses({ color, shadow, fixed, justifyContent })}>
    {children}
  </header>
);

export default Header;
