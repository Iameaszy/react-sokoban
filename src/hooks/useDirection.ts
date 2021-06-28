import { useEffect, RefObject } from 'react';

const directions = ['arrowUp', 'arrowDown', 'arrowLeft', 'arrowRight'];

export function useClickOutside(ref: RefObject<HTMLElement>, onKeyboardClick: (e: KeyboardEvent) => void) {
    if (!ref.current) {
        return;
    }

    const keyUp = (e: KeyboardEvent) => {
        if (directions.includes(e.key)) {
            return onKeyboardClick(e);
        }
    };

    useEffect(() => {
        document.addEventListener('keyup', keyUp);

        return () => {
            document.removeEventListener('keyup', keyUp);
        };
    }),
        [onKeyboardClick];
}

export default useClickOutside;
