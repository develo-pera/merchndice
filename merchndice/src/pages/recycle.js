import Layout from "@/components/common/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MerchCard from "@/components/common/merchCard";
import { Label } from "@/components/ui/label";

const Recycle = () => (
  <Layout>
    <div className="max-w-4xl mx-auto">
      <p className="mb-5 uppercase">Donate merch</p>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <Label className="text-gray-400" htmlFor="photo">Photo</Label>
          <Input className="mt-2 mb-3" id="photo" type="file" />
          <Label className="text-gray-400" htmlFor="event">Event</Label>
          <Input id="event" className="mt-2 mb-3" placeholder="Event" />
          <Label className="text-gray-400" htmlFor="size">Size</Label>
          <Input className="mt-2 mb-3" placeholder="Size" />
          <Label className="text-gray-400" htmlFor="sex">Sex</Label>
          <Input className="mt-2 mb-3" placeholder="Sex" />
          <Label className="text-gray-400" htmlFor="date">When did you get this merch</Label>
          <Input className="mt-2 mb-3" type="date" />
          <Button className="mt-5 w-full">Donate</Button>
        </div>
        <div>
          <MerchCard />
        </div>
      </div>
    </div>
  </Layout>
);

export default Recycle;