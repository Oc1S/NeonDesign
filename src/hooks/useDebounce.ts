import { useCallback } from 'react';

export function useDebounce(cb: Function, delay?: number, deps: Array<unknown> = []) {
  if (!delay) return cb;
  /* const cbRef = useRef(cb);
  cbRef.current = cb; */
  return useCallback(
    // debounce((...args: any) => cbRef.current(...args), delay),
    debounce(cb, delay),
    deps,
  );
}

function debounce(cb: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    !!timer && clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
