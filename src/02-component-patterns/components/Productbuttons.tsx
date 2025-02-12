import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = ({className}: PropsButtons) => {
    const {cart, increaseBy} = useContext(ProductContext);
    
    return (
        <div className={styles.buttonsContainer}>
            <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>-</button>
            <div className={`${styles.countLabel} ${className}`}>{cart}</div>
            <button className={`${styles.buttonAdd} ${className}`} onClick={() => increaseBy(1)}>+</button>
        </div>
    );
}