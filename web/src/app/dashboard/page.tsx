import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { CrudShowcase } from "../_components";
import { _PAGES } from "../lib/pages";

export default async function Dashboard() {
  const session = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        {!session ? (
          <Link
            href={_PAGES.SIGN_IN}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            Sign in to view dashboard
          </Link>
        ) : (
          <CrudShowcase />
        )}
      </div>
    </main>
  );
}
