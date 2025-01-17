import { CartComponent } from "./components/CartComponent"
import { ProductsContainer } from "./components/ProductsContainer"

function App() {
  return (
    <main className="max-w-full min-h-screen bg-brand-100 font-customRegular">
      <section className="max-w-full min-h-screen grid grid-cols-1 md:grid-cols-3 p-4 md:p-10 md:gap-8">
        <section className="col-span-2 h-full">
          <h2 className="text-3xl font-customBold text-brand-900 mb-8">Desserts</h2>
          <ProductsContainer />
        </section>
        <aside className="col-span-1 h-full">
          <CartComponent />
        </aside>
      </section>
    </main>
  )
}

export default App
