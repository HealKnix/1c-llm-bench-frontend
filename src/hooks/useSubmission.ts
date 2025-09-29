import { useMutation } from 'react-query';
import { submitPersonalData } from '../api/endpoints/submission';

/**
 * Хук для мутации (отправки) персональных данных
 */
export const useSubmitPersonalData = () =>
  useMutation({
    mutationFn: submitPersonalData,
    onSuccess: () => {
      console.log('Data submitted successfully!');
    },
    onError: (error) => {
      console.error('Error submitting data:', error);
    },
  });
