import { Bars3Icon } from '@heroicons/react/16/solid';
import { useMediaQuery } from '@react-hook/media-query';
import { FC, useState } from 'react';
import IconButton from '../../atoms/iconButton/iconButton';
import Drawer from '../../molecules/drawer/drawer';
import NavMenu from '../../molecules/navMenu/navMenu';

const NavApplication: FC = () => {
  const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      {isMobileOrTablet && (
        <>
          <IconButton label="Acessar Menu" onClick={toggleDrawer}>
            <Bars3Icon />
          </IconButton>
          <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} direction="right">
            <NavMenu isVertical callback={toggleDrawer} />
          </Drawer>
        </>
      )}
      {!isMobileOrTablet && <NavMenu />}
    </div>
  );
};

export default NavApplication;
