import './globals.css';
import type { Metadata } from 'next';
import { Sarabun } from 'next/font/google';

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: '100'
  
});

export const metadata: Metadata = {
  title: 'Jewellista',
  description: 'Generated by',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={sarabun.className}>{children}</body>
    </html>
  );
}
