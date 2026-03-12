import MainLayout from '../../MainLayout';
import RegionDetailClient from '../../../components/regions/RegionDetailClient';
import { regions } from '../../../data/regions';

export async function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const region = regions.find(r => r.slug === params.slug);
  return {
    title: `${region?.name?.uz || 'Viloyat'} — UzTour`,
    description: region?.description?.uz || '',
  };
}

export default function RegionPage({ params }) {
  return (
    <MainLayout>
      <RegionDetailClient slug={params.slug} />
    </MainLayout>
  );
}
