import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme/app.theme";
export const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <body className={montserrat.className}>
        <ThemeProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
