import Layout from "@/components/common/layout";
import Link from "next/link";

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
  </Layout>
);

export default PublicGoods;