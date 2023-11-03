import React, { FC, ReactElement } from 'react';

type BaseLayoutProps = {
  children: ReactElement<any, any> | Element;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Header */}
      <>{children}</>
    </>
  );
};
