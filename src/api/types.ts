// Тип для элемента в таблице моделей
export interface Model {
  id: string;
  name: string;
  description: string;
  provider: string;
  license: string;
}

// Тип для детальной информации о модели (может наследоваться и расширять базовый тип)
export interface ModelDetails extends Model {
  parameters: number;
  contextLength: number;
  releaseDate: string;
  // ... другие поля
}

// Тип для данных, отправляемых из формы
export interface PersonalData {
  name: string;
  email: string;
  // ... другие поля
}
