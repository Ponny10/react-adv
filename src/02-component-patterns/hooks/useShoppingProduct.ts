import { useState } from 'react';


export const useShoppingProduct = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: _ProductInCart }>({});

    const onProductCountChange = ({ counter, product }: { counter: number, product: _Product }) => {

        setShoppingCart(oldShoppingCart => {
            if (counter === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }
 
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count: counter }
            }
        });
    }
    return {
        shoppingCart,
        onProductCountChange,
    }
}
