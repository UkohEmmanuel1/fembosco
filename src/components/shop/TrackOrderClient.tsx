"use client";

import { useState, type FormEvent } from "react";
import { SearchIcon, CheckCircleIcon } from "@/components/ui/icons";

const steps = [
  { label: "Order Received", note: "We have received your order." },
  { label: "Payment Confirmed", note: "Payment verified by our finance team." },
  { label: "Picking & Packing", note: "Products are being prepared in our warehouse." },
  { label: "Out for Delivery", note: "Your order is on its way to the delivery address." },
  { label: "Delivered", note: "Order delivered and signed for." },
];

export function TrackOrderClient() {
  const [orderNo, setOrderNo] = useState("");
  const [searched, setSearched] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched(true);
    setCurrentStep(2);
  };

  return (
    <div className="container-site py-14">
      <div className="glass mx-auto max-w-xl rounded-2xl border border-slate-200/70 bg-white p-8 shadow-card">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">Track Your Order</h1>
        <p className="mt-2 text-sm text-slate-500">
          Enter your order number (e.g. FMB-12345678) to view the current delivery status.
        </p>
        <form onSubmit={onSubmit} className="mt-6 flex gap-3">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm ring-focus">
            <SearchIcon className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              value={orderNo}
              onChange={(e) => setOrderNo(e.target.value)}
              required
              placeholder="FMB-12345678"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          <button type="submit" className="btn-pill shrink-0">
            Track
          </button>
        </form>

        {searched && (
          <div className="mt-8">
            <p className="rounded-xl border border-brand-secondary/20 bg-brand-secondary-light px-4 py-3 font-mono text-sm font-semibold text-brand-primary">
              Order {orderNo || "FMB-12345678"} — In Progress
            </p>
            <ol className="mt-6 space-y-0">
              {steps.map((step, i) => {
                const reached = i <= currentStep;
                return (
                  <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
                    {i < steps.length - 1 && (
                      <span
                        className={`absolute left-[15px] top-8 h-full w-0.5 ${
                          i < currentStep ? "bg-brand-secondary" : "bg-slate-200"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        reached ? "bg-gradient-to-b from-brand-secondary to-brand-primary text-white shadow-sm" : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      <CheckCircleIcon className="h-4 w-4" />
                    </span>
                    <div className="pt-1">
                      <p className={`font-display text-sm font-semibold ${reached ? "text-slate-900" : "text-slate-400"}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-500">{step.note}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
              Need help? Call{" "}
              <a href="tel:+2348023124969" className="font-semibold text-brand-primary hover:text-brand-accent">
                {`+234-802-312-4969`}
              </a>{" "}
              or chat with us on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}