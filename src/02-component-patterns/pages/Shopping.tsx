
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

                <ProductCard product={product}  className='bg-dark'>
                    <ProductCard.Image
                        className='productImage'
                        style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}}
                    />
                    <ProductCard.Title title={'Hola God'} className='text-white' />
                    <ProductCard.Buttons className='productButtons' />
                </ProductCard>
            
                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: 'red'
                    }}
                >
                    <ProductImage style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
