import Layout from "@/components/common/layout";
import Link from "next/link";
import PublicGoodCard from "@/components/common/publicGoodCard";
import { Button } from "@/components/ui/button";

const PublicGoods = () => (
  <Layout>
    <div className="flex items-center gap-10 mb-10">
      <img src="/nouns-red.png" alt="Nouns logo"/>
      <img className="h-[100px]" src="/apecoin-logo.svg" alt="ApeCoin logo" />
    </div>
    <p className="text-4xl font-bold mb-2"><span className="text-pink-400">Apes and Nouns</span>, together for the better world</p>
    <p className="text-gray-400 max-w-4xl text-sm">Anyone can propose public goods and open source projects to be included in the funding rounds, but in order to vote and choose the projects that will be funded in the funding rounds you need at least 500 ApeCoin or $nouns tokens.
      <Link class="text-pink-400" href="/learn-more"> Learn more how MERCH&apos;N&apos;DICE works.</Link>
    </p>
    <div>
      <div className="flex items-center justify-between">
        <p className="mt-10 mb-5">Next round candidates</p>
        <Button variant="outline">Propose a project</Button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <PublicGoodCard projectName="rotki" projectDescription="rotki is an open source portfolio tracker, accounting and analytics tool that protects your privacy." proposer={"0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5"} />
        <PublicGoodCard projectName="Scaffold-ETH 2" projectDescription="n open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain." proposer={"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"} />
      </div>
    </div>
  </Layout>
);

export default PublicGoods;