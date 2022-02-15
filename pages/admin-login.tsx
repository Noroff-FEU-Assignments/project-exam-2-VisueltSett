import type { NextPage } from 'next';
import Head from '../project/components/Head';
import LoginForm from '../project/components/generalLayout/Logg-inn';

const AdminLoggInn: NextPage = () => {
  return (
    <>
      <Head title="Logg inn - Administrator" />
      <LoginForm />
    </>
  );
};
export default AdminLoggInn;
