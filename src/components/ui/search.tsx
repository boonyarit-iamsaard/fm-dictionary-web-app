import { type FC } from 'react';

import { IconSearch } from '~/components/icons';

export const Search: FC = () => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search for any word
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="search"
          className="block w-full rounded-2xl bg-fm-gray-50 py-[0.875rem] pl-6 pr-[4.125rem] font-bold leading-5 text-fm-gray-700 placeholder:text-fm-gray-700/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fm-primary md:py-5 md:text-xl md:leading-6"
          placeholder="Search for any word..."
          required
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
          <IconSearch />
        </div>
      </div>
    </div>
  );
};
