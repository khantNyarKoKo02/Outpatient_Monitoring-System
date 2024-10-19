import React from "react";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
