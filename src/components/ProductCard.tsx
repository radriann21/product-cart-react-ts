import { ImageCard } from "./ImageCard"
import { AddToCartButton } from "./AddToCartButton"

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="flex flex-col font-customRegular">
      <div className="relative">
        <ImageCard image={product.image} name={product.name} />
        <AddToCartButton />
      </div>
      <div className="mt-0">
        <span className="text-brand-400 text-sm block">{product.category}</span>
        <h4 className="text-brand-900 font-customSemibold">{product.name}</h4>
        <span className="block text-primary-custom-red font-customSemibold">${product.price.toFixed(2)}</span>
      </div>
    </article>
  )
}