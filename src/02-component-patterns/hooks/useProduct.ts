import { useEffect, useRef, useState } from 'react';

interface _UseProductProps {
    product: _Product;
    onChange?: (args: _onChangeArgs) => void;
    value: number;
    initialValues?: _InitialValues;
}
export const useProduct = ({
    onChange,
    product,
    value = 0, initialValues
}: _UseProductProps) => {

    const [cart, setCart] = useState(initialValues?.count || value);

    /* Evitar re-renderizar el hook */
    const isAmount = useRef(false);

    const increaseBy = (value: number) => {

        const newCart = Math.max(cart + value, 0);
        setCart(
            initialValues?.maxCount ?
                ((initialValues.maxCount > newCart) ?
                    newCart : initialValues.maxCount) :
                newCart
        );

        onChange?.({ counter: newCart, product });
    }

    useEffect(() => {
        isAmount.current = true;
    }, []);

    useEffect(() => {
        if (isAmount) return;
        setCart(value);
    }, [value]);



    return {
        cart,
        increaseBy,
    }
}