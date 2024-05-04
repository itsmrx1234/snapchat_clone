import React from "react";
import logo from "@/public/Snapchat-logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-5 py-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="logo" width={40} height={12} />
        <Input
          type="text"
          placeholder="Search . . ."
          className="rounded-full"
        />
      </div>
      <div>
        <Button variant={"ghost"} className="font-bold">
          Stories
        </Button>
        <Button variant={"ghost"} className="font-bold">
          Spotlight
        </Button>
        <Button variant={"ghost"} className="font-bold">
          Chat
        </Button>
        <Button variant={"ghost"} className="font-bold">
          Lenses
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant={"ghost"}>
          <TbGridDots />
        </Button>
        <Button className="rounded-full">Snapchat-ads</Button>
        <Button className="rounded-full">Download</Button>
        <Button size={"icon"} className="rounded-full">
          <IoMdLogOut size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
