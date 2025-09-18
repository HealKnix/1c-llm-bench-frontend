import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { ArrowDownIcon, ArrowUpIcon, TrendingUpIcon } from 'lucide-react';

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
    accuracy: 94.3,
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
    accuracy: 92.8,
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
    accuracy: 91.2,
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
    accuracy: 88.76,
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
    accuracy: 73.9,
  },
];

const LeaderboardTable = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Card>
          <CardHeader className="flex flex-col items-start gap-2 p-6">
            <div className="flex items-center gap-2 font-bold">
              <TrendingUpIcon className="text-primary h-5 w-5" />
              Топ LLM моделей
            </div>
            <span className="text-foreground/75 text-sm">
              Рейтинг основан на комплексной оценке производительности, включая
              рассуждения, кодирование, математику и творческие задачи
            </span>
          </CardHeader>
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <Table
                selectionMode="single"
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
                  <TableColumn>Стоимость</TableColumn>
                  <TableColumn>Точность</TableColumn>
                </TableHeader>
                <TableBody>
                  {models.map((model) => (
                    <TableRow
                      key={model.rank}
                      href={model.name}
                      className="cursor-pointer"
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
                                  : 'bg-muted text-default-foreground'
                          }`}
                        >
                          {model.rank}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-foreground font-semibold">
                          {model.name}
                        </div>
                        <div className="text-sm">{model.provider}</div>
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
                                : 'text-default-foreground'
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
                      <TableCell className="text-sm">{model.cost}</TableCell>
                      <TableCell className="text-sm">
                        <span>{model.accuracy}</span>
                        <span className="text-[12px]">%</span>
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
  );
};

export default LeaderboardTable;
