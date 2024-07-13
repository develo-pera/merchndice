import AddressOrEns from "@/components/common/addressOrEns";
import { useEnsName } from "wagmi";
import { mainnet } from "viem/chains";
import EnsPictureOrAvatar from "@/components/common/ensPictureOrAvatar";

const EnsDetails = ({address, className, textClassName, imageClassName}) => {
  const { data } = useEnsName({ address: address, chainId: mainnet.id });

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <EnsPictureOrAvatar className={imageClassName} domain={data} />
      <AddressOrEns className={textClassName} address={address} />
    </div>
  )
}

export default EnsDetails;