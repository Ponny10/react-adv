import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import { products } from '../data/Products';
import './../styles/custom-styles.css';

const product = products[0];

export const Shopping = () => {

    return (
        <div>
            <h1>Shopping</h1>
            <hr />
            <ProductCard
                className='bg-dark'
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {({
                    count,
                    increaseBy,
                    isMaxCountReached,
                    reset
                }) => (
                    <>
                        <ProductImage
                            className='productImage'
                            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
                        />
                        <ProductTitle title={product.title} className='text-white' />
                        <ProductButtons className='productButtons' />

                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}>-2</button>
                        {
                            (!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>)
                        }
                        <span>{count}</span>
                    </>
                )}
            </ProductCard>
        </div>
    )
}
