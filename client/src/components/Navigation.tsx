import { Link, useLocation } from "wouter";
import { LayoutDashboard, UtensilsCrossed, CalendarDays, ShoppingCart, Leaf, ChartColumnBig } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/meal-plan", label: "Meal Plan", icon: CalendarDays },
    { href: "/recipes", label: "Recipes", icon: UtensilsCrossed },
    { href: "/summary", label: "Summary", icon: ChartColumnBig },
    { href: "/ingredients", label: "Ingredients", icon: Leaf },
    { href: "/shopping-list", label: "Shopping", icon: ShoppingCart },
  ];

  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-white/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/85 md:relative md:inset-auto md:h-screen md:w-72 md:border-r md:border-t-0 md:bg-card md:p-6 md:shadow-none"
    >
      <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3 md:mb-8 md:border-b-0 md:px-2 md:py-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Leaf className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-display text-lg font-bold text-primary md:text-xl">NutriPlan</h1>
          <p className="text-xs text-muted-foreground">Eat well, live better</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 md:flex md:grid-cols-1 md:flex-col md:gap-2 md:px-0 md:pb-0 md:pt-0">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-medium transition-colors md:min-h-0 md:flex-row md:justify-start md:gap-3 md:px-4 md:py-3 md:text-sm",
                isActive
                  ? "bg-primary/10 text-primary md:font-semibold"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" strokeWidth={isActive ? 2.4 : 2} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
