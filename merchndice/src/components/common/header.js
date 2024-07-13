import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => (
  <div className="flex w-full flex-col">
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-10 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <span className=" uppercase">👕🎲 Merch'n'dice</span>
        </Link>
        <Link
          href="/"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="/recycle"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Recycle merch
        </Link>
        <Link
          href="/public-goods"
          className="text-foreground transition-colors hover:text-foreground flex items-center gap-2"
        >
          <img width={30} src="/nouns-red.png" alt="Nouns glasses" />
          <img width={15} src="/apecoin-logo.svg" alt="Apecoin logo glasses" />
          Public goods
        </Link>
        <Link
          href="/how-it-works"
          className="text-foreground transition-colors hover:text-foreground"
        >
          How it works
        </Link>
      </nav>
      <Button variant="outline">Connect</Button>
    </header>
  </div>
);

export default Header;