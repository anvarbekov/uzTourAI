import MainLayout from '../MainLayout';
import RegionsListClient from '../../components/regions/RegionsListClient';

export const metadata = {
  title: "Viloyatlar — UzTour",
  description: "O'zbekistonning barcha viloyatlari va turizm joylari",
};

export default function RegionsPage() {
  return (
    <MainLayout>
      <RegionsListClient />
    </MainLayout>
  );
}
