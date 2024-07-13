import { useDisconnect, useEnsName } from "wagmi";
import { LucideLogOut } from "lucide-react";
import AddressOrEns from "@/components/common/addressOrEns";
import { mainnet } from "viem/chains";
import EnsPictureOrAvatar from "@/components/common/ensPictureOrAvatar";
import { signOut } from "next-auth/react";

const UserProfile = ({address}) => {
  const { data } = useEnsName({ address: address, chainId: mainnet.id });
  const { disconnect } = useDisconnect();

  const signUserOut = async () => {
    disconnect();
    await signOut();
  }

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <EnsPictureOrAvatar domain={data} />
        <AddressOrEns address={address} />
      </div>
      <LucideLogOut onClick={signUserOut} className="h-4 w-4 cursor-pointer" />
    </div>
  );
}

export default UserProfile;