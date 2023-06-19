"use client";

import ProgressBar from "next-nprogress-bar";
import StyledComponentsRegistry from "../../lib/registry";
import Header from "@/components/Header";
import { GlobalStyles } from "@/styles/GlobalStyles";
import "nprogress/nprogress.css";

export const metadata = {
  title: "RPG Supply Co.",
  description: "Online ingame fantasy store for Dungeons & Dragons campaigns.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <ProgressBar
            height="4px"
            color="#ff0000"
            options={{ showSpinner: false }}
            shallowRouting
            appDirectory
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
