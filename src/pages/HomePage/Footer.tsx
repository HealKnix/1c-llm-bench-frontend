import { Link, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { BrainIcon } from 'lucide-react';

const Footer = () => {
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
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
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
          <Link
            className="text-foreground hover:text-primary transition-colors"
            href="#"
          >
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
