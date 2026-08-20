"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  qty: number;
};

type StoreContextValue = {
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (productId: string, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  wishlist: string[];
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  compare: string[];
  isCompared: (productId: string) => boolean;
  toggleCompare: (productId: string) => void;
  cartProducts: Product[];
};

const StoreContext = createContext<StoreContextValue | null>(null);

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignore */
    }
  }, [key]);
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, [key, value]);
  return [value, setValue] as const;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("fembosco_cart", []);
  const [wishlist, setWishlist] = useLocalStorage<string[]>("fembosco_wishlist", []);
  const [compare, setCompare] = useLocalStorage<string[]>("fembosco_compare", []);

  const addToCart = useCallback(
    (productId: string, qty = 1) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.productId === productId);
        if (existing) {
          return prev.map((i) =>
            i.productId === productId ? { ...i, qty: i.qty + qty } : i
          );
        }
        return [...prev, { productId, qty }];
      });
    },
    [setCart]
  );

  const removeFromCart = useCallback(
    (productId: string) => setCart((prev) => prev.filter((i) => i.productId !== productId)),
    [setCart]
  );

  const updateQty = useCallback(
    (productId: string, qty: number) =>
      setCart((prev) =>
        qty <= 0
          ? prev.filter((i) => i.productId !== productId)
          : prev.map((i) => (i.productId === productId ? { ...i, qty } : i))
      ),
    [setCart]
  );

  const clearCart = useCallback(() => setCart([]), [setCart]);

  const toggleWishlist = useCallback(
    (productId: string) =>
      setWishlist((prev) =>
        prev.includes(productId) ? prev.filter((i) => i !== productId) : [...prev, productId]
      ),
    [setWishlist]
  );

  const toggleCompare = useCallback(
    (productId: string) =>
      setCompare((prev) => {
        if (prev.includes(productId)) return prev.filter((i) => i !== productId);
        if (prev.length >= 3) return prev;
        return [...prev, productId];
      }),
    [setCompare]
  );

  const cartProducts = useMemo(
    () =>
      cart
        .map((item) => products.find((p) => p.id === item.productId))
        .filter((p): p is Product => Boolean(p)),
    [cart]
  );

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);

  const cartSubtotal = useMemo(
    () => cart.reduce((sum, i) => {
      const p = products.find((pp) => pp.id === i.productId);
      return p ? sum + p.price * i.qty : sum;
    }, 0),
    [cart]
  );

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist]
  );
  const isCompared = useCallback(
    (productId: string) => compare.includes(productId),
    [compare]
  );

  const value = useMemo<StoreContextValue>(
    () => ({
      cart,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      wishlist,
      isWishlisted,
      toggleWishlist,
      compare,
      isCompared,
      toggleCompare,
      cartProducts,
    }),
    [
      cart,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      wishlist,
      isWishlisted,
      toggleWishlist,
      compare,
      isCompared,
      toggleCompare,
      cartProducts,
    ]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}