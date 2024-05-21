"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../assets/dropbox-logo.svg";
import { UserButton } from "@clerk/nextjs";
import { SignInButton, SignedOut } from "@clerk/clerk-react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-[#0866FF] p-2">
          <Image src={logo} alt="Dropbox Logo" width={40} height={40} />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
      <div>
        {/* Theme button */}
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton signUpFallbackRedirectUrl="/dashboard" />
        </SignedOut>
      </div>
    </header>
  );
}
