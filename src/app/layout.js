import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Kitchen",
  description: "Kitchen project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="h-[2000px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
