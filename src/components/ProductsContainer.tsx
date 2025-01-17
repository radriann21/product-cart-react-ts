import { useCartStore } from "../app/CartStore"
import { ProductCard } from "./ProductCard"

export const ProductsContainer = () => {
  const products = useCartStore((state) => state.products)

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}