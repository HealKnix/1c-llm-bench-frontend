import { cn } from '@/utils/cn';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
  type Selection,
} from '@heroui/react';
import { ArrowDownIcon, ArrowUpIcon, TrendingUpIcon } from 'lucide-react';
import { useMemo, useState, type Key } from 'react';
import ModelDetailsModal, {
  ILeaderboardModel,
} from './modals/ModelDetailsModal';

const models: ILeaderboardModel[] = [
  {
    rank: 1,
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    score: 1285,
    change: 12,
    category: 'General',
    parameters: '1.76T',
    cost: {
      input: '$0.010',
      output: '$0.010',
    },
    strengths: ['Reasoning', 'Code', 'Math'],
    accuracy: 94.3,
    latency: 210,
    throughput: 72,
    updated: '2 ч назад',
    uptime: 99.98,
    url: 'https://platform.openai.com/docs/models/gpt-4-turbo',
    trendSeries: [62, 74, 79, 84, 88, 92, 95],
    benchmarks: [
      { label: 'Диалоги 1С', value: 94 },
      { label: 'Кодогенерация', value: 91 },
      { label: 'Контекст >32K', value: 88 },
    ],
    notes:
      'Сильный выбор для сценариев "1С:Диалоги" и аналитики по длинным документам.',
  },
  {
    rank: 2,
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    score: 1268,
    change: 8,
    category: 'General',
    parameters: '—',
    cost: {
      input: '$0.015',
      output: '$0.015',
    },
    strengths: ['Writing', 'Analysis', 'Safety'],
    accuracy: 92.8,
    latency: 260,
    throughput: 65,
    updated: '4 ч назад',
    uptime: 99.92,
    url: 'https://www.anthropic.com/claude',
    trendSeries: [55, 58, 64, 72, 78, 85, 90],
    benchmarks: [
      { label: 'Анализ текстов', value: 95 },
      { label: 'Ответы в тональности', value: 92 },
      { label: 'Безопасность', value: 97 },
    ],
    notes:
      'Отлично работает с корпоративными документами и задачами контроля качества.',
  },
  {
    rank: 3,
    name: 'Gemini Ultra',
    provider: 'Google',
    score: 1245,
    change: -5,
    category: 'General',
    parameters: '—',
    cost: {
      input: '$0.0125',
      output: '$0.0125',
    },
    strengths: ['Multimodal', 'Search', 'Code'],
    accuracy: 91.2,
    latency: 320,
    throughput: 58,
    updated: '5 ч назад',
    uptime: 99.88,
    url: 'https://ai.google/discover/gemini/',
    trendSeries: [48, 52, 57, 63, 70, 69, 74],
    benchmarks: [
      { label: 'Мультимодальность', value: 96 },
      { label: 'Поиск знаний', value: 90 },
      { label: 'Кодогенерация', value: 86 },
    ],
    notes:
      'Идеален для смешанных режимов: текст + изображение, поиск + анализ.',
  },
  {
    rank: 4,
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    score: 1198,
    change: 15,
    category: 'Open Source',
    parameters: '405B',
    cost: 'Self-hosted',
    strengths: ['Open', 'Custom', 'Privacy'],
    accuracy: 88.7,
    latency: 280,
    throughput: 43,
    updated: '8 ч назад',
    uptime: 99.75,
    url: 'https://ai.meta.com/llama/',
    trendSeries: [38, 42, 51, 57, 63, 70, 78],
    benchmarks: [
      { label: 'Финтюн 1С', value: 90 },
      { label: 'Конфиденциальность', value: 94 },
      { label: 'RAG', value: 82 },
    ],
    notes:
      'Гибкий open-source стек для приватных установок и кастомных расширений.',
  },
  {
    rank: 5,
    name: 'Command R+',
    provider: 'Cohere',
    score: 1156,
    change: 3,
    category: 'Enterprise',
    parameters: '104B',
    cost: {
      input: '$0.020',
      output: '$0.020',
    },
    strengths: ['RAG', 'Enterprise', 'Multi-lang'],
    accuracy: 87.4,
    latency: 190,
    throughput: 51,
    updated: '12 ч назад',
    uptime: 99.81,
    url: 'https://cohere.com/command',
    trendSeries: [44, 49, 55, 61, 67, 71, 76],
    benchmarks: [
      { label: 'RAG запросы', value: 93 },
      { label: 'Мультиязычность', value: 89 },
      { label: 'Инфосек', value: 91 },
    ],
    notes:
      'Сфокусирован на быстрых RAG-сценариях и пилотах для больших предприятий.',
  },
];

