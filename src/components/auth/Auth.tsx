"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Auth = () => {
  const [registerAccount, setRegisterAccount] = useState(false);
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 ">
      <div
        className="rounded-xl bg-white w-[450px] pb-12"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center text-center space-y-2">
            <Image
              src={"/Main-Logo.png"}
              alt="TenderView"
              height={0}
              width={200}
            />

            <h1 className="font-bold text-2xl">
              {registerAccount ? "Create an account" : "Login to your account"}
            </h1>
            <div
              className="inline-flex items-center gap-2 text-[#208494] hover:underline cursor-pointer font-medium text-sm"
              onClick={() => {
                setRegisterAccount(!registerAccount);
              }}
            >
              {registerAccount
                ? "Don't have a account? Sign-up"
                : "Already have an account? Sign-in"}
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <div>
            <form action="">
              <div className="grid gap-2">
                {registerAccount && (
                  <div className="grid gap-1 py-2">
                    <Label htmlFor="name">Name</Label>
                    <Input placeholder="Full Name" />
                  </div>
                )}

                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="you@example.com" type="email" />
                </div>

                {registerAccount && (
                  <div className="grid gap-1 py-2">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="********" type="password" />
                  </div>
                )}

                <div className="grid gap-1 py-2">
                  <Label htmlFor="cnfpassword">Confirm Password</Label>
                  <Input placeholder="********" type="password" />
                </div>

                <Button className="bg-[#3ca0af]">
                  {registerAccount ? "Sign up" : "Sign in"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
