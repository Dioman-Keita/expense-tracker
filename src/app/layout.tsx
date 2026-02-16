import { roboto } from "@lib/font";
import Container from "@components/layout/container";
import "@styles/globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