const trendColor = (change: number) =>
  change > 0
    ? 'text-emerald-600 dark:text-emerald-400'
    : change < 0
      ? 'text-rose-500 dark:text-rose-400'
      : 'text-foreground/60';

const LeaderboardTable = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([models[0].rank.toString()]),
  );
  const [activeModelKey, setActiveModelKey] = useState(
    models[0].rank.toString(),
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const selectedModel = useMemo<ILeaderboardModel>(() => {
    return (
      models.find((model) => model.rank.toString() === activeModelKey) ??
      models[0]
    );
  }, [activeModelKey]);

  const handleRowAction = (key: Key) => {
    const modelKey = String(key);
    setSelectedKeys(new Set([modelKey]));
    setActiveModelKey(modelKey);
    onOpen();
  };

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Card className="border-primary/10 bg-background/80 dark:shadow-primary/20 shadow-primary/10 rounded-3xl border shadow-lg backdrop-blur dark:shadow-2xl">
          <CardHeader className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-foreground flex items-center gap-2 text-lg font-semibold">
                <TrendingUpIcon className="text-primary h-5 w-5" />
                Лидеры LLM для 1С-сценариев
              </div>
              <span className="text-foreground/70 text-sm">
                Живая таблица для глубокой оценки моделей: метрики точности,
                скорости, стоимости и сильных сторон.
              </span>
            </div>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <div className="overflow-x-auto">
              <Table
                aria-label="Таблица лидерборда моделей"
                selectedKeys={selectedKeys}
                classNames={{
                  base: 'max-h-[600px]',
                  th: 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground/70 text-xs uppercase tracking-widest',
                  td: 'text-sm',
                  tr: 'transition-colors duration-200 focus-visible:bg-primary/10',
                }}
                removeWrapper
              >
                <TableHeader>
                  <TableColumn className="w-16 text-center">#</TableColumn>
                  <TableColumn className="w-28 text-center">Тренд</TableColumn>
                  <TableColumn className="min-w-64">Модель</TableColumn>
                  <TableColumn className="min-w-40">Точность</TableColumn>
                  <TableColumn className="min-w-40">Параметры</TableColumn>
                  <TableColumn className="min-w-40 text-center">
                    Стоимость, 1 млн токенов
                    <div className="text-foreground-400 flex text-[10px] *:flex-1">
                      <span className="text-left">Вход</span>
                      <span className="text-right">Выход</span>
                    </div>
                  </TableColumn>
                </TableHeader>
                <TableBody
                  style={{
                    fontFamily: 'var(--font-mono)',
                    maxHeight: '500px !important',
                    height: '500px !important',
                  }}
                >
                  {models.map((model) => (
                    <TableRow
                      key={model.rank.toString()}
                      onClick={() => setActiveModelKey(String(model.rank))}
                      className={cn(
                        'group border-primary dark:hover:bg-primary/10 hover:bg-primary/5 cursor-pointer border-l-0',
                        activeModelKey === model.rank.toString()
                          ? 'dark:bg-primary/20! bg-primary/12.5! border-l-3'
                          : null,
                      )}
                    >
                      <TableCell className="text-center">
                        <div
                          className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold shadow-inner ${
                            model.rank === 1
                              ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300'
                              : model.rank === 2
                                ? 'bg-zinc-500/20 text-zinc-600 dark:text-zinc-200'
                                : model.rank === 3
                                  ? 'bg-orange-500/20 text-orange-600 dark:text-orange-300'
                                  : 'bg-primary/10 text-foreground'
                          }`}
                        >
                          {model.rank}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          className={`flex items-center justify-center gap-1 font-medium ${trendColor(model.change)}`}
                        >
                          {model.change > 0 && (
                            <ArrowUpIcon className="h-4 w-4" />
                          )}
                          {model.change < 0 && (
                            <ArrowDownIcon className="h-4 w-4" />
                          )}
                          <span>
                            {model.change > 0
                              ? `+${model.change}`
                              : model.change}
                          </span>
                        </div>
                        <span className="text-foreground/40 mt-1 block text-center text-xs">
                          7 дней
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            onClick={() => handleRowAction(model.rank)}
                            className="text-foreground hover:text-primary text-[16px] font-semibold"
                          >
                            {model.name}
                          </span>
                        </div>
                        <div className="text-foreground/60 text-xs">
                          {model.provider}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-2">
                          <span className="text-sm font-semibold">
                            {model.accuracy}%
                          </span>
                          <Progress
                            color="success"
                            value={model.accuracy}
                            className="h-1.5"
                            aria-label={`Точность ${model.accuracy}%`}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-foreground/70 flex flex-col gap-1 text-xs">
                          <span>
                            Задержка:{' '}
                            <span className="text-foreground font-semibold">
                              {model.latency} мс
                            </span>
                          </span>
                          <span>
                            Поток:{' '}
                            <span className="text-foreground font-semibold">
                              {model.throughput} req/мин
                            </span>
                          </span>
                          <span>
                            Параметры:{' '}
                            <span className="text-foreground font-semibold">
                              {model.parameters}
                            </span>
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="flex *:flex-1">
                        {model.cost === 'Self-hosted' ? (
                          <div className="text-center text-sm font-medium">
                            {model.cost}
                          </div>
                        ) : (
                          <>
                            <div className="text-left text-sm font-medium">
                              {model.cost.input}
                            </div>
                            <div className="text-right text-sm font-medium">
                              {model.cost.output}
                            </div>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {selectedModel && (
              <div className="border-primary/10 dark:bg-primary/10 bg-primary/5 border-t p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-primary flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
                      Выбрана модель
                    </div>
                    <h3 className="text-foreground text-2xl font-semibold">
                      {selectedModel.name}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      Обновлено {selectedModel.updated}. Сравните
                      производительность и подберите оптимальную модель под ваш
                      сценарий.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 font-mono text-sm sm:grid-cols-4">
                      <div className="border-primary/15 bg-background/80 rounded-xl border p-4">
                        <div className="text-foreground/60 text-xs uppercase">
                          Точность
                        </div>
                        <div className="text-foreground text-lg font-semibold">
                          {selectedModel.accuracy}%
                        </div>
                      </div>
                      <div className="border-primary/15 bg-background/80 rounded-xl border p-4">
                        <div className="text-foreground/60 text-xs uppercase">
                          Количество параметров
                        </div>
                        <div className="text-foreground text-lg font-semibold">
                          {selectedModel.parameters}
                        </div>
                      </div>
                      <div className="border-primary/15 bg-background/80 rounded-xl border p-4">
                        <div className="text-foreground/60 text-xs uppercase">
                          Контекст
                        </div>
                        <div className="text-foreground flex flex-col text-lg font-semibold">
                          <span className="text-sm">
                            Задержка:{' '}
                            <span className="text-foreground text-lg">
                              {selectedModel.latency} мс
                            </span>
                          </span>
                          <span className="text-sm">
                            Поток:{' '}
                            <span className="text-foreground text-lg">
                              {selectedModel.throughput} req/мин
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="border-primary/15 bg-background/80 rounded-xl border p-4">
                        <div className="text-foreground/60 text-xs uppercase">
                          Входная/Выходная стоимость
                        </div>
                        <div className="text-foreground text-lg font-semibold">
                          {selectedModel.cost === 'Self-hosted'
                            ? selectedModel.cost
                            : `${selectedModel.cost.input} / ${selectedModel.cost.output}`}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      color="primary"
                      size="lg"
                      onPress={() => handleRowAction(selectedModel.rank)}
                    >
                      Подробнее
                    </Button>
                    <Button variant="light" size="lg" className="text-primary">
                      Экспортировать метрики
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      <ModelDetailsModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedModel={selectedModel}
      />
    </section>
  );
};

export default LeaderboardTable;
