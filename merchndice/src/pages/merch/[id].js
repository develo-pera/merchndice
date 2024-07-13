import Link from "next/link";
import Layout from "@/components/common/layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LucideSparkles } from "lucide-react";
import truncateEthAddress from "truncate-eth-address";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import RaffleboardItem from "@/components/common/raffleboardItem";
import EnsPictureOrAvatar from "@/components/common/ensPictureOrAvatar";
import AddressOrEns from "@/components/common/addressOrEns";
import { useEnsName } from "wagmi";
import { mainnet } from "viem/chains";

const SingleMerch = () => {
  const image = "https://imageio.forbes.com/specials-images/imageserve/60d9b443753f53ab8eb7eaea/Violet-Grey-collaboration-with-Monica-Rose--Photo-Credit--Joyce-Park-/0x0.png?format=png&crop=674,674,x0,y2,safe&width=960"
  const title = "Superawesome T-Shirt"
  const event = "ETHGlobal Brussels"
  const donor="0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5"
  const ticketPrice = 5;

  const { data } = useEnsName({ address: donor, chainId: mainnet.id });

  return (
    <Layout>
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <p className="text-4xl font-bold my-5">{title}</p>
          <Alert>
            <LucideSparkles className="h-4 w-4" />
            <AlertTitle>{event}</AlertTitle>
            <AlertDescription className="text-gray-400">
              This merch was collected at {event} in March 2024.
            </AlertDescription>
          </Alert>
          <div className="text-gray-400 text-sm mt-5">
            <div className="flex items-center justify-between">
              <p>Size:</p>
              <p className="uppercase">XL</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Date collected:</p>
              <p>06.05.2023.</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Donor:</p>
              <div className="flex items-center gap-2">
                <EnsPictureOrAvatar domain={data} className="!w-[16px]" />
                <AddressOrEns className="text-sm" address={donor} />
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <p>Ticket price:</p>
              <p>$5</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Raffle starts in:</p>
              <p>15 blocks</p>
            </div>
          </div>
          <div className="grid gap-3 mt-3">
            <Button variant="secondary" className="w-full">Join the raffle</Button>
            <Button className="w-full">Buy instantly for ${ticketPrice * 5}</Button>
          </div>
          <div className="mt-10">
            <p className="text-gray-400 mb-3">Raffleboard</p>
            <div>
              <RaffleboardItem entries={3} address="0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5" />
              <RaffleboardItem entries={1} address="0x50c55d80109a9dAc3f262a071d8E51bB957Ae497" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleMerch;