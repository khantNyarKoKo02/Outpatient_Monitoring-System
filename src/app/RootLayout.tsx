import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A description of my app",
};

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <main>{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
