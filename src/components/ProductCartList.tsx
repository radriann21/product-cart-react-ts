import { useCartStore } from "../app/CartStore"
import { ProductCartCard } from "./ProductCartCard"

export const ProductCartList = () => {
  const cart = useCartStore((state) => state.cart)

  return (
    <ul className="w-full flex flex-col items-start space-y-4 mt-2 overflow-y-scroll">
      {cart.map((product) => (
        <ProductCartCard key={product.id} product={product} />
      ))}
    </ul>
  )

}