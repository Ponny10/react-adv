import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import { products } from '../data/Products';
import { useShoppingProduct } from '../hooks/useShoppingProduct';
import './../styles/custom-styles.css';

export const Shopping = () => {

    const {onProductCountChange, shoppingCart} = useShoppingProduct();

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
                            value={shoppingCart[product.id]?.count || 0}
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
            {
                JSON.stringify(shoppingCart, null, 4)
            }
        </div>
    )
}
