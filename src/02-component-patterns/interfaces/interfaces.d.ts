interface _ProductCardHOCProps {
    Title: (Props: _ProductTittle) => JSX.Element;
    Image: (Props: _ProductImage) => JSX.Element;
    Buttons: (Props: _PropsButtons) => JSX.Element;
    (Props: _ProductCardProps): JSX.Element;
}

interface _ProductCardProps {
    className?: string;
    children?: ReactElement | ReactElement[];
    product: Product;
    style?: React.CSSProperties;
    onChange?: () => void;
}

interface _Product {
    id: string;
    title: string;
    imgProduct?: string;
}

interface _PropsButtons {
    className?: string;
}

interface _ProductContextProps {
    cart: number;
    increaseBy: (value: number) => void;
    product: Product;
}

interface _ProductImage {
    className?: string;
    img?: string;
    style?: React.CSSProperties;
}

interface _ProductTittle {
    title?: string;
    className?: string;
}