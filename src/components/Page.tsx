export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}
