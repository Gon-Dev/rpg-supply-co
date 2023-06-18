import StyledComponentsRegistry from "../../lib/registry";
import Header from "@/components/Header";
import {GlobalStyles} from "@/styles/GlobalStyles";

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
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
