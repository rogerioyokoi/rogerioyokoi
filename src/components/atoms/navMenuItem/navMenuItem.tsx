import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNavConfig } from '../../../routes/routes';

interface NavMenuItem extends RouteNavConfig {
  onClick?: () => void;
}

const NavMenuItem: FC<NavMenuItem> = ({ Icon, path, name, onClick }) => {
  const baseClasses = 'flex gap-2 h-full w-full items-center hover:text-amber-500 border-b px-4 transition-all';
  const activeClasses = 'text-amber-500 border-amber-500 dark:border-amber-400';
  const pendingClasses =
    'border-transparent hover:bg-slate-500 hover:bg-opacity-20 dark:hover:bg-slate-700 dark:hover:bg-opacity-95';

  const getMenuItemClasses = (isActive: boolean): string => {
    return `${baseClasses} ${isActive ? activeClasses : pendingClasses}`;
  };

  return (
    <NavLink onClick={() => onClick?.()} to={path} className={({ isActive }) => getMenuItemClasses(isActive)}>
      <div className="w-6 h-6">
        <Icon />
      </div>
      {name}
    </NavLink>
  );
};

export default NavMenuItem;
