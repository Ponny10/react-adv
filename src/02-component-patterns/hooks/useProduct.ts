import { useState } from 'react';

export const useProduct = () => {
    const [cart, setCart] = useState(0);

    const increaseBy = (value: number) => setCart((prev: number) => Math.max(prev + value, 0));

    return {
        cart,
        increaseBy,
    }
}