"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../assets/dropbox-logo.svg";
import { UserButton } from "@clerk/nextjs";
import { SignInButton, SignedOut, SignUpButton } from "@clerk/clerk-react";
import { ModeToggle } from "./theme/theme-toggler";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-4">
        <div className="bg-[#0866FF] p-2">
          <Image src={logo} alt="Dropbox Logo" width={25} height={25} />
        </div>
        <h1 className="font-bold text-2xl tracking-tighter">Dropclone</h1>
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton signUpFallbackRedirectUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}
