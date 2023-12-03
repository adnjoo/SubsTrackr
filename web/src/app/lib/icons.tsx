export const SubscriptionIcons = {
  // Car
  TESLA: "tesla",
  // Online
  PRIME: "prime",
  // Fitness
  PELOTON: "peloton",
  STRAVA: "strava",
  // Media
  APPLETV: "appletvplus",
  AUDIBLE: "audible",
  DISNEY: "disneyplus",
  HULU: "hulu",
  MAX: "max",
  NETFLIX: "netflix",
  PARAMOUNTPLUS: "paramountplus",
  YOUTUBE_PREMIUM: "youtubepremium",
  // Music
  APPLEMUSIC: "applemusic",
  AMAZON_MUSIC: "amazonmusic",
  PANDORA: "pandora",
  SPOTIFY: "spotify",
  // SAAS - design
  ADOBE: "adobe",
  CANVA: "canva",
  // SAAS - productivity
  MICROSOFT365: "microsoft365",
  NOTION: "notion",
  SUPERHUMAN: "superhuman",
  ZAPIER: "zapier",
  // SAAS - AI
  CHATGPT: "chatgpt",
  MIDJOURNEY: "midjourney",
  // Meal plans
  BLUEAPRON: "blueapron",
  FACTOR: "factor",
  // Makeup
  IPSY: "ipsy",
  // Pets
  BARKBOX: "barkbox",
  // Misc
  DOLLARSHAVECLUB: "dollarshaveclub",
  // Gaming
  APPLEARCADE: "applearcade",
  EAPLAY: "eaplay",
  NINTENDO: "nintendo",
  PSPLUS: "psplus",
  WOW: "wow",
  XBOX: "xbox",
  // Personal finance
  YNAB: "ynab",
  // Print / digital subscriptions
  ECONOMIST: "economist",
  NYT: "nyt",
  WSJ: "wsj",
};

export const ExpenseIcons = {
  CAR: "car",
  // CAR_INSURANCE: "carinsurance", TODO: add
  GYM: "gym",
  MORTGAGE: "mortgage",
  PHONE: "phone",
  UTILITIES: "utilities",
};

export const BusinessIcons = {
  // COLLABORATION
  AIRTABLE: "airtable",
  // COMMUNICATION
  BASECAMP: "basecamp",
  // DESIGN
  FIGMA: "figma",
  // PRODUCTIVITY
  ASANA: "asana",
  JIRA: "jira",
  // DATA VIZ
  TABLEAU: "tableau",
  // VIDEO TOOLS
  LOOM: "loom",
  ZOOM: "zoom",
  // MISC
  HUBSPOT: "hubspot",
  // Accounting
  QUICKBOOKS: "quickbooks",
};

export const DevToolsIcons = {
  // AI
  COPILOT: "copilot",
  // Cloud
  AWS: "aws",
  DIGITALOCEAN: "digitalocean",
  HEROKU: "heroku",
  // Monitoring
  SENTRY: "sentry",
  // IDE
  JETBRAINS: "jetbrains",
};

/**
 * Checks if an icon is available in the expense, subscription, business, or dev tools icons.
 *
 * @param {string} icon - The icon to check.
 * @return {boolean} - True if the icon is available, false otherwise.
 */
export const isIconAvailable = (icon: string) => {
  return (
    Object.values(ExpenseIcons).includes(icon) ||
    Object.values(SubscriptionIcons).includes(icon) ||
    Object.values(BusinessIcons).includes(icon) ||
    Object.values(DevToolsIcons).includes(icon)
  );
};

/**
 * Calculates the number of icons in the system.
 *
 * @param {boolean} aggregate - Whether to return the total count of all icons or an array of counts per category.
 * @return {number[] | number} - An array of counts per category if `aggregate` is `false`, otherwise the total count of all icons.
 */
export const numIcons = (aggregate?: boolean): number[] | number => {
  const arr = [
    Object.keys(ExpenseIcons).length,
    Object.keys(SubscriptionIcons).length,
    Object.keys(BusinessIcons).length,
    Object.keys(DevToolsIcons).length,
  ];
  if (aggregate) {
    return arr.reduce((a, b) => a + b, 0);
  }
  return arr;
};
