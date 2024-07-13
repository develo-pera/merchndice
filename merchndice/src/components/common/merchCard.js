import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import truncateEthAddress from "truncate-eth-address";
import { LucideSparkles } from "lucide-react";

const MerchCard = ({
  id=1,
  image="https://imageio.forbes.com/specials-images/imageserve/60d9b443753f53ab8eb7eaea/Violet-Grey-collaboration-with-Monica-Rose--Photo-Credit--Joyce-Park-/0x0.png?format=png&crop=674,674,x0,y2,safe&width=960",
  title="Superawesome T-Shirt",
  event="ETHGlobal",
  donor="0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5"
}) => (
  <Card>
    <Link href={`/merch/${id}`}>
      <CardContent className="mt-[24px] hover:cursor-pointer">
        <img className="mb-3" src={image} alt="" />
        <p className="font-bold mb-3">Card Content</p>
        <div className="flex justify-between items-center text-gray-400">
          <p className="text-sm">Event:</p>
          <div>
            <p className="text-sm text-pink-400">{event}</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <p className="text-sm">Donor:</p>
          <div>
            <p className="text-sm text-pink-400">{truncateEthAddress(donor)}</p>
          </div>
        </div>
      </CardContent>
    </Link>
  </Card>
);

export default MerchCard;