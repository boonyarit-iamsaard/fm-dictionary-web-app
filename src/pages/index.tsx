import { type NextPage } from 'next';

import { Header, Search } from '~/components/ui';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto w-[min(100%-3rem,_46.125rem)]">
        <Search />
      </main>
    </>
  );
};

export default Home;
