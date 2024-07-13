import Layout from "@/components/common/layout";
import EnsPictureOrAvatar from "@/components/common/ensPictureOrAvatar";
import AddressOrEns from "@/components/common/addressOrEns";
import { useRouter } from "next/router";
import { useEnsName } from "wagmi";
import { mainnet } from "viem/chains";
import { useQuery } from "@tanstack/react-query";
import truncateEthAddress from "truncate-eth-address";
import EnsDetails from "@/components/common/ensDetails";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useEnsName({ address: id, chainId: mainnet.id });
  const fetchData = useQuery({
    queryKey: ['userTnxData'],
    queryFn: () => fetch('https://eth.blockscout.com/api/v2/addresses/0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5/transactions?filter=to%20%7C%20from').then((res) =>
      res.json(),
    ),
  })

  console.log("blockscoutData", fetchData);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-5 mb-20">
          <EnsPictureOrAvatar domain={data} className="!w-[70px]" />
          <AddressOrEns className="text-7xl font-bold" address={id} />
        </div>
        <div>
          <p className="text-gray-400 uppercase mb-5">Last 50 tnx</p>
          {
            fetchData.isPending && <p>Loading...</p>
          }
          <div className="grid items-center gap-x-5 gap-y-2 grid-cols-5">
            {
              !fetchData.isPending && !fetchData.error && fetchData.data && fetchData.data.items ?
                fetchData.data.items.map((tnx, i) => {
                  console.log(tnx)
                  return (
                    <>
                      <p className="text-sm text-gray-400">{truncateEthAddress(tnx.hash)}</p>
                      <EnsDetails textClassName="text-sm" imageClassName="!w-[20px]" address={tnx.from.hash} />
                      <EnsDetails textClassName="text-sm" imageClassName="!w-[20px]" address={tnx.to.hash} />
                      <p className="text-sm text-gray-400">{tnx.result}</p>
                      <a className="text-sm text-pink-400" href={`https://eth.blockscout.com/tx/${tnx.hash}`}>View on Blockscout</a>
                    </>
                  )
                }) :
                <></>
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default User;