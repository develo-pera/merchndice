import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import truncateEthAddress from "truncate-eth-address";
import { LucideSparkles } from "lucide-react";
import AddressOrEns from "@/components/common/addressOrEns";
import EnsPictureOrAvatar from "@/components/common/ensPictureOrAvatar";
import { useEnsName } from "wagmi";
import { mainnet } from "viem/chains";

const MerchCard = ({
  image,
  id=1,
  title,
  event,
  donor
}) => {
  const { data } = useEnsName({ address: donor, chainId: mainnet.id });

  return (
    <Card>
      <Link href={`/merch/${id}`}>
        <CardContent className="mt-[24px] hover:cursor-pointer">
          <div className="mb-3">
            {
              image ?
                <img src={image} alt="" /> :
                <div className="h-[222px] bg-gray-800" />
            }
          </div>
          <p className="font-bold mb-3">{title || "Title"}</p>
          <div className="flex justify-between items-center text-gray-400">
            <p className="text-sm">Event:</p>
            <div>
              <p className="text-sm text-pink-400">{event}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-400">
            <p className="text-sm">Donor:</p>
            <div className="flex items-center gap-2">
              <EnsPictureOrAvatar domain={data} className="!w-[16px]" />
              <AddressOrEns className="text-sm text-pink-400" address={donor} />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default MerchCard;