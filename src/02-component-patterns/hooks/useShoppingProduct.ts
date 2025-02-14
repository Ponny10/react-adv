import { useState } from "react";


export const useShoppingProduct = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: _ProductInCart }>({});

    const onProductCountChange = ({ counter, product }: { counter: number, product: _Product }) => {

        setShoppingCart(oldShoppingCart => {
            /* Agregar al estado(carrito) */
            const productInCart: _ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            console.log('Valor inicial de productInCart = ', JSON.stringify(productInCart), ' ', counter);
            
            /* Actualizar cantidad si el argumento de count es mayor(1) */
            if (Math.max(productInCart.count + counter, 0) > 0) {
                console.log('Valor productInCart en el If = ', JSON.stringify(productInCart), ' ', counter);
                productInCart.count +=  counter;
                console.log('Después de la suma = ', JSON.stringify(productInCart), ' ', counter);
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            /* Caso contrario, eliminar el producto */
            const { [product.id]: toDelete, ...res } = oldShoppingCart;
            return res;

            /* if (counter === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }
 
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count: counter }
            } */
        });
    }
    return {
        shoppingCart,
        onProductCountChange,
    }
}
