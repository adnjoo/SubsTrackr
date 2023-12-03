import { Tooltip } from "flowbite-react";

import {
  numIcons,
  SubscriptionIcons,
  ExpenseIcons,
  BusinessIcons,
} from "../lib/icons";
import { Icon } from "../_components/atoms/Icon";
import { _PAGES } from "../lib/pages";

function About() {
  const numberIcons = numIcons(true);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col  gap-12 px-4 py-16">
        <div className="text-center text-5xl font-extrabold tracking-tight lg:mx-32">
          About
        </div>

        {/* Paragraph 1 */}
        <div className="lg:mx-32">
          SubTrackr is a free subscription tracker designed to simplify managing
          recurring expenses. Created by{" "}
          <a className="underline" href={_PAGES.GITHUB_PERSONAL}>
            Andrew Njoo
          </a>
          .
        </div>

        {/* Paragraph 2 */}
        <div className="lg:mx-32">
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
          simplifying your financial management today with SubsTrackr.
        </div>

        {/* Icon Grid */}
        <div className="lg:mx-32">
          We currently support over {numberIcons} subscriptions including:
          <div className="mt-8 grid grid-cols-6 gap-3 md:grid-cols-8">
            {Object.values(ExpenseIcons).map((icon) => (
              <Tooltip content={icon} className="capitalize">
                <Icon name={icon} key={icon} />
              </Tooltip>
            ))}
            {Object.values(SubscriptionIcons).map((icon) => (
              <Tooltip content={icon} className="capitalize">
                <Icon name={icon} key={icon} />
              </Tooltip>
            ))}
            {Object.values(BusinessIcons).map((icon) => (
              <Tooltip content={icon} className="capitalize">
                <Icon name={icon} key={icon} />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
