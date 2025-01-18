import { CircleCheck } from "lucide-react"
import { useCartStore } from "../app/CartStore"

type ModalOrder = {
  totalPrice: number
}

export const ModalOrder = ({ totalPrice }: ModalOrder) => {

  const cart = useCartStore((state) => state.cart)
  const resetCart = useCartStore((state) => state.resetCart)

  return (
    <>
      <button className="w-full rounded-full py-4 px-10 bg-primary-custom-red text-white font-customSemibold transition-colors duration-300 hover:bg-brand-900" onClick={() => (document.getElementById('modal') as HTMLDialogElement).showModal()}>
        Confirm Order
      </button>

      <dialog id="modal" className="modal">
        <div className="modal-box bg-white p-6 md:p-8 space-y-8">
          <CircleCheck className="stroke-primary-custom-green w-10 h-10" />
          <div className="mt-4">
            <h3 className="font-customBold text-brand-900 text-3xl">Order Confirmed</h3>
            <p className="text-brand-500 text-sm font-customRegular">We hope you enjoy your food!</p>
          </div>
          <div className="p-3 md:p-6 rounded-md bg-brand-50 flex flex-col justify-center items-center space-y-2">
            {cart.map((element) => (
              <article className="flex items-center justify-between w-full" key={element.id}>
                <div className="flex items-center space-x-4">
                  <img className="rounded-md w-12 h-12 md:w-16 md:h-16" src={element.image.thumbnail} alt={element.name} />
                  <div>
                    <h5 className="text-brand-900 font-semibold">{element.name}</h5>
                    <div className="flex items-center space-x-2">
                      <span className="font-customSemibold text-primary-custom-red">x{element.quantity}</span>
                      <span className="font-customSemibold">@ ${element.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-customSemibold text-brand-900">
                    ${(element.price * (element.quantity || 0)).toFixed(2)}
                  </span>
                </div>
              </article>
            ))}
            <div className="w-full flex items-center justify-between">
              <span className="font-customRegular text-brand-900">Order Total</span>
              <span className="text-2xl font-customBold text-brand-900">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <form method="dialog">
            <button onClick={resetCart} className="w-full p-4 text-brand-50 font-customSemibold bg-primary-custom-red rounded-full">
              Start New Order
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}