import type { NextPage } from 'next';
import Head from '.././project/layout/components/Head';
import LoginForm from '../modules/catalog/components/login-form';

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
