import { create } from "zustand";
import products from '../data.json'

type State = {
  products: Products
}

export const useCartStore = create<State>(() => ({
  products
}))