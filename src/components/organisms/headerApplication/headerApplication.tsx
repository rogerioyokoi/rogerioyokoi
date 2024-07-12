import { FC } from 'react';
import Header from '../../atoms/header/header';
import ThemeSwitch from '../../atoms/themeSwitch/themeSwitch';
import Logo from '../../molecules/logo/logo';

const HeaderApplication: FC = () => {
  return (
    <Header useShadow fixed>
      <div>
        <Logo />
      </div>
      <div className="flex h-full items-center gap-4">
        <ThemeSwitch />
      </div>
    </Header>
  );
};

export default HeaderApplication;
