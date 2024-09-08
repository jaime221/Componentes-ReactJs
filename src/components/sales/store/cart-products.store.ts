import { create } from "zustand";
import { ICartProduct, ICartProductStore } from "../types/cart-products.type";

export const useCartProduct = create<ICartProductStore>((set) => ({
    cart_product: [],
    AddToCart: (product: ICartProduct) => {
        set((state) => ({
            cart_product: state.cart_product.some(p => p.id === product.id)
                ? state.cart_product.map(p => p.id === product.id ? { ...p, stock: p.stock + 1 } : p)
                : [...state.cart_product, { ...product, stock: 1 }]
        }));
    },
    RemoveFromCart: (productId: number) => {
        set((state) => ({
            cart_product: state.cart_product.reduce<ICartProduct[]>((acc, product) => {
                if (product.id === productId) {
                    const newStock = product.stock - 1;
                    if (newStock > 0) {
                        acc.push({ ...product, stock: newStock });
                    }
                } else {
                    acc.push(product);
                }
                return acc;
            }, [])
        }));
    },
    
    IncreaseQuantity: (productId: number) => {
        set((state) => ({
            cart_product: state.cart_product.map(p =>
                p.id === productId ? { ...p, stock: p.stock + 1 } : p
            )
        }));
    },

    DecreaseQuantity: (productId: number) => {
        set(state => ({
            cart_product: state.cart_product.filter(product => product.id !== productId)
        }));
    }
    ,
    ClearCart: () => {
        set({ cart_product: [] });
    }
}));
