import { Fragment, useState, type FC } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { IconArrowDown } from '~/components/icons';
import { cn } from '~/utils/class-names';

const fontCategoryOptions = {
  sans: {
    label: 'Sans Serif',
    className: 'font-sans',
  },
  serif: {
    label: 'Serif',
    className: 'font-serif',
  },
  mono: {
    label: 'Mono',
    className: 'font-mono',
  },
};

export const DropdownMenu: FC = () => {
  const [fontCategory, setFontCategory] =
    useState<keyof typeof fontCategoryOptions>('sans');

  return (
    <Menu
      as="div"
      className="relative w-[11.4375rem] text-lg font-bold leading-6"
    >
      <div>
        <Menu.Button
          className={cn(
            'inline-flex w-full items-center justify-end space-x-[1.125rem] rounded',
            fontCategoryOptions[fontCategory].className
          )}
        >
          <span>{fontCategoryOptions[fontCategory].label}</span>
          <IconArrowDown />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-[1.125rem] flex w-[11.4375rem] flex-col space-y-4 rounded-lg bg-white p-6 shadow-md">
          {Object.entries(fontCategoryOptions).map(([key, value]) => (
            <Menu.Item key={key}>
              {({ active }) => (
                <button
                  className={cn(
                    'text-left ',
                    value.className,
                    active ? 'text-fm-primary' : ''
                  )}
                  onClick={() =>
                    setFontCategory(key as keyof typeof fontCategoryOptions)
                  }
                >
                  {value.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
