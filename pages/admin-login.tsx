import type { NextPage } from 'next';
import Head from '../project/components/Head';
import DashboardLayout from '../project/components/adminDashboard/DashboardLayout';

const AdminDashboard: NextPage = () => {
  return (
    <>
      <Head title="Administrator Dashboard" />
      <DashboardLayout>{}</DashboardLayout>
    </>
  );
};
export default AdminDashboard;
