"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "react-query";

const client = new QueryClient();
export default function QueryClientProvider({ children }: { children: ReactNode }) {
  return <ReactQueryClientProvider client={client}>{children}</ReactQueryClientProvider>;
}
