"use client";

export const Footer = () => {
  return (
    <footer className="bg-slate-700 shadow text-white pt-2 pb-6 px-4 lg:px-16 md:pt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md sm:text-center">
          {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SubsTrackr ©
          </a>
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-md font-medium sm:mt-0">
          <li>
            <a href="/" className="me-4 hover:underline md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adnjoo/SubsTrackr"
              className="me-4 hover:underline md:me-6"
              target="_blank"
            >
              Code &nbsp;{`< / >`}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
