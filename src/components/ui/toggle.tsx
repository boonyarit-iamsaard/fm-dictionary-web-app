import { useState, type FC } from 'react';

import { Switch } from '@headlessui/react';

import { cn } from '~/utils/class-names';

export const Toggle: FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={cn(
        'relative inline-flex h-5 w-10 items-center rounded-full',
        enabled ? 'bg-fm-primary' : 'bg-fm-gray-500'
      )}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={cn(
          'inline-block aspect-square h-[0.875rem] transform rounded-full bg-white transition',
          enabled ? 'translate-x-[1.4375rem]' : 'translate-x-[0.1875rem]'
        )}
      />
    </Switch>
  );
};
