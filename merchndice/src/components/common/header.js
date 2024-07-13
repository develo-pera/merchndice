import Link from "next/link";
import LoginModal from "@/components/common/loginModal";
import { useAccount, useDisconnect } from "wagmi";
import truncateEthAddress from "truncate-eth-address";
import { LucideLogOut } from "lucide-react";

const Header = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
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
        {
          account.address ?
            (
              <div className="flex items-center gap-5">
                <p>{truncateEthAddress(account.address)}</p>
                <LucideLogOut onClick={disconnect} className="h-4 w-4 cursor-pointer" />
              </div>
            ) :
            <LoginModal />
        }
      </header>
    </div>
  );
}

export default Header;