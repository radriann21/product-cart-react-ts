import { ShoppingCart } from "lucide-react"

export const AddToCartButton = () => {
  return (
    <button className="w-fit px-6 py-2 rounded-full bg-white border-2 border-primary-custom-red -translate-y-4 flex items-center space-x-2 text-sm mx-auto">
      <ShoppingCart className="stroke-primary-custom-red" />
      <span className="font-customSemibold">Add to Cart</span>
    </button>
  )
}