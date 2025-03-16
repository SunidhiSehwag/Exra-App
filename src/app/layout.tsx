import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: [
    { url: '/favicon.ico' },
    { url: '/icon.png', type: 'image/png' }
  ],
  title: "Exra-Its Simple",
  description: "Exercise a little daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
      />
      <body>{children}</body>
    </html>
  );
}
