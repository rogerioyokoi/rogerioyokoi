import { FC } from 'react';
import { navRoutes } from '../../../routes/routes';
import NavMenuItem from '../../atoms/navMenuItem/navMenuItem';

export interface NavMenuProps {
  isVertical?: boolean;
  callback?: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ isVertical = false, callback }) => {
  const listFloatingClasses = isVertical ? 'flex flex-col w-full' : 'flex g-3 h-full';
  const itemsFloadingClasses = isVertical ? 'h-12 items-center' : 'h-full';

  const renderMenuListItems = navRoutes.map((route, index) => {
    const isLastItem = index === navRoutes.length - 1;
    const isActiveRoute = route.path === window.location.pathname;
    const classes =
      isVertical && !isLastItem && !isActiveRoute
        ? `${itemsFloadingClasses} border-b border-gray-600`
        : itemsFloadingClasses;

    return (
      <li className={classes} key={route.id}>
        <NavMenuItem {...route} onClick={() => callback?.()} />
      </li>
    );
  });

  return (
    <nav className="flex h-full w-full">
      <ul className={listFloatingClasses}>{renderMenuListItems}</ul>
    </nav>
  );
};

export default NavMenu;
