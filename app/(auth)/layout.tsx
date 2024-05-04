import Image from "next/image";
import React from "react";
import logo from "@/public/Snapchat-logo.png";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="h-screen w-screen flex items-center justify-center ">
        <div className="bg-white p-10 flex flex-col items-center gap-6 ">
          <Image src={logo} alt="logo" width={40} height={40} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
