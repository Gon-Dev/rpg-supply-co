import { InnerStyles } from "@/styles/GlobalStyles";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <InnerStyles>
        <h2>I am the page component</h2>
        {children}
      </InnerStyles>
    </div>
  );
}
