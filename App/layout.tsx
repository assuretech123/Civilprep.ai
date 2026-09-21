import React from "react";

export const metadata = {
  title: "Civilprep AI - Mock Interview Platform",
  description: "AI-powered mock interview system for Civil Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
