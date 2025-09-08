import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Select, SelectItem } from '@heroui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BrainIcon,
  StarIcon,
  TrendingUpIcon,
  ZapIcon,
} from 'lucide-react';

import styles from './HomePage.module.scss';

const models = [
  {
    rank: 1,
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    score: 1285,
    change: 12,
    category: 'General',
    parameters: '1.76T',
    cost: '$0.01/1K',
    strengths: ['Reasoning', 'Code', 'Math'],
  },
  {
    rank: 2,
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    score: 1268,
    change: 8,
    category: 'General',
    parameters: 'Unknown',
    cost: '$0.015/1K',
    strengths: ['Writing', 'Analysis', 'Safety'],
  },
  {
    rank: 3,
    name: 'Gemini Ultra',
    provider: 'Google',
    score: 1245,
    change: -5,
    category: 'General',
    parameters: 'Unknown',
    cost: '$0.0125/1K',
    strengths: ['Multimodal', 'Search', 'Code'],
  },
  {
    rank: 4,
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    score: 1198,
    change: 15,
    category: 'Open Source',
    parameters: '405B',
    cost: 'Free',
    strengths: ['Open', 'Customizable', 'Privacy'],
  },
  {
    rank: 5,
    name: 'Command R+',
    provider: 'Cohere',
    score: 1156,
    change: 3,
    category: 'Enterprise',
    parameters: '104B',
    cost: '$0.02/1K',
    strengths: ['RAG', 'Enterprise', 'Multilingual'],
  },
];

const categories = ['BLEU', 'CodeBLEU', 'pass@k'];

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-primary/5 via-background to-secondary/5 relative overflow-hidden bg-gradient-to-br px-4 py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-5" />
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
              1C LLM Arena
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-balance md:text-2xl">
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
            >
              <ZapIcon className="mr-2 h-5 w-5" />
              Сравнить модели
            </Button>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-primary/20 bg-card/50 py-6 backdrop-blur">
              <CardBody className="p-6 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <StarIcon className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">50+ моделей</h3>
                <p className="text-muted-foreground text-sm">
                  Все популярные LLM в одном месте
                </p>
              </CardBody>
            </Card>

            <Card className="border-secondary/20 bg-card/50 py-6 backdrop-blur">
              <CardBody className="p-6 text-center">
                <div className="bg-secondary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <TrendingUpIcon className="text-secondary h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Живые рейтинги</h3>
                <p className="text-muted-foreground text-sm">
                  Обновления в реальном времени
                </p>
              </CardBody>
            </Card>

            <Card className="border-primary/20 bg-card/50 py-6 backdrop-blur">
              <CardBody className="p-6 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BrainIcon className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Детальный анализ</h3>
                <p className="text-muted-foreground text-sm">
                  Глубокие метрики производительности
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section
        className="border-foreground-200 bg-muted/30 border-b px-4 py-8"
        id="leaderboard"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Таблица лидеров</h2>
              <p className="text-muted-foreground">
                Выберите категорию для фильтрации моделей
              </p>
            </div>

            <div>
              <Select className="w-48" placeholder="Выберите категорию">
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    className={styles.option}
                    classNames={{
                      base: 'data-[hover]:bg-primary-200',
                    }}
                  >
                    {category === 'All' ? 'Все категории' : category}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <Card>
            <CardHeader className="flex flex-col items-start gap-2 p-6">
              <div className="flex items-center gap-2 font-bold">
                <TrendingUpIcon className="text-primary h-5 w-5" />
                Топ LLM моделей
              </div>
              <span className="text-foreground/75 text-sm">
                Рейтинг основан на комплексной оценке производительности,
                включая рассуждения, кодирование, математику и творческие задачи
              </span>
            </CardHeader>
            <CardBody className="p-0">
              <div className="overflow-x-auto">
                <Table
                  classNames={{
                    wrapper: 'shadow-none',
                  }}
                >
                  <TableHeader>
                    <TableColumn className="w-16 text-center">Ранг</TableColumn>
                    <TableColumn className="min-w-48">Модель</TableColumn>
                    <TableColumn className="text-center">Рейтинг</TableColumn>
                    <TableColumn className="text-center">Изменение</TableColumn>
                    <TableColumn>Категория</TableColumn>
                    <TableColumn>Параметры</TableColumn>
                    <TableColumn>Стоимость</TableColumn>
                    <TableColumn>Сильные стороны</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {models.map((model) => (
                      <TableRow
                        key={model.rank}
                        className="hover:bg-muted/30 transition-colors"
                      >
                        <TableCell className="text-center font-bold">
                          <div
                            className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                              model.rank === 1
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : model.rank === 2
                                  ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                                  : model.rank === 3
                                    ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                                    : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {model.rank}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="text-foreground font-semibold">
                              {model.name}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {model.provider}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="text-lg font-bold">{model.score}</div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div
                            className={`flex items-center justify-center gap-1 ${
                              model.change > 0
                                ? 'text-green-600 dark:text-green-400'
                                : model.change < 0
                                  ? 'text-red-600 dark:text-red-400'
                                  : 'text-muted-foreground'
                            }`}
                          >
                            {model.change > 0 ? (
                              <ArrowUpIcon className="h-4 w-4" />
                            ) : model.change < 0 ? (
                              <ArrowDownIcon className="h-4 w-4" />
                            ) : null}
                            <span className="text-sm font-medium">
                              {model.change > 0 ? '+' : ''}
                              {model.change}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip className="text-xs" color="secondary">
                            {model.category}
                          </Chip>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {model.parameters}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {model.cost}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {model.strengths.map((strength) => (
                              <Chip
                                key={strength}
                                className="bg-foreground-100 text-xs"
                              >
                                {strength}
                              </Chip>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardBody>
          </Card>

          <div className="mt-8 text-center">
            <Button color="primary" size="lg" variant="light">
              Загрузить больше моделей
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-foreground-200 border-t px-4 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <BrainIcon className="text-primary h-6 w-6" />
            <span className="text-xl font-bold">1C LLM Arena</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Объективное сравнение языковых моделей для принятия обоснованных
            решений
          </p>
          <div className="text-muted-foreground flex justify-center gap-6 text-sm">
            <a
              className="hover:text-primary transition-colors"
              href="www.google.com"
            >
              О проекте
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="www.google.com"
            >
              Методология
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="www.google.com"
            >
              API
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="www.google.com"
            >
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
