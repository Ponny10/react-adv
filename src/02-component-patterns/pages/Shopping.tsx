
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

    const [shoppingCart, setShoppingCart] = useState<{[key: string]: _ProductInCart}>({});

    const onProductCountChange = () => {
        console.log('Esta cambiando el counter...');
    }

    return (
        <div>
            <h1>Shopping</h1>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                {
                    products.map((product: _Product) => (
                        <ProductCard
                            className='bg-dark'
                            key={product.id}
                            product={product}
                            onChange={() => onProductCountChange()}
                        >
                            <ProductImage
                                className='productImage'
                                style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}}
                            />
                            <ProductTitle title={product.title} className='text-white' />
                            <ProductButtons className='productButtons' />
                        </ProductCard>
                    ))
                }
            </div>
            <div className='shoppingCart'>
                <ProductCard product={product} className='bg-dark' style={{width: '120px'}}>
                    <ProductImage className='productImage' />
                    <ProductButtons className='productButtons' />
                </ProductCard>
            </div>
        </div>
    )
}
