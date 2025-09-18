import { GithubIcon } from '@/components/icons';
import { cn } from '@/utils/cn';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { BrainIcon, Send } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="border-foreground-200 border-t px-4 py-12">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <BrainIcon className="text-primary h-6 w-6" />
          <span className="text-xl font-bold">1C LLM Bench</span>
        </div>
        <p className="text-default-foreground mb-4">
          Объективное сравнение языковых моделей для принятия обоснованных
          решений
        </p>
        <div className="text-default-foreground flex justify-center gap-6 text-sm">
          <Link
            className="text-foreground hover:text-primary transition-colors"
            href="#"
          >
            О проекте
          </Link>

          <Link
            className="text-foreground hover:text-primary transition-colors"
            href="#"
          >
            Методология
          </Link>

          <Popover placement="top">
            <PopoverTrigger>
              <Link className="text-foreground hover:text-primary cursor-pointer transition-colors">
                API
              </Link>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">В разработке</div>
                <div className="text-tiny">
                  Возможно, добавим, а возможно, и нет...
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Dropdown>
            <DropdownTrigger>
              <Link className="text-foreground hover:text-primary cursor-pointer transition-colors">
                Контакты
              </Link>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              classNames={{
                list: 'gap-2',
              }}
            >
              <DropdownItem
                key="telegram"
                className="p-0"
                classNames={{
                  base: 'data-[hover=true]:bg-transparent',
                }}
              >
                <Link
                  className={cn(
                    'flex items-center gap-2 rounded-md border px-4 py-2',
                    {
                      'border-[#2d9cff]/20 bg-[#2d9cff]/10': theme === 'dark',
                      'border-[#279eda]/20 bg-[#279eda]/10': theme === 'light',
                    },
                  )}
                  href="https://t.me/BobrovValeriy"
                >
                  <Send
                    className={cn('h-5 w-5', {
                      'text-[#2d9cff]': theme === 'dark',
                      'text-[#279eda]': theme === 'light',
                    })}
                  />
                  <span
                    className={cn('text-sm font-medium', {
                      'text-[#2d9cff]': theme === 'dark',
                      'text-[#279eda]': theme === 'light',
                    })}
                  >
                    Telegram
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem
                key="github"
                className="p-0"
                classNames={{
                  base: 'data-[hover=true]:bg-transparent',
                }}
              >
                <Link
                  className="border-foreground/20 bg-foreground/10 flex items-center gap-2 rounded-md border px-4 py-2"
                  href="https://github.com/HealKnix"
                >
                  <GithubIcon className="text-foreground h-5 w-5" />
                  <span className="text-foreground text-sm font-medium">
                    GitHub
                  </span>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
