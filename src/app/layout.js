import { Header } from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kitchen",
  description: "Kitchen project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Button>Click me</Button>
        <main>{children}</main>
      </body>
    </html>
  );
}
