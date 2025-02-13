interface _ProductCardHOCProps {
    Title: (Props: _ProductTittle) => JSX.Element;
    Image: (Props: _ProductImage) => JSX.Element;
    Buttons: (Props: _PropsButtons) => JSX.Element;
    (Props: _ProductCardProps): JSX.Element;
}

interface _ProductCardProps {
    children?: ReactElement | ReactElement[];
    className?: string;
    onChange?: (args: _onChangeArgs) => void;
    product: Product;
    style?: React.CSSProperties;
    value: number;
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

interface _onChangeArgs {
    counter: number;
    product: _Product;
}