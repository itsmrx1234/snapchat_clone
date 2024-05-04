import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
const Login = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl my-2 font-medium">
        Login to Snapchat
      </h1>
      <Button className="w-full flex gap-4">
        Login with Github <FaGithub size={"24px"} />
      </Button>
      <p>
        New to Snapchat?{" "}
        <Link href={"/signup"} className="text-blue-500 underline">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
