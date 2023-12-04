export type SubscriptionInfo = Record<
  string,
  {
    name: string;
    icon: string;
  }
>;

export const SubscriptionIcons: SubscriptionInfo = {
  // Car
  TESLA: {
    name: "Tesla",
    icon: "tesla",
  },
  // Online
  PRIME: {
    name: "Prime",
    icon: "prime",
  },
  // Fitness
  APPLE_FITNESS_PLUS: {
    name: "Apple Fitness+",
    icon: "applefitnessplus",
  },
  PELOTON: {
    name: "Peloton",
    icon: "peloton",
  },
  STRAVA: {
    name: "Strava",
    icon: "strava",
  },
  // Media
  APPLETV: {
    name: "Apple TV+",
    icon: "appletvplus",
  },
  AUDIBLE: {
    name: "Audible",
    icon: "audible",
  },
  DISNEY: {
    name: "Disney+",
    icon: "disneyplus",
  },
  HULU: {
    name: "Hulu",
    icon: "hulu",
  },
  MAX: {
    name: "Max",
    icon: "max",
  },
  NETFLIX: {
    name: "Netflix",
    icon: "netflix",
  },
  PARAMOUNTPLUS: {
    name: "Paramount+",
    icon: "paramountplus",
  },
  YOUTUBE_PREMIUM: {
    name: "YouTube Premium",
    icon: "youtubepremium",
  },
  // Music
  APPLEMUSIC: {
    name: "Apple Music",
    icon: "applemusic",
  },
  AMAZON_MUSIC: {
    name: "Amazon Music",
    icon: "amazonmusic",
  },
  PANDORA: {
    name: "Pandora",
    icon: "pandora",
  },
  SOUNDCLOUD: {
    name: "SoundCloud Go",
    icon: "soundcloud",
  },
  SPOTIFY: {
    name: "Spotify",
    icon: "spotify",
  },
  // SAAS - design
  ADOBE: {
    name: "Adobe",
    icon: "adobe",
  },
  CANVA: {
    name: "Canva",
    icon: "canva",
  },
  // SAAS - productivity
  MICROSOFT365: {
    name: "Microsoft 365",
    icon: "microsoft365",
  },
  NOTION: {
    name: "Notion",
    icon: "notion",
  },
  SUPERHUMAN: {
    name: "Superhuman",
    icon: "superhuman",
  },
  ZAPIER: {
    name: "Zapier",
    icon: "zapier",
  },
  // SAAS - AI
  CHATGPT: {
    name: "ChatGPT",
    icon: "chatgpt",
  },
  MIDJOURNEY: {
    name: "Midjourney",
    icon: "midjourney",
  },
  // Meal plans
  BLUEAPRON: {
    name: "Blue Apron",
    icon: "blueapron",
  },
  FACTOR: {
    name: "Factor",
    icon: "factor",
  },
  // Makeup
  IPSY: {
    name: "Ipsy",
    icon: "ipsy",
  },
  // Pets
  BARKBOX: {
    name: "BarkBox",
    icon: "barkbox",
  },
  // Misc
  DOLLARSHAVECLUB: {
    name: "Dollar Shave Club",
    icon: "dollarshaveclub",
  },
  // Membership based warehouse
  COSTCO: {
    name: "Costco",
    icon: "costco",
  },
  SAMSCLUB: {
    name: "Sams Club",
    icon: "samsclub",
  },
  // Gaming
  APPLEARCADE: {
    name: "Apple Arcade",
    icon: "applearcade",
  },
  EAPLAY: {
    name: "EA Play",
    icon: "eaplay",
  },
  NINTENDO: {
    name: "Nintendo",
    icon: "nintendo",
  },
  PSPLUS: {
    name: "PlayStation Plus",
    icon: "psplus",
  },
  WOW: {
    name: "World of Warcraft",
    icon: "wow",
  },
  XBOX: {
    name: "Xbox",
    icon: "xbox",
  },
  // Personal finance
  YNAB: {
    name: "You Need a Budget (YNAB)",
    icon: "ynab",
  },
  // Print / digital subscriptions
  ECONOMIST: {
    name: "The Economist",
    icon: "economist",
  },
  NYT: {
    name: "The New York Times",
    icon: "nyt",
  },
  WSJ: {
    name: "The Wall Street Journal",
    icon: "wsj",
  },
  // Storage
  GOOGLEONE: {
    name: "Google One",
    icon: "googleone",
  },
  ICLOUD: {
    name: "iCloud",
    icon: "icloud",
  },
  // Dating
  BUMBLE: {
    name: "Bumble",
    icon: "bumble",
  },
  TINDER: {
    name: "Tinder",
    icon: "tinder",
  },
  // Food delivery
  DASHPASS: {
    name: "Dash Pass",
    icon: "dashpass",
  }
};

