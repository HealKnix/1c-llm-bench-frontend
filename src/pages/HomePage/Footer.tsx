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
  );
};

export default Footer;
