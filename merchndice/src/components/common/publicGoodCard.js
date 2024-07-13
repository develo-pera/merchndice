import { Card, CardContent } from "@/components/ui/card";
import EnsDetails from "@/components/common/ensDetails";

const PublicGoodCard = ({
  projectName,
  projectDescription,
  proposer
 }) => {
  return (
    <Card>
      <CardContent className="mt-[24px]">
        <p className="font-bold mb-2">{projectName}</p>
        <p className="mb-3 text-sm text-gray-400">{projectDescription}</p>
        <EnsDetails address={proposer} />
      </CardContent>
    </Card>
  );
}

export default PublicGoodCard;