/**
 * * Based on useLocalStorage hook available at
 * * https://usehooks.com/useLocalStorage
 */

import { useState } from 'react';

export default function useLocalStorage(key: string, initialValue: string) {
  const [state, setState] = useState<string>(() => {
    const item = localStorage.getItem(key);
    return item ?? initialValue;
  });

  const setValue = (value: string | ((val: string) => string)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      localStorage.setItem(key, valueToStore);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  };

  const clear = () => {
    localStorage.setItem(key, initialValue);
  };

  return [state, setValue, clear] as const;
}
