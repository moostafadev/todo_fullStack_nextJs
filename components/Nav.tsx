import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="container flex items-center justify-between my-4">
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button variant={"secondary"}>
          <SignInButton />
        </Button>
      </SignedOut>
    </nav>
  );
};

export default Nav;
