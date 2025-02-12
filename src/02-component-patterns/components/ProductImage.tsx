import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImage from './../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '', className }: ProductImage) => {
    const {product} = useContext(ProductContext);

    let showImage: string;

    if (img) {
        showImage = img;
    } else if (product.imgProduct) {
        showImage = product.imgProduct;
    } else {
        showImage = noImage;
    }
    return (
        <img src={showImage} alt='Product Image' className={`${styles.productImg} ${className}`} />
    )
}