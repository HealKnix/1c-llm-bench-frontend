import { Select, SelectItem } from '@heroui/react';
import { FC } from 'react';
import styles from './CategoryFilterSection.module.scss';

interface ICategoryFilterSectionProps {
  categories: string[];
}

const CategoryFilterSection: FC<ICategoryFilterSectionProps> = ({
  categories,
}) => {
  return (
    <section
      className="border-foreground-200 bg-muted/30 border-b px-4 py-8"
      id="leaderboard"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Таблица лидеров</h2>
            <p className="text-default-foreground">
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
  );
};

export default CategoryFilterSection;
