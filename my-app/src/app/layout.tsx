import './globals.css';
import { Oswald } from 'next/font/google';

const font = Oswald({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
