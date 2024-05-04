import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
const Signup = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl my-2 font-medium">
        Signup to Snapchat
      </h1>
      <Button className="w-full flex gap-4">
        Signup with Github <FaGithub size={"24px"} />
      </Button>
      <p>
        Already have an account?{" "}
        <Link href={"/login"} className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
