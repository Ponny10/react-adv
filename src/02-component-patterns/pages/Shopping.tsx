
import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import './../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffe - Mugggggg',
    imgProduct: 'coffee-mug.png',
}

export const Shopping = () => {

    return (
        <div>
            <h1>Shopping</h1>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>

                <ProductCard product={product} className='bg-dark'>
                    <ProductImage className='productImage' />
                    <ProductTitle title={product.title} className='text-white' />
                    <ProductButtons className='productButtons' />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image className='productImage' />
                    <ProductCard.Title title={'Hola God'} className='text-white' />
                    <ProductCard.Buttons className='productButtons' />
                </ProductCard>
            
            </div>
        </div>
    )
}
