import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { MouseEvent, ReactNode } from "react";

type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.pathname || "/"
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

export function useRoute(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useRoute must be used inside <Router>");
  }
  return ctx;
}

type LinkProps = {
  to: string;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  children: ReactNode;
};

export function Link({
  to,
  className,
  activeClassName,
  exact = false,
  children,
}: LinkProps) {
  const { path, navigate } = useRoute();
  const isActive = exact ? path === to : path === to || path.startsWith(`${to}/`);

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  const composed = [className, isActive ? activeClassName : null]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={to} onClick={onClick} className={composed || undefined}>
      {children}
    </a>
  );
}
