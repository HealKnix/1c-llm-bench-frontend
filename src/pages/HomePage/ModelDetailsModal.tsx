import {
  Button,
  Chip,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
} from '@heroui/react';
import {
  ActivityIcon,
  BarChart4Icon,
  ExternalLinkIcon,
  GaugeIcon,
} from 'lucide-react';

export interface ILeaderboardModel {
  rank: number;
  name: string;
  provider: string;
  score: number;
  change: number;
  category: string;
  parameters: string;
  cost: string;
  strengths: string[];
  accuracy: number;
  latency: number;
  throughput: number;
  updated: string;
  uptime: number;
  url: string;
  trendSeries: number[];
  benchmarks: Array<{
    label: string;
    value: number;
  }>;
  notes: string;
}

interface ModelDetailsModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedModel: ILeaderboardModel | null;
}

const ModelDetailsModal = ({
  isOpen,
  onOpenChange,
  selectedModel,
}: ModelDetailsModalProps) => {
  if (!selectedModel) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="3xl"
      scrollBehavior="inside"
      backdrop="blur"
    >
      <ModalContent className="border-primary/15 bg-background/90 border shadow-2xl backdrop-blur-xs">
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="text-foreground/60 flex flex-wrap items-center gap-2 text-sm">
                <Chip
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="bg-primary/10 tracking-wider uppercase"
                >
                  {selectedModel.category}
                </Chip>
                <span>Обновлено {selectedModel.updated}</span>
                <span className="flex items-center gap-1">
                  <ActivityIcon className="text-success h-4 w-4" />
                  Аптайм {selectedModel.uptime}%
                </span>
              </div>
              <div>
                <h3 className="text-foreground text-3xl leading-tight font-semibold">
                  {selectedModel.name}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {selectedModel.notes}
                </p>
              </div>
            </ModalHeader>
            <ModalBody className="custom-scrollbar space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-primary/15 bg-background/80 rounded-2xl border p-5">
                  <div className="text-foreground/70 flex items-center gap-2 text-sm font-medium">
                    <BarChart4Icon className="text-primary h-4 w-4" />
                    Динамика общего индекса
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-1">
                    {selectedModel.trendSeries.map((value, index) => (
                      <span
                        key={`${selectedModel.name}-trend-${index}`}
                        style={{ height: `${Math.max(value, 6)}%` }}
                        className="from-primary/40 via-primary/70 to-secondary/70 flex-1 rounded-full bg-gradient-to-t transition-all duration-300"
                      />
                    ))}
                  </div>
                  <div className="text-foreground/50 mt-3 flex justify-between text-xs">
                    <span>7 дней</span>
                    <span>
                      Лучшее значение: {Math.max(...selectedModel.trendSeries)}
                    </span>
                  </div>
                </div>
                <div className="border-primary/15 bg-background/80 rounded-2xl border p-5">
                  <div className="text-foreground/70 flex items-center gap-2 text-sm font-medium">
                    <GaugeIcon className="text-primary h-4 w-4" />
                    Профиль метрик 1С
                  </div>
                  <div className="mt-4 space-y-3">
                    {selectedModel.benchmarks.map((benchmark) => (
                      <div
                        key={`${selectedModel.name}-${benchmark.label}`}
                        className="space-y-1"
                      >
                        <div className="text-foreground/60 flex items-center justify-between text-xs">
                          <span>{benchmark.label}</span>
                          <span className="text-foreground font-medium">
                            {benchmark.value}%
                          </span>
                        </div>
                        <Progress
                          color="secondary"
                          value={benchmark.value}
                          className="h-1.5"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Divider className="bg-primary/20" />
              <div className="grid gap-4 md:grid-cols-3">
                <div className="border-primary/15 bg-background/70 rounded-xl border p-4">
                  <span className="text-foreground/60 text-xs uppercase">
                    Средняя задержка
                  </span>
                  <div className="text-foreground mt-2 text-2xl font-semibold">
                    {selectedModel.latency} мс
                  </div>
                  <p className="text-foreground/60 text-xs">
                    Тесты на типовых RPC 1С.
                  </p>
                </div>
                <div className="border-primary/15 bg-background/70 rounded-xl border p-4">
                  <span className="text-foreground/60 text-xs uppercase">
                    Пропускная способность
                  </span>
                  <div className="text-foreground mt-2 text-2xl font-semibold">
                    {selectedModel.throughput} req/мин
                  </div>
                  <p className="text-foreground/60 text-xs">
                    Суммарно при 4 одновременных потоках.
                  </p>
                </div>
                <div className="border-primary/15 bg-background/70 rounded-xl border p-4">
                  <span className="text-foreground/60 text-xs uppercase">
                    Точность
                  </span>
                  <div className="text-foreground mt-2 text-2xl font-semibold">
                    {selectedModel.accuracy}%
                  </div>
                  <p className="text-foreground/60 text-xs">
                    Композитная метрика по 5 бенчмаркам 1С.
                  </p>
                </div>
              </div>
              <div>
                <span className="text-foreground/60 text-xs uppercase">
                  Сильные стороны
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedModel.strengths.map((strength) => (
                    <Chip
                      key={`${selectedModel.name}-tag-${strength}`}
                      variant="flat"
                      className="bg-primary/5 text-xs font-medium"
                    >
                      {strength}
                    </Chip>
                  ))}
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-foreground/60 text-xs">
                Источник данных: закрытые бенчмарки 1С + публичные тесты команды
                платформы.
              </div>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <Button
                  color="primary"
                  className="sm:w-auto"
                  as="a"
                  href={selectedModel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  endContent={<ExternalLinkIcon className="h-4 w-4" />}
                >
                  Открыть страницу модели
                </Button>
                <Button variant="light" onPress={close} className="sm:w-auto">
                  Закрыть
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModelDetailsModal;
