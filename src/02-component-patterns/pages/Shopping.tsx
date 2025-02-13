
import { useState } from 'react';
import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import './../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffe - Mug',
    imgProduct: 'coffee-mug.png',
}

const product2 = {
    id: '2',
    title: 'Coffe - Meme',
    imgProduct: 'coffee-mug2.png',
}

const products: _Product[] = [product, product2];

interface _ProductInCart extends _Product {
    count: number;
}

export const Shopping = () => {

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

    return (
        <div>
            <h1>Shopping</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                {
                    products.map((product: _Product) => (
                        <ProductCard
                            className='bg-dark'
                            key={product.id}
                            product={product}
                            onChange={onProductCountChange}
                            value={0}
                        >
                            <ProductImage
                                className='productImage'
                                style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
                            />
                            <ProductTitle title={product.title} className='text-white' />
                            <ProductButtons className='productButtons' />
                        </ProductCard>
                    ))
                }
            </div>
            <div className='shoppingCart' >
                {
                    Object.values(shoppingCart).map((product) => (
                        <ProductCard
                            className='bg-dark'
                            key={product.id}
                            product={product}
                            style={{ width: '120px' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='productImage' />
                            <ProductButtons className='productButtons' />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
