
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

/* Crear un Context para el componente Producto */
const ProductContext = createContext({} as _ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
    children,
    className,
    initialValues,
    onChange,
    product,
    style,
    value = 0,
}: _ProductCardProps) => {

    const { cart, increaseBy, maxCount, reset, isMaxCountReached } = useProduct({
        initialValues,
        onChange, 
        product, 
        value,
    });

    return (
        <Provider value={{ cart, increaseBy, product, maxCount }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: cart,
                    increaseBy,
                    isMaxCountReached,
                    maxCount: initialValues?.count,
                    product,
                    reset,
                })}
            </div>
        </Provider>
    );
}

export {
    ProductCard,
    ProductContext,
}