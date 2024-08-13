import { RefObject, useEffect } from 'react';

export function useOnClickOutside(
    ref: RefObject<HTMLDivElement>,
    // eslint-disable-next-line no-unused-vars
    handler: (event: TouchEvent | MouseEvent) => void
) {
    useEffect(() => {
        const listener = (event: TouchEvent | MouseEvent) => {
            if (
                !ref.current ||
                ref.current.contains(event.target as HTMLElement)
            ) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
