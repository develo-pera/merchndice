import truncateEthAddress from "truncate-eth-address";
import { useEnsName } from "wagmi";
import { mainnet } from "viem/chains";

const AddressOrEns = ({address, className}) => {
  const { data } = useEnsName({ address: address, chainId: mainnet.id });
  const displayAddress = address ? truncateEthAddress(address) : "";

  return (
    <p className={className}>{data || displayAddress}</p>
  )
}

export default AddressOrEns;