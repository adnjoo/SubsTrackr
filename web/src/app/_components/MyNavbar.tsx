"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Navbar } from "flowbite-react";

import { classNames } from "../utils/helpers";
import { _PAGES } from "../lib/pages";
import { STIcon } from "./atoms/STIcon";

export const MyNavbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <Navbar fluid className="bg-slate-700 p-2 px-4 text-white lg:px-16">
      <Navbar.Brand as={Link} href="/">
        <STIcon className="mb-2 h-8 w-8" />
        <span className="ml-2 text-lg font-semibold">Subs Trackr</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className=''>
        <Link
          className={classNames(
            pathname === "/" && "!text-blue-500",
            "text-white transition-colors hover:text-blue-500 mb-2 sm:my-0",
          )}
          href="/"
        >
          Home
        </Link>
        {session && (
          <Link
            className={classNames(
              pathname === "/dashboard" && "!text-blue-500",
              "transition-colors hover:text-blue-500 mb-2 sm:my-0",
            )}
            href="/dashboard"
          >
            Dashboard
          </Link>
        )}
        <Link
          className={classNames(
            pathname === "/about" && "!text-blue-500",
            "transition-colors hover:text-blue-500 mb-2 sm:my-0",
          )}
          href="/about"
        >
          About
        </Link>
        {session ? (
          <Link
            href={_PAGES.SIGN_OUT}
            className="hover:text-blue-500 md:ml-auto mb-2 sm:my-0"
          >
            Sign out
          </Link>
        ) : (
          <Link
            href={`${_PAGES.SIGN_IN}?callbackUrl=/dashboard`}
            className="hover:text-blue-500 md:ml-auto"
          >
            Sign in
          </Link>
        )}{" "}
      </Navbar.Collapse>
    </Navbar>
  );
};
