"use client";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-b border-zinc-800/50 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold font-mono">LAYR AI</h1>
          <SignedOut>
            <SignInButton
              mode="modal"
              appearance={{ elements: { button: "btn btn-primary" } }}
              fallbackRedirectUrl={"/"}
            >
              <Button className="btn btn-primary cursor-pointer font-bold">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
