import { Tooltip } from "flowbite-react";

import {
  numIcons,
  SubscriptionIcons,
  ExpenseIcons,
  BusinessIcons,
  DevToolsIcons,
} from "../lib/icons";
import { Icon } from "../_components/atoms/Icon";
import { _PAGES } from "../lib/pages";

function About() {
  const numberIcons = numIcons(true);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-4 py-16">
        <div className="text-center text-5xl font-extrabold tracking-tight lg:mx-32">
          About
        </div>

        {/* Paragraph 1 */}
        <div className="lg:mx-32">
          SubTrackr is a free subscription tracker designed to simplify managing
          recurring expenses. The project is open-sourced and available on{" "}
          <a
            href={_PAGES.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          .
        </div>

        {/* Icon Grid */}
        <div className="lg:mx-32">
          ST currently supports over {numberIcons} subscriptions including:
          <div className="mb-2 mt-8 flex">💰</div>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-8">
            {Object.values(ExpenseIcons).map((icon) => (
              <Tooltip content={icon.name} className="capitalize">
                <Icon name={icon.icon} key={icon.icon} />
              </Tooltip>
            ))}
          </div>
          <div className="my-4 flex">✈️</div>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-8">
            {Object.values(SubscriptionIcons).map((icon) => (
              <Tooltip content={icon.name} className="capitalize">
                <Icon name={icon.icon} key={icon.icon} />
              </Tooltip>
            ))}
          </div>
          <div className="my-4 flex">⛵</div>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-8">
            {Object.values(BusinessIcons).map((icon) => (
              <Tooltip content={icon.name} className="capitalize">
                <Icon name={icon.icon} key={icon.icon} />
              </Tooltip>
            ))}
          </div>
          <div className="my-4 flex">👨‍💻</div>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-8">
            {Object.values(DevToolsIcons).map((icon) => (
              <Tooltip content={icon.name} className="capitalize">
                <Icon name={icon.icon} key={icon.icon} />
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="lg:mx-32 lg:my-16">
          Looking for an Expense Tracker? Check out{" "}
          <a
            href="https://xpensetrackr.com"
            target="_blank"
            className="font-semibold hover:underline"
          >
            XpenseTrackr
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
