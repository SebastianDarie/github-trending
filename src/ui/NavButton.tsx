import Link from "next/link";

interface NavButtonProps {
  activePath: string;
  href: string;
}

export const NavButton: React.FC<NavButtonProps> = ({
  activePath,
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <a
        className={`${
          activePath === href
            ? "text-fg-emphasis bg-accent-emphasis border-accent-emphasis navBtn"
            : "navBtn"
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
