import { type FC, type PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto w-[min(100%-3rem,_46.125rem)]">
      {children}
    </div>
  );
};
