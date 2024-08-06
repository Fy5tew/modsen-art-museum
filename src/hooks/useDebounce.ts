import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const t = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(t);
        };
    }, [value, delay]);
    return debouncedValue;
}

export { useDebounce };
