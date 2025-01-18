import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import { CircleMinus, CirclePlus } from 'lucide-react'
import { useCartStore } from '../app/CartStore'

type AddToCartButtonProps = {
  product: Product
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const sumElement = useCartStore((state) => state.sumElement)
  const subsElement = useCartStore((state) => state.subsElement)
  const cart = useCartStore((state) => state.cart)
  const productInCart = cart.find(el => el.id === product.id)
  const quantity = productInCart?.quantity ?? 0

  const [buttonState, setButtonState] = useState<ButtonState>({
    active: false,
  })

  const handleActive = () => {
    if (!buttonState.active) {
      setButtonState({ active: true })
      sumElement(product)
    }
  }

  useEffect(() => {
    if (quantity === 0) {
      setButtonState({ active: false })
    }
  }, [quantity])



  return (
    <button onClick={handleActive} className={`px-6 xl:px-12 py-2 rounded-full ${buttonState.active ? ('bg-primary-custom-red') : ('bg-white')} border-2 border-primary-custom-red -translate-y-4 flex items-center justify-between text-sm mx-auto transition-colors duration-300 hover:text-primary-custom-red`}>
      {
        buttonState.active
          ? (
            <>
              <span onClick={() => subsElement(product.id)}>
                <CircleMinus className='w-4 h-4 stroke-brand-50 transition-colors duration-300 hover:fill-white hover:stroke-primary-custom-red' />
              </span>
              <span className='mx-6 font-customSemibold text-brand-50'>
                {quantity}
              </span>
              <span onClick={() => sumElement(product)}>
                <CirclePlus className='w-4 h-4 stroke-brand-50 transition-colors duration-300 hover:fill-white hover:stroke-primary-custom-red' />
              </span>
            </>
          )
          : (
            <>
              <ShoppingCart className="stroke-primary-custom-red mx-2" />
              <span className="font-customSemibold mx-2 text-brand-900">Add to Cart</span>
            </>
          )
      }
    </button>
  )
}