import CategoryFilterSection from './components/CategoryFilterSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/Footer';
import HeroSection from './components/HeroSection';
import LeaderboardTable from './components/LeaderboardTable';

const categories = ['BLEU', 'CodeBLEU', 'pass@k'];

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <CategoryFilterSection categories={categories} />
      <LeaderboardTable />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
