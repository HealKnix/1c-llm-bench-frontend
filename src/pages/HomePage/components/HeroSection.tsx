import { ThemeSwitch } from '@/components/theme-switch';
import { cn } from '@/utils/cn';
import { Button, useDisclosure } from '@heroui/react';
import {
  ArrowRightIcon,
  BarChart3Icon,
  BrainIcon,
  LayersIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  ZapIcon,
} from 'lucide-react';
import FunctionOnWorkModal from './modals/FeatureInDevelopmentModal';

const featureCards = [
  {
    title: 'Единая витрина 1С',
    description:
      'Сравнивайте корпоративные LLM в ключевых сценариях 1С по единым метрикам с прозрачной методикой.',
    icon: LayersIcon,
    accent:
      'dark:from-primary/30 from-primary/10 dark:via-primary/10 via-transparent to-transparent',
  },
  {
    title: 'Глубокая аналитика',
    description:
      'Следите за динамикой лидеров, настраивайте фильтры и находите скрытые преимущества каждой модели.',
    icon: BarChart3Icon,
    accent:
      'dark:from-primary/30 from-primary/10 dark:via-primary/10 via-transparent to-transparent',
  },
  {
    title: 'Продуктовые сценарии',
    description:
      'Проверяйте готовность решений на боевых кейсах 1С и получайте обновления в реальном времени.',
    icon: ShieldCheckIcon,
    accent:
      'dark:from-primary/30 from-primary/10 dark:via-primary/10 via-transparent to-transparent',
  },
];

const HeroSection = () => {
  const { isOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <section
      id="top-section"
      className={cn(
        'dark:from-primary/25 dark:to-secondary/25 from-primary/10 to-secondary/10 via-background relative overflow-hidden bg-gradient-to-br px-4 py-20',
      )}
    >
      <div className="bg-primary absolute inset-0 opacity-0 dark:opacity-3" />

      <ThemeSwitch className="fixed top-3 right-4 z-50" />

      <div className="relative mx-auto max-w-6xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 border-primary/20 flex items-center gap-2 rounded-full border px-4 py-2">
            <BrainIcon className="text-primary h-5 w-5" />
            <span className="text-primary text-sm font-medium">
              AI Model Comparison
            </span>
          </div>
        </div>

        <h1 className="mb-6 text-4xl font-bold text-balance md:text-6xl lg:text-7xl">
          <span className="from-primary via-secondary to-primary bg-gradient-to-r bg-clip-text text-transparent">
            1С LLM Бенчмарк
          </span>
        </h1>

        <p className="text-default-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-balance md:text-2xl">
          Сравните производительность лучших языковых моделей мира в среде 1С.
          Объективные рейтинги, детальная аналитика, актуальные данные.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#leaderboard">
            <Button className="px-8 py-3 text-lg" color="primary" size="lg">
              <TrendingUpIcon className="mr-2 h-5 w-5" />
              Посмотреть рейтинги
            </Button>
          </a>
          <Button
            className="bg-transparent py-3 text-lg"
            color="secondary"
            size="lg"
            variant="light"
            onPress={onOpenChange}
          >
            <ZapIcon className="mr-2 h-5 w-5" />
            Протестировать на своих задачах
          </Button>
        </div>

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          id="feature-cards"
        >
          {featureCards.map(({ title, description, icon: Icon, accent }) => (
            <div
              key={title}
              className="group border-primary/10 bg-background/80 hover:border-primary/30 hover:shadow-primary/10 relative overflow-hidden rounded-2xl border p-6 text-left shadow-md shadow-transparent backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                  accent,
                )}
              />
              <div className="relative flex h-full flex-col gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg leading-tight font-semibold">
                    {title}
                  </h3>
                  <p className="text-default-foreground/80 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
                <span className="text-primary/80 group-hover:text-primary inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300">
                  Узнать подробнее
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FunctionOnWorkModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </section>
  );
};

export default HeroSection;
