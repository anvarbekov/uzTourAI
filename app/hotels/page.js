import MainLayout from '../MainLayout';
import HotelsPageClient from '../../components/hotels/HotelsPageClient';

export const metadata = {
  title: "Mehmonxonalar — UzTour",
};

export default function HotelsPage() {
  return (
    <MainLayout>
      <HotelsPageClient />
    </MainLayout>
  );
}
