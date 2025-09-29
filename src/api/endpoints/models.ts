import { apiClient } from '../client';
import type { Model, ModelDetails } from '../types';

/**
 * Получает список всех моделей
 */
export const getModels = async (): Promise<Model[]> => {
  const { data } = await apiClient.get<Model[]>('/models');
  return data;
};

/**
 * Получает детальную информацию о конкретной модели по ее ID
 * @param modelId - ID модели
 */
export const getModelById = async (modelId: string): Promise<ModelDetails> => {
  const { data } = await apiClient.get<ModelDetails>(`/models/${modelId}`);
  return data;
};
