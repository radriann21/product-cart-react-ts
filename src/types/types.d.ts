interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  id: string;
  image: Image;
  name: string;
  category: string;
  price: number;
  quantity?: number
}

type Products = Product[];

type ButtonState = {
  active: boolean
}

type CartProduct = {
  product: Product
  quantity?: number
}