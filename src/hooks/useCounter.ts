import { useState } from 'react';

export interface UseCounter {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

export function useCounter(initialValue: number = 0): UseCounter {
  const [count, setCount] = useState<number>(initialValue);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increase, decrease, reset };
}
