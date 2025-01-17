import { create } from "zustand";
import products from '../data.json'

type State = {
  products: Products,
  cart: Products,
  totalElements: number
}

type Action = {
  sumElement: (product: Product) => void
  subsElement: () => void
  quitAllElements: (id: string) => void
}

export const useCartStore = create<State & Action>((set) => ({
  products,
  cart: [],
  totalElements: 0,
  sumElement: (product) => set((state) => {
    const updatedCart = [...state.cart, product]
    return {
      cart: updatedCart,
      totalElements: updatedCart.length
    }
  }),
  subsElement: () => set((state) => {
    const updatedCart = state.cart.slice(0, -1)
    return {
      cart: updatedCart,
      totalElements: state.cart.length
    }
  }),
  quitAllElements: (id) => set((state) => {
    const updatedCart = state.cart.filter(product => product.id !== id);
    return {
      cart: updatedCart,
      totalElements: updatedCart.length
    };
  })
}))