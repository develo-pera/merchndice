import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import truncateEthAddress from "truncate-eth-address";
import EnsPictureOrAvatar from "@/components/common/ensPictureOrAvatar";
import AddressOrEns from "@/components/common/addressOrEns";
import { useEnsName } from "wagmi";
import { mainnet } from "viem/chains";

const RaffleboardItem = ({address, entries}) => {
  const { data } = useEnsName({ address: address, chainId: mainnet.id });

  return (
    <div className="flex items-center justify-between text-sm mb-1">
      <Link className="flex text-sm items-center gap-2" href={`/user/${address}`}>
        <div className="flex items-center gap-2">
          <EnsPictureOrAvatar domain={data} className="!w-[16px]" />
          <AddressOrEns className="text-sm text-pink-400" address={address} />
        </div>
      </Link>
      <p className="text-gray-400">{entries} {entries > 1 ? " entries" : " entry"}</p>
    </div>
  );
}

export default RaffleboardItem;