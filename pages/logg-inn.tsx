import type { NextPage } from 'next';
import Head from '../project/components/Head';
import LoginForm from '../project/components/Logg-inn';

const LoggInn: NextPage = () => {
  return (
    <div>
      <Head title="Logg inn" />
      <LoginForm />
    </div>
  );
};

export default LoggInn;
