import { CircleX } from "lucide-react"
import { useCartStore } from "../app/CartStore"

type ProductCartCardProps = {
  product: Product
}

export const ProductCartCard = ({ product }: ProductCartCardProps) => {
  const quitAllElements = useCartStore((state) => state.quitAllElements)

  return (
    <li className="py-2 flex items-center justify-between w-full text-sm border-b-[1px] border-b-brand-100">
      <div>
        <h5 className="font-customSemibold text-brand-900">{product.name}</h5>
        <div className="flex items-center space-x-4">
          <span className="text-primary-custom-red font-customSemibold">{product.quantity}x</span>
          <div className="space-x-2">
            <span className="text-brand-400">@{product.price.toFixed(2)}</span>
            <span className="text-brand-500 font-customSemibold">$5.50</span>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => quitAllElements(product.id)} className="w-fit">
          <CircleX className="w-6 h-6 stroke-brand-300 transition-colors duration-300 hover:stroke-brand-900" />
        </button>
      </div>
    </li>
  )
} 