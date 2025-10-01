import { GithubIcon } from '@/components/icons';
import { cn } from '@/utils/cn';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
  Tooltip,
} from '@heroui/react';
import {
  CheckCircle2 as CheckCircle2Icon,
  Copy as CopyIcon,
  Send as SendIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type TelegramChannel = {
  name: string;
  handle: string;
  url: string;
  image: string;
  github?: string;
  role: string;
  description: string;
  btnTitle: string;
  tooltipTitle: string;
  focus: string;
  topics: string[];
  accent: string;
};

const telegramChannels: TelegramChannel[] = [
  {
    name: 'Валерий Бобров',
    handle: '@BobrovValeriy',
    url: 'https://t.me/BobrovValeriy',
    image: './avatar_valeriy.jpg',
    role: 'Аналитик · Разработчик 1С · Практик внедрения LLM',
    description:
      'Квалифицированный разработчик ERP-систем. Внедряю новые технологии, разрабатываю процессы с использованием LLM. Разработка и тонкая настройка промптов',
    btnTitle: 'Читать',
    tooltipTitle: 'Открыть канал в новом окне',
    focus: 'Аналитика',
    topics: ['Бизнес аналитика', 'Внедрение LLM', 'Разработка с LLM'],
    accent: 'from-primary-500 via-sky-500 to-indigo-500',
  },
  {
    name: 'Даниил Михайлов',
    handle: '@healknix',
    url: 'https://t.me/healknix',
    image: './avatar_daniil.jpg',
    github: 'https://github.com/HealKnix',
    role: 'Web-Разработчик · Архитектор ИС',
    description:
      'Пишу современные веб-приложения, проектирую архитектуру, внедряю лучшие практики UI/UX и автоматизирую процессы разработки. Помогаю командам быстро запускать и масштабировать продукты.',
    btnTitle: 'Написать',
    tooltipTitle: 'Открыть чат в новом окне',
    focus: 'Разработка',
    topics: ['Вёрстка сложных макетов', 'UI/UX', 'Продакшн-кейсы'],
    accent: 'from-primary-500 via-violet-500 to-pink-500',
  },
];

const ContactSection = () => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  useEffect(() => {
    if (!copiedHandle) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopiedHandle(null);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [copiedHandle]);

  const handleCopy = async (handle: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(handle);
        setCopiedHandle(handle);
        return;
      }

      throw new Error('Clipboard API unavailable');
    } catch (error) {
      console.warn('Failed to copy handle', handle, error);
      setCopiedHandle(null);
    }
  };

  return (
    <section className="px-4 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-3 text-center sm:text-left">
          <h2 className="text-foreground flex flex-wrap items-center gap-4 text-2xl font-semibold sm:text-3xl">
            Авторы проекта
          </h2>
          <p className="text-foreground/70 mx-auto max-w-3xl text-base sm:mx-0">
            Следите за идеями и связывайтесь напрямую в Telegram
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {telegramChannels.map((channel) => {
            const isCopied = copiedHandle === channel.handle;

            return (
              <Card
                key={channel.handle}
                className="border-primary/10 bg-background/80 hover:border-primary/30 hover:shadow-primary/10 relative min-w-[350px] flex-1 overflow-hidden rounded-2xl border p-4 text-left shadow-md shadow-transparent backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <span
                  className={cn(
                    'absolute top-0 -right-12 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl',
                    channel.accent,
                  )}
                />

                <CardHeader className="relative flex items-center gap-4 pb-0">
                  <Avatar
                    src={channel.image}
                    className="h-[64px] w-[64px] flex-none"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-foreground flex flex-wrap items-center">
                      <p className="mr-3 text-lg font-semibold">
                        {channel.name}
                      </p>
                      <Chip
                        size="sm"
                        variant="flat"
                        className="bg-primary/10 text-primary"
                      >
                        {channel.focus}
                      </Chip>
                    </div>
                    <p className="text-foreground/80 text-xs tracking-[0.1em] uppercase">
                      {channel.role}
                    </p>
                  </div>
                </CardHeader>

                <CardBody className="relative flex flex-col gap-4">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {channel.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {channel.topics.map((topic) => (
                      <Chip
                        key={topic}
                        size="sm"
                        variant="flat"
                        color="warning"
                      >
                        {topic}
                      </Chip>
                    ))}
                  </div>
                </CardBody>

                <CardFooter className="relative flex flex-wrap items-center gap-3 overflow-visible pt-0">
                  <Tooltip content={channel.tooltipTitle}>
                    <Button
                      as={Link}
                      href={channel.url}
                      target="_blank"
                      rel="noreferrer"
                      color="primary"
                      size="sm"
                      className="shadow-primary/30 shadow-lg"
                      startContent={<SendIcon size={16} />}
                    >
                      {channel.btnTitle}
                    </Button>
                  </Tooltip>

                  {channel.github ? (
                    <Tooltip content="Открыть GitHub в новом окне">
                      <Button
                        as={Link}
                        href={channel.github}
                        target="_blank"
                        rel="noreferrer"
                        size="sm"
                        className="shadow-default/30 bg-foreground-800 text-background shadow-lg"
                        startContent={<GithubIcon size={16} />}
                      >
                        Посмотреть
                      </Button>
                    </Tooltip>
                  ) : null}

                  <Tooltip
                    content={
                      isCopied ? 'Хэндл скопирован' : 'Скопировать хэндл'
                    }
                    placement="top"
                  >
                    <Button
                      size="sm"
                      color={isCopied ? 'success' : 'secondary'}
                      variant="flat"
                      startContent={
                        isCopied ? (
                          <CheckCircle2Icon size={16} />
                        ) : (
                          <CopyIcon size={16} />
                        )
                      }
                      onPress={() => handleCopy(channel.handle)}
                    >
                      {channel.handle}
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
