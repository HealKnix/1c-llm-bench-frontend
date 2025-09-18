import CategoryFilterSection from './CategoryFilterSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import LeaderboardTable from './LeaderboardTable';

const categories = ['BLEU', 'CodeBLEU', 'pass@k'];

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <CategoryFilterSection categories={categories} />
      <LeaderboardTable />
      <Footer />
    </div>
  );
}
