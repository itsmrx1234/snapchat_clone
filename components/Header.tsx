import Image from "next/image";
import React from "react";
import myai from "@/public/myai-asset.png";
import { Button } from "@/components/ui/button";
import { IoMdLaptop } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      <div>
        <h1 className="text-6xl font-medium">
          Snapchat is
          <br /> now on the
          <br /> web!
        </h1>
        <h1 className="my-5 text-xl">
          Chat,Snap and Video call your friends from
          <br /> wherever you are
        </h1>
        <Button className="flex gap-2 rounded-full">
          {" "}
          <IoMdLaptop/> Login to Chat
        </Button>
      </div>
      <div>
        <Image src={myai} alt="myai" width={650} height={650} />
      </div>
    </div>
  );
};

export default Header;
