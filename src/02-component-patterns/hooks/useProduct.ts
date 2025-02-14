import { useEffect, useState } from 'react';

interface _UseProductProps {
    product: _Product;
    onChange?: (args: _onChangeArgs) => void;
    value: number;
}
export const useProduct = ({ onChange, product, value = 0 }: _UseProductProps) => {

    const [cart, setCart] = useState(value);

    const increaseBy = (value: number) => {

        const newCart = Math.max(cart + value, 0);
        setCart(newCart);

        onChange?.({ counter: newCart, product });
    }

    useEffect(() => {
        setCart(value);
    }, [value]);

    return {
        cart,
        increaseBy,
    }
}