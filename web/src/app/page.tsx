import { CrudShowcase } from "./_components/CrudShowcase";
import { SignInButton } from "./_components/SignInButton";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <div className="text-5xl font-extrabold tracking-tight">
          Subs Trackr
        </div>
        <div className="flex flex-col items-center gap-2">
          <SignInButton />
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}
