import Layout from "@/components/common/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MerchCard from "@/components/common/merchCard";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useSession } from "next-auth/react";

const Recycle = () => {
  const { data: session, status } = useSession();
  const { address } = useAccount();
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [event, setEvent] = useState();
  const [size, setSize] = useState();
  const [date, setDate] = useState();

  const submit = () => {
    console.log(file);
  }

  if (status === "loading") {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (status === "unauthenticated") {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <p>Access Denied</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <p className="mb-5 uppercase">Donate merch</p>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <Label className="text-gray-400" htmlFor="photo">Photo</Label>
            <Input onChange={(e) => setFile(e.target.files[0])} className="mt-2 mb-3" id="photo" type="file" />
            <Label className="text-gray-400" htmlFor="title">Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="mt-2 mb-3" placeholder="Title" />
            <Label className="text-gray-400" htmlFor="event">Event</Label>
            <Input value={event} onChange={(e) => setEvent(e.target.value)} id="event" className="mt-2 mb-3" placeholder="Event" />
            <Label className="text-gray-400" htmlFor="size">Size</Label>
            <Input value={size} onChange={(e) => setSize(e.target.value)} className="mt-2 mb-3" placeholder="Size" />
            <Label className="text-gray-400" htmlFor="date">When did you get this merch</Label>
            <Input value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 mb-3" type="date" />
            <Button onClick={submit} className="mt-5 w-full">Donate</Button>
          </div>
          <div>
            <MerchCard
              image={file && URL.createObjectURL(file)}
              title={title}
              event={event}
              donor={address}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Recycle;