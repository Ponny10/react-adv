interface _ProductCardProps {
    className?: string;
    children?: ReactElement | ReactElement[];
    product: Product;
}

interface Product {
    id: string;
    title: string;
    imgProduct?: string;
}

interface PropsButtons {
    className?: string;
}

interface ProductContextProps {
    cart: number;
    increaseBy: (value: number) => void;
    product: Product;
}

interface ProductImage {
    className?: string;
    img?: string;
}