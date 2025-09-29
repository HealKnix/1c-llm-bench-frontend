import { apiClient } from '../client';
import type { PersonalData } from '../types';

/**
 * Отправляет персональные данные на сервер
 * @param formData - Данные из формы
 */
export const submitPersonalData = async (
  formData: PersonalData,
): Promise<{ success: boolean }> => {
  const { data } = await apiClient.post<{ success: boolean }>(
    '/submit',
    formData,
  );
  return data;
};
