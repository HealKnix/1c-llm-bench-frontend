import { ThemeSwitch } from '@/components/theme-switch';
import { cn } from '@/utils/cn';
import { Button, useDisclosure } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { BrainIcon, TrendingUpIcon, ZapIcon } from 'lucide-react';
import FunctionOnWorkModal from './FeatureInDevelopmentModal';

const HeroSection = () => {
  const { onOpen, ...disclosureProps } = useDisclosure();
  const { theme } = useTheme();

  return (
    <>
      <section
        className={cn(
          'via-background relative overflow-hidden bg-gradient-to-br px-4 py-20',
          {
            'from-primary/25 to-secondary/25': theme === 'dark',
            'from-primary/10 to-secondary/10': theme === 'light',
          },
        )}
      >
        {theme === 'dark' && (
          <div className="bg-primary absolute inset-0 opacity-5" />
        )}
        <ThemeSwitch className="absolute top-3 right-4" />
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
              1C LLM Bench
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
              onPress={onOpen}
            >
              <ZapIcon className="mr-2 h-5 w-5" />
              Протестировать на своих задачах
            </Button>
          </div>
        </div>
        <FunctionOnWorkModal onOpen={onOpen} {...disclosureProps} />
      </section>
    </>
  );
};

export default HeroSection;
