/**
 * Subscription icons
 *
 * Company logos
 * */
export const SubscriptionIcons = {
  // CONSUMER
  PRIME: "prime",
  TESLA: "tesla",
  // Fitness
  PELOTON: "peloton",
  STRAVA: "strava",
  // Media
  APPLETV: "appletvplus",
  DISNEY: "disneyplus",
  HULU: "hulu",
  MAX: "max",
  NETFLIX: "netflix",
  YOUTUBE_PREMIUM: "youtubepremium",
  // Music
  APPLEMUSIC: "applemusic",
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
  // SAAS - developer productivity
  COPILOT: "copilot",
};

/**
 * Expense icons
 *
 * Not necessarily related to subscriptions but still expenses
 * */
export const ExpenseIcons = {
  CAR: "car",
  // CAR_INSURANCE: "carinsurance", TODO: add
  GYM: "gym",
  MORTGAGE: "mortgage",
  PHONE: "phone",
  UTILITIES: "utilities",
};

export const isIconAvailable = (icon: string) => {
  return (
    Object.values(ExpenseIcons).includes(icon) ||
    Object.values(SubscriptionIcons).includes(icon) ||
    Object.values(BusinessIcons).includes(icon)
  );
};

/**
 * TODO: Business expense icons
 * */
export const BusinessIcons = {
  AIRTABLE: "airtable",
  BASECAMP: "basecamp",
  JIRA: "jira",
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
  ];
  if (aggregate) {
    return arr.reduce((a, b) => a + b, 0);
  }
  return arr;
};
