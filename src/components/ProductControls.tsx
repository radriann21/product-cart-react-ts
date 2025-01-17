import { CircleMinus, CirclePlus } from 'lucide-react'
import { useCartStore } from '../app/CartStore'

export const ProductControls = () => {

  const sumElement = useCartStore((state) => state.sumElement)
  const subsElement = useCartStore((state) => state.subsElement)

  return (
    <>
      <button onClick={subsElement}>
        <CircleMinus className='w-4 h-4 stroke-brand-50 transition-colors duration-300 hover:fill-white hover:stroke-primary-custom-red' />
      </button>
      <button className='mx-6 font-customSemibold text-brand-50'>
        0
      </button>
      <button onClick={sumElement}>
        <CirclePlus className='w-4 h-4 stroke-brand-50 transition-colors duration-300 hover:fill-white hover:stroke-primary-custom-red' />
      </button>
    </>
  )
}