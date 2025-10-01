import { useFeatureInterest } from '@/context/FeatureInterestContext';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@heroui/react';
import {
  ActivityIcon,
  ArrowLeftIcon,
  ClockIcon,
  MailIcon,
  ShieldCheckIcon,
  UsersIcon,
} from 'lucide-react';
import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
});

const AdminPage = () => {
  const { entries } = useFeatureInterest();

  const stats = useMemo(() => {
    const total = entries.length;
    const uniqueEmails = new Set(entries.map((entry) => entry.email)).size;
    const lastSubmission = entries[0]?.createdAt ?? null;

    return {
      total,
      uniqueEmails,
      lastSubmission,
    };
  }, [entries]);

  return (
    <div className="bg-background min-h-screen">
      <div className="dark:from-primary/25 dark:to-secondary/25 from-primary/10 to-secondary/10 via-background relative overflow-hidden bg-gradient-to-br">
        <div className="bg-primary absolute inset-0 opacity-0 dark:opacity-5" />

        <header className="relative px-4 pt-20 pb-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div className="space-y-4">
                <Chip
                  color="primary"
                  variant="flat"
                  className="border-primary/30 bg-primary/10 w-max border text-xs font-medium tracking-wide uppercase"
                  radius="sm"
                >
                  Панель администратора
                </Chip>
                <h1 className="text-3xl font-bold text-balance md:text-5xl">
                  Центр управления платформой
                </h1>
                <p className="text-default-foreground/80 max-w-2xl text-lg leading-relaxed">
                  Следите за активностью пользователей, управляйте запросами на
                  доступ и держите руку на пульсе развития 1С LLM Бенчмарк.
                </p>
                <Divider className="bg-primary/10" />
                <div className="text-foreground/50 flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-4 w-4" />
                    Безопасный внутренний доступ
                  </span>
                  <span className="flex items-center gap-2">
                    <ActivityIcon className="h-4 w-4" />
                    {stats.total > 0
                      ? `${stats.total} открытых заявок`
                      : 'Заявок пока нет'}
                  </span>
                </div>
              </div>
              <Button
                as={RouterLink}
                to="/"
                variant="light"
                color="primary"
                endContent={<ArrowLeftIcon className="h-4 w-4" />}
                className="self-start"
              >
                На главную
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-primary/20 bg-background/70 shadow-primary/10 border p-2 shadow-lg backdrop-blur">
                <CardHeader className="flex items-center gap-3 pb-1">
                  <UsersIcon className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-foreground/60 text-xs tracking-wide uppercase">
                      Всего откликов
                    </p>
                    <p className="text-2xl font-semibold">{stats.total}</p>
                  </div>
                </CardHeader>
                <CardBody className="text-default-foreground/70 text-sm">
                  Новые лиды из модального окна заинтересованности.
                </CardBody>
              </Card>
              <Card className="border-secondary/20 bg-background/70 shadow-secondary/10 border p-2 shadow-lg backdrop-blur">
                <CardHeader className="flex items-center gap-3 pb-1">
                  <MailIcon className="text-secondary h-5 w-5" />
                  <div>
                    <p className="text-foreground/60 text-xs tracking-wide uppercase">
                      Уникальные контакты
                    </p>
                    <p className="text-2xl font-semibold">
                      {stats.uniqueEmails}
                    </p>
                  </div>
                </CardHeader>
                <CardBody className="text-default-foreground/70 text-sm">
                  Уникальных email-адресов, готовых к пилотам и рассылкам.
                </CardBody>
              </Card>
              <Card className="bg-background/70 border border-emerald-500/20 p-2 shadow-lg shadow-emerald-500/10 backdrop-blur">
                <CardHeader className="flex items-center gap-3 pb-1">
                  <ClockIcon className="h-5 w-5 text-emerald-500" />
                  <div>
                    <p className="text-foreground/60 text-xs tracking-wide uppercase">
                      Последняя активность
                    </p>
                    <p className="text-2xl font-semibold">
                      {stats.lastSubmission
                        ? dateFormatter.format(new Date(stats.lastSubmission))
                        : '—'}
                    </p>
                  </div>
                </CardHeader>
                <CardBody className="text-default-foreground/70 text-sm">
                  Время последнего полученного запроса.
                </CardBody>
              </Card>
            </div>
          </div>
        </header>
      </div>

      <main className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <Tabs
            aria-label="Администрирование"
            className="bg-background/80 border-primary/10 mt-2 rounded-3xl border p-2"
            color="primary"
            size="lg"
            fullWidth
          >
            <Tab
              key="requests"
              title={
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4" />
                  <span>Запросы на тестирование</span>
                  {entries.length > 0 && (
                    <Chip size="sm" className="aspect-square" color="danger">
                      {entries.length}
                    </Chip>
                  )}
                </div>
              }
            >
              <Card className="border-primary/10 bg-background/80 dark:shadow-primary/20 shadow-primary/10 rounded-3xl border shadow-lg backdrop-blur dark:shadow-2xl">
                <CardHeader className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Лиды заинтересованности
                    </h2>
                    <p className="text-default-foreground/70 text-sm">
                      Контакты пользователей, оставивших данные в модальном окне
                      «Функция в разработке».
                    </p>
                  </div>
                </CardHeader>
                <CardBody className="p-0">
                  <Table
                    aria-label="Заявки пользователей"
                    classNames={{
                      wrapper: 'shadow-none',
                      base: 'max-h-[600px]',
                      th: 'bg-transparent text-foreground/70 text-xs uppercase tracking-widest border-b-1 border-foreground/10',
                      td: 'text-sm py-4 first:rounded-l-xl last:rounded-r-xl',
                      tr: 'transition-colors duration-200 focus-visible:bg-primary/10 nth-[2n]:bg-foreground/2.5',
                    }}
                  >
                    <TableHeader>
                      <TableColumn key="name">Имя</TableColumn>
                      <TableColumn key="email">Email</TableColumn>
                      <TableColumn key="message">Сообщение</TableColumn>
                      <TableColumn key="createdAt">Получено</TableColumn>
                    </TableHeader>
                    <TableBody
                      emptyContent="Пока нет оставленных контактов"
                      style={{
                        maxHeight: '500px !important',
                        height: '500px !important',
                      }}
                    >
                      {entries.map((entry) => (
                        <TableRow key={entry.id}>
                          <TableCell>
                            <div className="font-medium">{entry.name}</div>
                          </TableCell>
                          <TableCell>
                            <a
                              href={`mailto:${entry.email}`}
                              className="text-primary transition-colors hover:underline"
                            >
                              {entry.email}
                            </a>
                          </TableCell>
                          <TableCell>
                            {entry.message ? (
                              <p className="text-default-foreground/80 leading-relaxed whitespace-pre-wrap">
                                {entry.message}
                              </p>
                            ) : (
                              <span className="text-foreground/50">—</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <span className="text-foreground/60 text-sm">
                              {dateFormatter.format(new Date(entry.createdAt))}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
