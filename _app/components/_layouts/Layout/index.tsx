/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Navbar from "./navbar";
import Footer from "./footer";

const fonts = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Layout: React.FC<any> = async ({ children }) => {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME ?? "Final Test Isa"}</title>
      </head>
      <body className={`${fonts.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <div className="mt-10">
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
