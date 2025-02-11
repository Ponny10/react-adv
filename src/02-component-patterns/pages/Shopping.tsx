
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

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

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={product.title} />
                    <ProductButtons />
                </ProductCard>

                {/* <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Hola God'} />
                    <ProductCard.Buttons />
                </ProductCard> */}
            
            </div>
        </div>
    )
}
