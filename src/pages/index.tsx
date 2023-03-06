import { type NextPage } from 'next';

import { Container } from '~/components/Container';

const Home: NextPage = () => {
  return (
    <>
      <main className="min-h-screen">
        <Container>
          <h1 className="text-center text-4xl font-extrabold">
            Dictionary web app
          </h1>
        </Container>
      </main>
    </>
  );
};

export default Home;
