import MainLayout from '../MainLayout';
import RoutesClient from '../../components/routes/RoutesClient';

export const metadata = {
  title: "Marshrutlar — UzTour",
};

export default function RoutesPage() {
  return (
    <MainLayout>
      <RoutesClient />
    </MainLayout>
  );
}
