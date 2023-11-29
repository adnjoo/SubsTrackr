// import Link from "next/link";

// function Footer() {
//   return (
//     <div className="bg-black text-white">
//       code available at{" "}
//       <Link href="https://github.com/adnjoo/SubscriptionTrackr" target="_blank">
//         github {`< / >`}
//       </Link>
//     </div>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SubsTrackr ©
          </a>
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
}

export default Footer;
