import MerchCard from "@/components/common/merchCard";
import Layout from "@/components/common/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <p className="text-4xl font-bold mb-2">Donate Old Merch, Fund <span className="text-pink-400">Public Goods</span></p>
      <p className="text-gray-400 max-w-4xl text-sm">Merch&apos;n&apos;dice let&apos;s you recycle your old merch and reduce the waste by donating it. You can also buy or participate in the raffle to win the donated merch you have missed. All the earning from the platform are used to fund public goods and open source projects.
        <Link class="text-pink-400" href="/learn-more"> Learn more.</Link>
      </p>
      <p className="mt-10 text-gray-400">Merch store</p>
      <div className="grid grid-cols-3 gap-5 mt-3">
        <MerchCard
          image="https://imageio.forbes.com/specials-images/imageserve/60d9b443753f53ab8eb7eaea/Violet-Grey-collaboration-with-Monica-Rose--Photo-Credit--Joyce-Park-/0x0.png?format=png&crop=674,674,x0,y2,safe&width=960"
          title="Violet Grey shirt"
          event="ETHGlobal Lisbon"
          donor="0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5"
        />
        <MerchCard
          image="https://pbs.twimg.com/media/Fc3w2wdX0AAfmGB.jpg"
          title="Raave Sweater"
          event="Devconnect Istanbul"
          donor="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
        />
        <MerchCard
          image="https://pbs.twimg.com/media/FTO7lkBVUAEErr1.jpg"
          title="Azuki Jacket"
          event="NFT Paris"
          donor="0x50c55d80109a9dAc3f262a071d8E51bB957Ae497"
        />
        {/*<MerchCard />*/}
        {/*<MerchCard />*/}
        {/*<MerchCard />*/}
      </div>

    </Layout>
  );
}
