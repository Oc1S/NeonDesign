import { useCallback, useRef } from 'react';

export function useDebounce(cb: (...args: any) => any, delay?: number) {
  if (!delay) return cb;
  const cbRef = useRef(cb);
  cbRef.current = cb;

  return useCallback(
    debounce((...args: any) => cbRef.current(...args), delay),
    [],
  );
}

function debounce(cb: (...args: any) => any, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: any) => {
    !!timer && clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
