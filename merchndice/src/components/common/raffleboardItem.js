import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import truncateEthAddress from "truncate-eth-address";

const RaffleboardItem = ({address, entries}) => (
  <div className="flex items-center justify-between text-sm mb-1">
    <Link className="flex text-sm items-center gap-2" href={`/user/${address}`}>
      <Avatar className="w-4 h-4">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <p className="text-sm text-pink-400">{truncateEthAddress(address)}</p>
    </Link>
    <p className="text-gray-400">{entries} {entries > 1 ? " entries" : " entry"}</p>
  </div>
);

export default RaffleboardItem;