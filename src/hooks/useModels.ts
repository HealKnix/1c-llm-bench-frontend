import { useQuery } from 'react-query';
import { getModelById, getModels } from '../api/endpoints/models';

// Ключи запросов для управления кэшем
export const modelsQueryKeys = {
  all: ['models'] as const,
  details: (id: string) => ['models', id] as const,
};

/**
 * Хук для получения списка всех моделей
 */
export const useGetModels = () => {
  return useQuery({
    queryKey: modelsQueryKeys.all,
    queryFn: getModels,
  });
};

/**
 * Хук для получения детальной информации о модели
 * @param modelId - ID модели
 * @param enabled - Флаг, разрешающий выполнение запроса (например, при открытии модального окна)
 */
export const useGetModelById = (modelId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: modelsQueryKeys.details(modelId),
    queryFn: () => getModelById(modelId),
    enabled, // Запрос не будет выполнен, пока enabled не станет true
  });
};
