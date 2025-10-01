import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const STORAGE_KEY = 'feature-interest-submissions';

const createEntryId = () => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  return `submission-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export interface FeatureInterestEntry {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface FeatureInterestContextValue {
  entries: FeatureInterestEntry[];
  addEntry: (entry: Omit<FeatureInterestEntry, 'id' | 'createdAt'>) => void;
}

const FeatureInterestContext =
  createContext<FeatureInterestContextValue | null>(null);

const readFromStorage = (): FeatureInterestEntry[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as FeatureInterestEntry[];
  } catch (error) {
    console.warn(
      'Failed to read feature interest submissions from storage',
      error,
    );
    return [];
  }
};

export const FeatureInterestProvider = ({ children }: PropsWithChildren) => {
  const [entries, setEntries] = useState<FeatureInterestEntry[]>(() =>
    readFromStorage(),
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addEntry = useCallback<FeatureInterestContextValue['addEntry']>(
    (entry) => {
      setEntries((prev) => [
        {
          id: createEntryId(),
          createdAt: new Date().toISOString(),
          ...entry,
        },
        ...prev,
      ]);
    },
    [],
  );

  const value = useMemo<FeatureInterestContextValue>(
    () => ({
      entries,
      addEntry,
    }),
    [addEntry, entries],
  );

  return (
    <FeatureInterestContext.Provider value={value}>
      {children}
    </FeatureInterestContext.Provider>
  );
};

export const useFeatureInterest = () => {
  const context = useContext(FeatureInterestContext);

  if (!context) {
    throw new Error(
      'useFeatureInterest must be used within a FeatureInterestProvider',
    );
  }

  return context;
};
