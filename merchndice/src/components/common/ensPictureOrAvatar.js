import { useEnsAvatar } from "wagmi";
import { normalize } from "viem/ens";

const EnsPictureOrAvatar = ({domain, className}) => {
  const { data } = useEnsAvatar({
    name: normalize(domain),
  })

  console.log("domain", domain);
  console.log("avatar", data);

  return (
    data ? <img className={`w-[22px] rounded-full ${className}`} src={data} alt="ENS Avatar" /> : <></>
  )
}

export default EnsPictureOrAvatar;