"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Navbar } from "flowbite-react";
import { classNames } from "../utils/helpers";

import { STIcon } from "./atoms/STIcon";

export const MyNavbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <Navbar fluid className="bg-slate-700 p-2 px-4 text-white lg:px-16">
      <Navbar.Brand as={Link} href="/">
        <STIcon />
        <span className="ml-2 text-lg font-semibold">Subs Trackr</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          className={classNames(
            pathname === "/" && "!text-blue-500",
            "text-white transition-colors hover:text-blue-500",
          )}
          href="/"
        >
          Home
        </Link>
        <Link
          className={classNames(
            pathname === "/about" && "!text-blue-500",
            "text-white transition-colors hover:text-blue-500",
          )}
          href="/about"
        >
          About
        </Link>
        {session ? (
          <Link
            href="/api/auth/signout"
            className="ml-auto text-white hover:text-blue-500"
          >
            Sign out
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="ml-auto">
            Sign in
          </Link>
        )}{" "}
      </Navbar.Collapse>
    </Navbar>
  );
};
