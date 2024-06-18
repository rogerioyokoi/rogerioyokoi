import React, { FC, PropsWithChildren, ReactNode } from 'react';

const FullPageLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto p-4">{children}</div>
    </div>
  );
};

export default FullPageLayout;
