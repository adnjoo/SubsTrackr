import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white">
      code available at{" "}
      <Link href="https://github.com/adnjoo/SubscriptionTrackr" target="_blank">
        github {`< / >`}
      </Link>
    </div>
  );
}

export default Footer;
