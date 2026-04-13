import { Navigation } from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Przejdź do treści
      </a>

      <Navigation />

      <main
        id="main-content"
        className="h-screen flex-1 overflow-y-auto px-4 pb-28 pt-4 md:px-8 md:pb-8 md:pt-8"
      >
        <div className="mx-auto max-w-6xl page-transition">{children}</div>
      </main>
    </div>
  );
}