export const ExpenseIcons: SubscriptionInfo = {
  CAR: {
    name: "Car",
    icon: "car",
  },
  CAR_INSURANCE: {
    name: "Car Insurance",
    icon: "carinsurance",
  },
  GYM: {
    name: "Gym",
    icon: "gym",
  },
  MORTGAGE: {
    name: "Mortgage",
    icon: "mortgage",
  },
  RENT: {
    name: "Rent",
    icon: "rent",
  },
  PHONE: {
    name: "Phone",
    icon: "phone",
  },
  UTILITIES: {
    name: "Utilities",
    icon: "utilities",
  },
};

export const BusinessIcons: SubscriptionInfo = {
  // COLLABORATION
  AIRTABLE: {
    name: "Airtable",
    icon: "airtable",
  },
  // COMMUNICATION
  BASECAMP: {
    name: "Basecamp",
    icon: "basecamp",
  },
  // DESIGN
  FIGMA: {
    name: "Figma",
    icon: "figma",
  },
  // PRODUCTIVITY
  ASANA: {
    name: "Asana",
    icon: "asana",
  },
  JIRA: {
    name: "Jira",
    icon: "jira",
  },
  // DATA VIZ
  TABLEAU: {
    name: "Tableau",
    icon: "tableau",
  },
  // VIDEO TOOLS
  LOOM: {
    name: "Loom",
    icon: "loom",
  },
  ZOOM: {
    name: "Zoom",
    icon: "zoom",
  },
  // MISC
  HUBSPOT: {
    name: "HubSpot",
    icon: "hubspot",
  },
  // Accounting
  QUICKBOOKS: {
    name: "QuickBooks",
    icon: "quickbooks",
  },
};

export const DevToolsIcons: SubscriptionInfo = {
  // AI
  COPILOT: {
    name: "Copilot",
    icon: "copilot",
  },
  // Cloud
  AWS: {
    name: "AWS",
    icon: "aws",
  },
  DIGITALOCEAN: {
    name: "DigitalOcean",
    icon: "digitalocean",
  },
  HEROKU: {
    name: "Heroku",
    icon: "heroku",
  },
  // Monitoring
  SENTRY: {
    name: "Sentry",
    icon: "sentry",
  },
  // IDE
  JETBRAINS: {
    name: "JetBrains",
    icon: "jetbrains",
  },
  // Add more dev tools as needed...
};

/**
 * Checks if an icon is available in the expense, subscription, business, or dev tools icons.
 *
 * @param {string} icon - The icon to check.
 * @return {boolean} - True if the icon is available, false otherwise.
 */
export const isIconAvailable = (icon: string) => {
  return (
    Object.values(ExpenseIcons).map(i => i.icon).includes(icon) ||
    Object.values(SubscriptionIcons).map(i => i.icon).includes(icon) ||
    Object.values(BusinessIcons).map(i => i.icon).includes(icon) ||
    Object.values(DevToolsIcons).map(i => i.icon).includes(icon)
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
