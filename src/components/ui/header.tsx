import { type FC } from 'react';

import { IconMoon } from '~/components/icons';
import { DropdownMenu, Logo, Toggle } from '~/components/ui';

export const Header: FC = () => {
  return (
    <header>
      <div className="container mx-auto flex w-[min(100%-3rem,_46.125rem)] items-center justify-between py-6 md:py-14">
        <Logo />
        <div className="flex items-center space-x-5">
          <DropdownMenu />
          <Toggle />
          <IconMoon />
        </div>
      </div>
    </header>
  );
};
