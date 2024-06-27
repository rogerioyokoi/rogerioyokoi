import { FC } from 'react';
import LogoIcon from '../../atoms/logoIcon/logoIcon';

const Logo: FC = () => {
  return (
    <div className="flex h-full gap-4 dark:text-white text-gray-900">
      <div className="w-12 h-12">
        <LogoIcon />
      </div>
      <div className="hidden md:flex">
        <h1 className="flex flex-col">
          <span className="text-2xl">Rogério Yokoi</span>
          <small className="text-xs dark:text-gray-500">Engenheiro de Software Front-End</small>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
