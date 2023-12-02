import { _PAGES } from "../lib/pages";

function About() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center gap-12 px-4 py-16">
        <div className="text-5xl font-extrabold tracking-tight">About</div>
        <p className="lg:mx-32">
          SubTrackr is a free subscription tracker designed to simplify managing
          recurring expenses. Created by{" "}
          <a className="underline" href={_PAGES.GITHUB_PERSONAL}>
            Andrew Njoo
          </a>.
        </p>
        <p className="lg:mx-32">
          This project is open-sourced and available on{" "}
          <a
            href={_PAGES.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          , encouraging collaboration and improvements from the community. Start
          simplifying your financial management today with SubTrackr.
        </p>
        <p className="lg:mx-32"></p>
      </div>
    </div>
  );
}

export default About;
