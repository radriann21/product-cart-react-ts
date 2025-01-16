interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  image: Image;
  name: string;
  category: string;
  price: number;
}

type Products = Product[];