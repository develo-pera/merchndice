import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWeb3Modal } from '@web3modal/wagmi/react';

const LoginModal = () => {
  const { open } = useWeb3Modal();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chose login option</DialogTitle>
          <DialogDescription>
            Choose your preferred way to connect to our application
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={open}>Connect with WalletConnect AppKit</Button>
        </div>
        {/*<DialogFooter>*/}
        {/*</DialogFooter>*/}
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;