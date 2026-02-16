import { roboto } from "@lib/font";
import Navbar from "@components/layout/navbar";
import Header from "@components/layout/header";
import "@styles/globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen">
        <Header />
        <Navbar />
        <main className="pl-24 pr-6 py-12">{children}</main>
      </body>
    </html>
  );
}
