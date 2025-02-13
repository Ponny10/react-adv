
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

/* Crear un Context para el componente Producto */
const ProductContext = createContext({} as _ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ className, children, product, style, onChange, value = 0 }: _ProductCardProps) => {

    const { cart, increaseBy } = useProduct({onChange, product, value});

    return (
        <Provider value={{ cart, increaseBy, product }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    );
}

export {
    ProductCard,
    ProductContext,
}