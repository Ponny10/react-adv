

interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
}

interface Product {
    id: string;
    title: string;
    imgProduct?: string;
}

interface PropsButtons {
    cart: number;
    increaseBy: (value: number) => void;
}

interface ProductContextProps {
    cart: number;
    increaseBy: (value: number) => void;
    product: Product;
}