import { create } from "zustand";
import products from '../data.json';

type State = {
  products: Products,
  cart: Products,
  totalElements: number
}

type Action = {
  sumElement: (product: Product) => void,
  subsElement: (id: string) => void,
  quitAllElements: (id: string) => void
}

export const useCartStore = create<State & Action>((set) => ({
  products,
  cart: [],
  totalElements: 0,
  sumElement: (product) => set((state) => {
    const productInCart = state.cart.find(el => el.id === product.id);

    let updatedCart;
    if (productInCart) {
      updatedCart = state.cart.map(el => el.id === product.id ? { ...el, quantity: (el.quantity || 0) + 1 } : el);
    } else {
      updatedCart = [...state.cart, { ...product, quantity: 1 }];
    }

    const totalElements = updatedCart.reduce((sum, el) => sum + (el.quantity || 0), 0);

    return {
      cart: updatedCart,
      totalElements
    };
  }),
  subsElement: (id) => set((state) => {
    const productInCart = state.cart.find(el => el.id === id);

    let updatedCart;
    if (productInCart && (productInCart.quantity || 0) > 1) {
      updatedCart = state.cart.map(el => el.id === id ? { ...el, quantity: (el.quantity ? el.quantity - 1 : 0) } : el);
    } else {
      updatedCart = state.cart.filter(el => el.id !== id);
    }

    const totalElements = updatedCart.reduce((sum, el) => sum + (el.quantity || 0), 0);

    return {
      cart: updatedCart,
      totalElements
    };
  }),
  quitAllElements: (id) => set((state) => {
    const updatedCart = state.cart.filter(product => product.id !== id);
    const totalElements = updatedCart.reduce((sum, el) => sum + (el.quantity || 0), 0);

    return {
      cart: updatedCart,
      totalElements
    };
  })
}));