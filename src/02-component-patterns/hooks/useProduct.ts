import { useState } from 'react';

export const useProduct = (onChange?: () => void) => {
    const [cart, setCart] = useState(0);

    const increaseBy = (value: number) => {
        setCart((prev: number) => Math.max(prev + value, 0));

        onChange?.();
    }

    return {
        cart,
        increaseBy,
    }
}