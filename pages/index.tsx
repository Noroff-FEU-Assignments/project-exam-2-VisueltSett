import type { NextPage } from 'next';
import Head from '../project/components/Head';
import HomeContent from '../project/components/generalLayout/Homepage';

const Home: NextPage = () => {
  return (
    <>
      <Head title="Osebro Antikvariat - Antikvariske og brukte bøker på nett og i butikk" />
      <HomeContent />
    </>
  );
};
export default Home;
