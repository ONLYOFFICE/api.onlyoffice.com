import { useEffect, useState } from "react";

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (JSON.stringify(debouncedValue) !== JSON.stringify(value)) {
        setDebouncedValue(value);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
