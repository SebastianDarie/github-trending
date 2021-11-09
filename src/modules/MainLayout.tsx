import { useRouter } from "next/router";
import { NavButton } from "../ui/NavButton";

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();

  const path = router.pathname;

  return (
    <main>
      <div className="boxBorder bg-subtle">
        <div className="max-w-1012 mx-auto py-10 text-center">
          <h1 className="text-fg-default text-3xl font-bold">Trending</h1>
          <p className="text-fg-muted text-base mt-0 mb-2">
            See what the GitHub community is most excited about today.
          </p>
        </div>
      </div>
      <div className="max-w-1012 pt-10 mx-auto">
        <div className="border border-solid border-border bg-default rounded-md">
          <div className="boxBorder bg-subtle rounded-t-md justify-between items-center p-4 md:flex">
            <nav className="mb-0">
              <NavButton activePath={path} href="/">
                Repositories
              </NavButton>
              <NavButton activePath={path} href="/developers">
                Developers
              </NavButton>
            </nav>
            <div className="flex items-center md:justify-end md:mt-0 md:ml-0">
              <div>
                <span className="px-4 text-fg-muted cursor-pointer">
                  Language: <span className="font-semibold">Any</span>
                </span>
              </div>
              <div>
                <span className="px-4 text-fg-muted cursor-pointer">
                  Date range: <span className="font-semibold">Today</span>
                </span>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};
