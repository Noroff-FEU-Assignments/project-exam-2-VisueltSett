import type { NextPage } from 'next';
import Head from '../project/components/Head';
import LoginForm from '../project/components/generalLayout/Logg-inn';

const LoggInn: NextPage = () => {
  return (
    <div>
      <Head title="Logg inn - Ny kunde" />
      <LoginForm />
    </div>
  );
};

export default LoggInn;
