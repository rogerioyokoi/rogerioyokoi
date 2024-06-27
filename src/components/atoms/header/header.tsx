import { FC, PropsWithChildren } from 'react';

type JustifyContent = `justify-${'start' | 'end' | 'between' | 'around' | 'stretch'}`;

interface HeaderProps extends PropsWithChildren {
  fixed?: boolean;
  useShadow?: boolean;
  justifyContent?: JustifyContent;
}

const Header: FC<HeaderProps> = ({ useShadow, fixed, justifyContent = 'justify-between', children }) => {
  const shadowClass = useShadow ? 'shadow-md' : '';
  const fixedClass = fixed ? 'fixed top-0 left-0' : 'relative';

  const componentClasses = `w-full flex bg-white dark:bg-slate-800 h-16 items-center px-6 ${fixedClass} ${shadowClass} ${justifyContent}`;

  return <header className={componentClasses}>{children}</header>;
};

export default Header;
