import { type NextPage } from 'next';

import { Header } from '~/components/ui';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto w-[min(100%-3rem,_46.125rem)]">
        <h1 className="text-center text-4xl font-extrabold">
          Dictionary web app
        </h1>
      </main>
    </>
  );
};

export default Home;
