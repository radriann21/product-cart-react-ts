import carbonFree from '../assets/icons/icon-carbon-neutral.svg'
import { useCartStore } from '../app/CartStore'

export const OrderCardSection = () => {

  const cart = useCartStore((state) => state.cart)
  const totalPrice = cart.reduce((sum, el) => sum + (el.price * (el.quantity ? el.quantity : 0)), 0)

  return (
    <section className="w-full mt-6">
      <div className="w-full flex items-center justify-between">
        <span className="font-customRegular text-brand-900">Order Total</span>
        <span className="font-customBold text-xl text-brand-900">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex flex-col w-full items-center justify-center text-sm mt-4 space-y-8">
        <div className="w-full mx-auto rounded-md px-8 py-4 text-center bg-brand-50 flex items-center justify-center space-x-2">
          <img src={carbonFree} alt="a illustration of an carbon neutral action" />
          <span className='font-customRegular'>This is a <span className='font-customSemibold text-brand-900'>carbon neutral</span> delivery</span>
        </div>
        <button className="w-full rounded-full py-4 px-10 bg-primary-custom-red text-white font-customSemibold transition-colors duration-300 hover:bg-brand-900">
          Confirm Order
        </button>
      </div>
    </section>
  )
}