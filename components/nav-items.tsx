import clsx from "clsx";
import Link from "next/link";


interface NavItemsProps {
    name: string;
    url: string;
    Icon: any;
    isActive: boolean;
}

const NavItems = ({
    name = "",
    url = "",
    Icon = <></>,
    isActive = false,
  }: NavItemsProps) => {
    return (
      <Link
        className={clsx(
          "my-0.5 inline-flex items-center rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 hover:bg-accent hover:text-accent-foreground font-semibold text-sm justify-start gap-2 px-3",
          { "bg-accent text-accent-foreground": isActive }
        )}
        href={url}
      >
        {Icon}
        {name}
      </Link>
    );
};

export default NavItems