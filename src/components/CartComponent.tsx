import cartPlaceholder from "../assets/illustrations/illustration-empty-cart.svg"

export const CartComponent = () => {
  return (
    <article className="bg-white p-6 rounded-md">
      <h3 className="font-customBold text-primary-custom-red">Your Cart (0)</h3>
      <div className="space-y-4">
        <img className="mx-auto" src={cartPlaceholder} alt="An illustation of cake" />
        <p className="font-customRegular text-brand-500 text-center text-sm">Your added items will appear here</p>
      </div>
    </article>
  )
}