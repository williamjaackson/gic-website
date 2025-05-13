import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* GIC */}
          <Image src="/logo.png" alt="GIC" width={48} height={48} />
          <span className="text-2xl font-bold tracking-tighter hidden md:block">
            Griffith ICT Club
          </span>
        </Link>
        <div className="gap-4 py-2 items-center hidden md:flex">
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/events">Events</NavbarLink>
          <NavbarLink href="/resources">Resources</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
          <Button>Join Now</Button>
        </div>
      </div>
    </nav>
  );
}

const NavbarLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="text-sm font-medium">
      {children}
    </Link>
  );
};
