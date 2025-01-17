import cartPlaceholder from "../assets/illustrations/illustration-empty-cart.svg"
import { useCartStore } from "../app/CartStore"
import { ProductCartList } from "./ProductCartList"
import { OrderCardSection } from "./OrderCardSection"

export const CartComponent = () => {
  const totalElements = useCartStore((state) => state.totalElements)

  return (
    <article className="bg-white p-6 rounded-md w-full mt-8 sm:mt-0">
      <h3 className="font-customBold text-primary-custom-red text-xl">Your Cart {`(${totalElements})`}</h3>
      {
        totalElements > 0
          ? (<ProductCartList />)
          : (<div className="space-y-4 mt-4">
            <img className="mx-auto" src={cartPlaceholder} alt="An illustation of cake" />
            <p className="font-customRegular text-brand-500 text-center text-sm">Your added items will appear here</p>
          </div>)
      }
      {
        totalElements > 0
          ? (<OrderCardSection />)
          : null
      }
    </article>
  )
}