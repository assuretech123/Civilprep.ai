import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Civilprep.ai - MPSC/UPSC AI Mock Interview',
  description: 'AI-driven mock interview platform for MPSC & UPSC aspirants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <body className="bg-slate-50 text-slate-900 font-sans">{children}</body>
    </html>
  );
}
