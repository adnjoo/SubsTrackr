import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa6";

export type TestimonialProps = {
  profilePic: string;
  text: string;
  author: string;
  twitter: string;
};

export function Testimonial({
  profilePic,
  text,
  author,
  twitter,
}: TestimonialProps) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl border bg-transparent p-4 text-white shadow-lg md:max-w-2xl">
      <div className="flex">
        <div className="flex flex-shrink-0 flex-col items-center justify-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={profilePic}
            alt="Profile"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Testimonial
          </div>
          <p className="mt-2">{text}</p>
          <p className="mt-2 flex">
            - {author}
            <Link href={twitter} target="_blank">
              <FaTwitter className="ml-2 h-5 w-5 rounded-full object-cover transition hover:text-[#1d9bf0]" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
