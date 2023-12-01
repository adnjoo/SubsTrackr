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
          </a>
          , this tool aims to assist users in effectively monitoring their
          subscriptions, ultimately helping them save money.
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
          , encouraging collaboration and improvements from the community. Feel
          free to contribute or customize SubTrackr according to your needs.
        </p>
        <p className="lg:mx-32">
          Start simplifying your financial management today with SubTrackr. Say
          goodbye to overlooked subscriptions and hello to better savings!
        </p>
      </div>
    </div>
  );
}

export default About;
