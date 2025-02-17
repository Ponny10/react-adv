import { useCallback, useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = ({ className }: _PropsButtons) => {
    const { cart, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
      () => !!maxCount && cart === maxCount,
      [cart, maxCount],
    )
    
    console.log('***** ', maxCount);


    return (
        <div className={styles.buttonsContainer}>
            <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>-</button>
            <div className={`${styles.countLabel} ${className}`}>{cart}</div>
            <button className={`${styles.buttonAdd} ${className} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>+</button>
        </div>
    );
}