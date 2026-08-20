export type QuoteRequest = {
  products: string[];
  brands: string[];
  otherBrands?: string;
  message?: string;
  urgency: string;
  dueDate?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type QuoteResult = {
  ok: boolean;
  message: string;
};

/**
 * Mock backend for the "Request a Quote" form.
 *
 * On the reference site this form posts to a WordPress Everest Forms endpoint
 * (form id 2901). No private/undocumented API is used here. Replace the body of
 * this function with a real API call (e.g. `/api/quotes` route handler) when a
 * backend is available.
 */
export async function submitQuoteRequest(_request: QuoteRequest): Promise<QuoteResult> {
  // Simulate network latency so loading states behave realistically.
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    ok: true,
    message: "Your quote request has been received. Our team will get back to you shortly.",
  };
}