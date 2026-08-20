"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { QuoteModal } from "@/components/ui/QuoteModal";

type QuoteContextValue = {
  openQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue>({
  openQuote: () => {},
});

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openQuote }), [openQuote]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      {open && <QuoteModal onClose={closeQuote} />}
    </QuoteContext.Provider>
  );
}