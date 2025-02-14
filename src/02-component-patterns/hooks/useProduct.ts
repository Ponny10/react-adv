import { useEffect, useRef, useState } from 'react';

interface _UseProductProps {
    product: _Product;
    onChange?: (args: _onChangeArgs) => void;
    value: number;
}
export const useProduct = ({ onChange, product, value = 0 }: _UseProductProps) => {

    const [cart, setCart] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current && onChange) {
            console.log('Termina el flujo = ', !!onChange);
            return onChange({ counter: value, product });
        }


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