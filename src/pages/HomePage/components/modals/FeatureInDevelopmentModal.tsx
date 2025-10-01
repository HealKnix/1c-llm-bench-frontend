import { cn } from '@/utils/cn';
import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from '@heroui/react';
import { FC, useState } from 'react';

interface IFunctionOnWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
}

const FunctionOnWorkModal: FC<IFunctionOnWorkModalProps> = ({
  isOpen,
  onClose,
  onOpenChange,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({ name: '', email: '', message: '' });
    setIsAgreed(false);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent className="sm:max-w-md">
        <ModalHeader className="flex flex-col gap-4">
          <span className="text-xl font-bold">Функция в разработке</span>
          <span className="text-foreground/50 text-sm font-normal">
            Данная функция находится в стадии разработки. На текущий момент
            просим вас предоставить ваши данные. Это позволит нам оценить
            уровень заинтересованности пользователей в данной функциональности.
          </span>
        </ModalHeader>

        <ModalBody>
          <form id="inter" onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="space-y-2">
              <Input
                id="name"
                type="text"
                label="Имя"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                autoFocus
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                label="Email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                label="Сообщение (необязательно)"
                placeholder="Расскажите, какие модели вы хотели бы протестировать..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                rows={3}
              />
            </div>
            <Checkbox
              id="agreement"
              isSelected={isAgreed}
              onValueChange={setIsAgreed}
              classNames={{
                base: cn(
                  'hover:bg-primary/5 data-[pressed=true]:bg-primary/5 items-center justify-start mt-0.5 transition-colors',
                  'cursor-pointer rounded-2xl gap-2 px-4',
                  'data-[selected=true]:bg-primary/10',
                ),
                hiddenInput: 'w-0',
              }}
            >
              <p>
                Отправляя эти данные, вы соглашаетесь с{' '}
                <Link isExternal href="/terms-of-use" className="font-medium">
                  Условиями
                </Link>{' '}
                и ознакомились с нашей{' '}
                <Link isExternal href="/privacy-policy" className="font-medium">
                  Политикой конфиденциальности
                </Link>
                .
              </p>
            </Checkbox>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            form="inter"
            variant="solid"
            color="primary"
            isDisabled={!isAgreed}
            fullWidth
          >
            Отправить
          </Button>
          <Button
            type="button"
            color="danger"
            variant="light"
            onPress={onClose}
            fullWidth
          >
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FunctionOnWorkModal;
