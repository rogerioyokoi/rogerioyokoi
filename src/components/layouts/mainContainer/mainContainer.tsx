import { FC, PropsWithChildren, ReactNode } from 'react';

interface MainContainerProps extends PropsWithChildren {
  header: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ header, children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <header className="w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-center shadow-md">
        {header}
      </header>
      <main className="w-full max-w-6xl mt-16 p-4 flex-1">{children}</main>
    </div>
  );
};

export default MainContainer;
